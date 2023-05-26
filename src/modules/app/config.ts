// Types
import type { Author } from 'next/dist/lib/metadata/types/metadata-types'

/** The project author */
export const authors: Author = {
  name: 'Sauftdev',
  url: 'https://emah.mx/'
}

/** The application domain name */
export const domain = process.env.NEXT_PUBLIC_DOMAIN

/** The base URL of the aplication */
export const baseUrl: URL = new URL(`https://${domain}`)

/** The name of the organization */
export const organization = 'Potencia Logistics & Transportation'

/** The head desciption of the application */
export const description = 'Calidad, precio y rapidez trabajando para ti'

/** Organization services */
export const SERVICES: ReadonlyArray<string> = [
  'Asesoría y consultoría en logística',
  'Renta de vehículos para transporte de personal',
  'Renta de vehículos para transporte de carga',
  'Empaquetado, embalaje y entarimado',
  'Transporte de mercancías',
  'Transporte de personal',
  'Planeación y optimización de rutas',
  'Venta de refacciones para el sector de transporte',
  'Monitoreo y rastreo'
]

/** The keyword list of the application */
export const keywords = [
  organization.toLowerCase(),
  ...(SERVICES.map((service) => service.toLowerCase()))
]

/** Theme color of the application */
export const themeColor = '#2E2E2E'
