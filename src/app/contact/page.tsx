// Config
import { NAV } from '@/modules/navigation/config'
// Types
import type { Metadata } from 'next'
import ContactForm from '@/components/input/ContactForm'

/** The history page head metadata configuration */
export const metadata: Metadata = {
  title: NAV.history.children
}

/** The contact page of the application */
export default function ContactPage () {
  return (
    <main>
      <div className='w-full h-24 bg-secondary' />
      <ContactForm />
    </main>
  )
}
