// Components
import Head from 'next/head'
// Config
import {
  baseUrl,
  coverImageUrl,
  description,
  keywords,
  organization,
  twitter,
  author,
  themeColor
} from '../../modules/app/config'
import { NAV } from '@/modules/navigation/config'
// Types
import type { PageLayoutConfig, PageLayoutProps } from '../../types/layout'

/** The pages route name configuration */
const PAGES_CONFIG: PageLayoutConfig = {
  home: '',
  history: 'history',
  contact: 'contact'
}

/**
 * The main application page layout
 * @see {@link PageLayoutProps} for props specification
 * @param PageLayoutProps The component props
 * @returns the PageLayout component
 */
export default function PageLayout ({ children, page } : PageLayoutProps) {
  const pageTitle = `${NAV[page].children} – ${organization}`
  const canonicalLink = `${baseUrl}${PAGES_CONFIG[page]}`

  return (
    <>
      <Head>
        <meta httpEquiv='content-language' content='es-mx' />
        <title>{pageTitle}</title>
        <meta name='description' content={description} />
        <meta name='application-name' content={organization} />
        <link rel='author' href={String(author.url)} />
        <meta name='author' content={author.name} />
        <meta name='creator' content={author.name} />
        <meta name='publisher' content={String(author.url)} />
        <meta name='copyright' content={organization} />
        <meta name='generator' content='Next.js' />
        <meta name='referrer' content='origin-when-cross-origin' />
        <meta name='keywords' content={keywords} />
        <meta name='theme-color' content={themeColor} />
        <meta name='format-detection' content='telephone=no, address=no, email=no' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href={canonicalLink} />
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/android-chrome-192x192.png' />
        <link rel='icon' type='image/png' sizes='512x512' href='/android-chrome-512x512.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta property='og:locale' content='es_MX' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={organization} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={baseUrl} />
        <meta property='og:site_name' content={organization} />
        <meta property='og:image' content={coverImageUrl} />
        <meta property='og:image:secure_url' content={coverImageUrl} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='640' />
        <meta property='og:image:type' content='image/jpeg' />
        {twitter !== ''
          ? (
            <>
              <meta name='twitter:card' content='summary_large_image' />
              <meta name='twitter:title' content={organization} />
              <meta name='twitter:description' content={description} />
              <meta name='twitter:site' content={twitter} />
              <meta name='twitter:image' content={coverImageUrl} />
            </>
            )
          : null}
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}
