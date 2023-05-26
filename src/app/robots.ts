import { baseUrl } from '@/modules/app/config'
import { MetadataRoute } from 'next'

/** Generate the robots.txt document */
export default function Robots () : MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${baseUrl.host}sitemap.xml`
  }
}
