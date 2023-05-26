// Types
import type { Actionable } from './input'
import type { Parent } from './layout'
import type { Themeable } from './theme'
import type { Size } from './sizing'

/** The main routes of the application */
export type AppRoute = 'home' | 'history' | 'contact' | 'about' | 'solutions' | 'values'

/** Used for application routes configuration */
export type AppRouteConfig = ReadonlyArray<AppRoute>

/** Specifes where to open the linked document */
export type LinkTarget = '_blank' | '_self' | '_parent' | '_top' | 'framename'

/** Specifies the relationship between the current document and the linked document */
export type LinkRel = 'alternate'
  | 'author'
  | 'bookmark'
  | 'external'
  | 'help'
  | 'license'
  | 'next'
  | 'nofollow'
  | 'noopener'
  | 'noreferrer'
  | 'prev'
  | 'search'
  | 'tag'

/** Navegable properties */
export interface Navigable extends Required<Parent<string>> {
  /** Reference to redirect */
  href: string
}

/** Link properties */
export interface LinkProps extends Navigable, Themeable {
  /** Link target property */
  target?: LinkTarget
  /** Link rel property */
  rel?: LinkRel
  /** Link resize property */
  size?: Size
  /** Underline the link text */
  underline?: boolean
}

/** Used for navigation configuration */
export type NavConfig = ReadonlyArray<Navigable>

/** The link button component properties */
export interface LinkButtonProps extends LinkProps, Themeable {}

/** Menu component props */
export interface MenuProps extends Actionable {
  /** Menu status */
  isOpen: boolean
}
