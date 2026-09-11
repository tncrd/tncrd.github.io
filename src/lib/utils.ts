import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function calculateWordCountFromHtml(
  html: string | null | undefined,
): number {
  if (!html) return 0
  const textOnly = html.replace(/<[^>]+>/g, '')
  return textOnly.split(/\s+/).filter(Boolean).length
}

export function readingTime(wordCount: number): string {
  const readingTimeMinutes = Math.max(1, Math.round(wordCount / 200))
  return `${readingTimeMinutes} min read`
}

/**
 * Indentation is relative to the shallowest heading in the post, not absolute.
 * Posts here write top-level sections as `#` (h1) and sub-sections as `##`,
 * but the template's own posts start at `##` — keying off the absolute depth
 * left both of those flat.
 */
export function getHeadingMargin(depth: number, minDepth: number = 1): string {
  const margins = ['', 'ml-4', 'ml-8', 'ml-12', 'ml-16']
  const level = Math.max(0, Math.min(depth - minDepth, margins.length - 1))
  return margins[level]
}

/** Weight the top level so the TOC reads as a hierarchy, not a flat list. */
export function getHeadingEmphasis(depth: number, minDepth: number = 1): string {
  return depth <= minDepth ? 'font-medium' : ''
}

export function getMinDepth(depths: number[]): number {
  return depths.length ? Math.min(...depths) : 1
}
