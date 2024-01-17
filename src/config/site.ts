import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { type MainNavItem } from '@/types'

interface SiteConfig {
  name: string,
  description: string,
  slogan?: string,
  url: URL | string,
  author: Author,
  mainNav: MainNavItem[]
}

export const author: Author = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const siteNav = [
  {
    title: 'Nuestro historia',
    href: '/historia'
  },
  {
    title: 'Contáctanos',
    href: '/contacto'
  }
]

export const domain = 'dpotencia.com'
export const contactEmail = `contacto@${domain}`

export const siteConfig: SiteConfig = {
  name: 'Potencia',
  description: 'Logística y transporte seguro a la medida de tus necesidades',
  slogan: 'Calidad, precio y rapidez trabajando para ti',
  url: `https://${domain}`,
  author,
  mainNav: [
    {
      title: 'Inicio',
      href: '/'
    },
    ...siteNav
  ]
}
