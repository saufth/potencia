// Components
import Link from './core/Link'
// Config
import { email } from '@/modules/app/config'
// Types
import type { Themeable } from '@/types/theme'

/** The email hypertext reference */
const mailto = `mailto:${email}`

/**
 * The main link to redirect to the default email provider interface of the user
 * @see {@link Themeable} for props specifications
 * @param Themeable The component props
 * @returns The LinkEmail component
 */
export default function LinkEmail ({ theme }: Themeable) {
  return (
    <Link href={mailto} theme={theme} underline>
      {email}
    </Link>
  )
}
