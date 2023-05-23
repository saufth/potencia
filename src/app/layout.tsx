// Components
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/navigation/Navbar'
// Scripts
import GoogleSearchScript from '@/components/app/GoogleSearchScript'
import GoogleAnalyticsScript from '@/components/app/GoogleAnalyticsScript'
// Config
import { description, organization, keywords, authors, baseUrl, coverImageUrl } from '@/modules/app/config'
// Types
import type { Metadata } from 'next'
import type { Parent } from '@/types/layout'
// Styles
import '@/styles/globals.css'

/** The head metadata configuration */
export const metadata: Metadata = {
  title: {
    default: organization,
    template: `%s – ${organization}`
  },
  description,
  keywords,
  applicationName: organization,
  metadataBase: baseUrl,
  authors,
  creator: authors.name,
  publisher: authors.name,
  generator: 'Next.js',
  manifest: new URL('site.webmanifest', baseUrl),
  openGraph: {
    title: organization,
    description,
    url: baseUrl,
    siteName: organization,
    images: [
      {
        url: coverImageUrl,
        width: 1200,
        height: 640
      }
    ],
    locale: 'es-MX',
    type: 'website'
  },
  themeColor: '#A8BAA9',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
}

/**
 * The root layout component of the application
 * @see {@link Parent} for props specification
 * @param Parent The component props
 * @returns The RootLayout component
 */
export default function RootLayout ({ children }: Parent) {
  return (
    <html lang='es-MX'>
      <body>
        <Navbar />
        {children}
        <Footer />
        <GoogleSearchScript />
        <GoogleAnalyticsScript />
      </body>
    </html>
  )
}
