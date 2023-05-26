// Config
import { baseUrl } from '@/modules/app/config'
import { APP_ROUTES } from '@/modules/navigation/config'
// Types
import type { MetadataRoute } from 'next'

/** Generate the sitemap document */
export default function sitemap () : MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl.host}`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl.host}${APP_ROUTES[4]}`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl.host}${APP_ROUTES[5]}`,
      lastModified: new Date()
    }
  ]
}
