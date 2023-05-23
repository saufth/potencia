// Config
import { organization } from '../app/config'
// Types
import type {
  AppRouteConfig,
  NavConfig,
  Navigable,
  PageRouteConfig,
  SectionRouteConfig
} from '@/types/navigation'

/** The pages route names configuration */
export const PAGE_ROUTES: PageRouteConfig = {
  home: 'home',
  history: 'history',
  contact: 'contact'
}

/** The sections route names configuration */
export const SECTION_ROUTES: SectionRouteConfig = {
  solutions: 'solutions',
  about: 'about',
  values: 'values'
}

/** The application route names configuration */
export const APP_ROUTES: AppRouteConfig = {
  ...PAGE_ROUTES,
  ...SECTION_ROUTES
}

/** The main navigation configuration of the application */
export const NAV: NavConfig = {
  home: { // Page route
    children: 'Inicio',
    href: '/' // The home reference always is '/'
  },
  solutions: { // Section route
    children: 'Soluciones',
    href: `/#${APP_ROUTES.solutions}`
  },
  about: { // Section route
    children: 'Nosotros',
    href: `/#${APP_ROUTES.about}`
  },
  values: { // Section route
    children: 'Valores',
    href: `/#${APP_ROUTES.values}`
  },
  history: { // Page route
    children: 'Historia',
    href: `/${APP_ROUTES.history}`
  },
  contact: { // Page route
    children: 'Contáctanos',
    href: `/${APP_ROUTES.contact}`
  }
}

/** The navigation list configuration */
export const NAV_LIST: ReadonlyArray<Navigable> = Object.values(NAV)

/** The aria label for navigation directories */
export const navAriaLabel = `${organization} directorio`

/** The path of the core images */
export const coreImgPath = '/images/'

/** The path of the section images */
export const sectionsImgPath = `${coreImgPath}sections/`
