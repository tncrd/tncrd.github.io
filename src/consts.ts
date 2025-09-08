import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'My Numeri/que/ Garden',
  description:
    'Un blog customisé avec Astro Erudite qui traite de computer science and artificial intelligence.',
  href: '',
  author: 'tncrd',
  locale: 'en-US',
  featuredPostCount: 3,
  postsPerPage: 4,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  // {
  //   href: '/authors',
  //   label: 'authors',
  // },
  {
    href: '/about',
    label: 'about',
  },
  {
    href: '/tags',
    label: 'areas of interests',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/',
    label: 'Twitter',
  },
  {
    href: '',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
