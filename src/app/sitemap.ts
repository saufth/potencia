// Config
import { baseUrl } from '@/modules/app/config'
import { PAGE_ROUTES } from '@/modules/navigation/config'
// Types
import type { MetadataRoute } from 'next'

/** Generate the sitemap.xml document */
export default function sitemap () : MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl.host}`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl.host}${PAGE_ROUTES.history}`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl.host}${PAGE_ROUTES.contact}`,
      lastModified: new Date()
    }
  ]
}
