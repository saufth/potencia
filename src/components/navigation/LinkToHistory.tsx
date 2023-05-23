// Components
import LinkButton from './core/LinkButton'
// Config
import { NAV } from '@/modules/navigation/config'
// Types
import type { Themeable } from '@/types/theme'

/**
 * The main link to history page
 * @see {@link Themeable} for props specifications
 * @param Themeable The component props
 * @returns The LinkToHistory component
 */
export default function LinkToHistory ({ theme }: Themeable) {
  return (
    <LinkButton href={NAV.history.href} theme={theme}>
      {NAV.history.children}
    </LinkButton>
  )
}
