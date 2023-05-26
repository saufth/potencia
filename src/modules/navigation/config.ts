// Config
import { organization } from '../app/config'
// Types
import type { AppRouteConfig, NavConfig } from '@/types/navigation'

/** The application route names configuration */
export const APP_ROUTES: AppRouteConfig = [
  'home',
  'solutions',
  'about',
  'values',
  'history',
  'contact'
]

/** The main navigation configuration of the application */
export const NAV: NavConfig = [
  { // Page route
    children: 'Inicio',
    href: '/' // The home reference always is '/'
  },
  { // Section route
    children: 'Soluciones',
    href: `/#${APP_ROUTES[1]}`
  },
  { // Section route
    children: 'Nosotros',
    href: `/#${APP_ROUTES[2]}`
  },
  { // Section route
    children: 'Valores',
    href: `/#${APP_ROUTES[3]}`
  },
  { // Page route
    children: 'Historia',
    href: `/${APP_ROUTES[4]}`
  },
  { // Page route
    children: 'Contáctanos',
    href: `/${APP_ROUTES[5]}`
  }
]

/** The path of the core images */
export const coreImgPath = '/images/'

/** The path of the section images */
export const sectionsImgPath = `${coreImgPath}sections/`

/** The aria label for navigation directories */
export const navAriaLabel = `${organization} directorio`
