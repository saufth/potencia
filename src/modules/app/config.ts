// Types
import type { HeaderListConfig } from '@/types/data-dislay'
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

/** The email of the organizacion */
export const email = `contacto@${domain}`

/** Organization services */
export const SERVICES: HeaderListConfig = {
  consultancy: {
    heading: 'Asesoría y consultoría en logística',
    description: 'Contamos con un equipo de expertos en logística y transporte que brindan asesoría y consultoría a clientes en temas como la optimización de procesos, la gestión de inventarios, la selección de proveedores, entre otros.'
  },
  personalTransportationRent: {
    heading: 'Renta de vehículos para transporte de personal',
    description: 'Nuestros vehículos cuentan con la comodidad y modernidad necesarias para asegurar que sus empleados lleguen en tiempo y forma. Además las unidades de transporte están en constante mantenimiento, desde sedanes y SUVs hasta minibuses y autocares. Estos vehículos están equipados con todas las comodidades necesarias para garantizar un viaje óptimo.'
  },
  freightTransportationRent: {
    heading: 'Renta de vehículos para transporte de carga',
    description: 'En el transporte de carga, la eficiencia y la seguridad son primordiales, por ello contamos con una flota de vehículos moderna y en óptimas condiciones, así como conductores con amplia experiencia en el manejo de cargas. '
  },
  packaging: {
    heading: 'Empaquetado, embalaje y entarimado',
    description: 'Ofrecemos servicios de empaquetado, embalaje y entarimado de mercancías, respondiendo a la necesidad de que los productos sean transportados de manera segura, protegida y en perfecto estado.'
  },
  trucking: {
    heading: 'Transporte de mercancías',
    description: 'Tenemos a disposición un equipo de conductores altamente capacitado y con la experiencia necesaria para transportar mercancía. Nuestra flota se adapta a las solicitudes de los clientes y a los requerimientos de las cargas. '
  },
  personalTransportation: {
    heading: 'Transporte de personal',
    description: 'Entendemos que el transporte de personal es un tema sensible, ya que se trata de la seguridad y comodidad de las personas, por lo que respondemos a la necesidad de transportar a sus empleados al lugar de trabajo, garantizando un traslado seguro.'
  },
  routePlanning: {
    heading: 'Planeación y optimización de rutas',
    description: 'Nos encargamos de la planificación y optimización de rutas de transporte, utilizando herramientas tecnológicas para minimizar los tiempos de entrega y mejorar la eficiencia en la distribución de las mercancías.'
  },
  spareParts: {
    heading: 'Venta de refacciones para el sector de transporte',
    description: 'Sabemos la importancia de contar con refacciones de calidad en la industria del transporte. Por eso, trabajamos con los principales proveedores del mercado para ofrecer a nuestros clientes refacciones de alta calidad y con garantía. Además, nuestro equipo de expertos en logística y transporte está siempre a disposición de los clientes para asesorarles en la selección de las refacciones más adecuadas para sus vehículos y necesidades específicas. '
  },
  monitoring: {
    heading: 'Monitoreo y rastreo',
    description: 'Buscamos ofrecer servicios eficientes y adecuados de monitoreo y rastreo de las mercancías transportadas, lo que permite a nuestros clientes conocer en todo momento la ubicación y el estado de sus productos. Esto brinda una mayor seguridad en el transporte y una mejor gestión de los tiempos de entrega.'
  }
}

/** Organization values */
export const VALUES: HeaderListConfig = {
  professionalism: {
    heading: 'Profesionalismo',
    description: 'Los clientes esperan un alto nivel de profesionalismo en el trato, así como en la ejecución de los servicios ofrecidos. La compañía debe asegurarse de que su equipo sea altamente capacitado y tenga una actitud respetuosa y cortés hacia sus clientes.'
  },
  responsabilidad: {
    heading: 'Responsabilidad',
    description: 'La empresa de logística y transportación debe ser responsable en el manejo de la mercancía y cumplir con las fechas de entrega prometidas. Además, deben tener una actitud proactiva en la identificación y resolución de problemas durante el transporte.'
  },
  innovation: {
    heading: 'Innovación',
    description: 'Una empresa de logística y transportación debe estar siempre buscando maneras de mejorar y optimizar sus servicios, mediante la adopción de nuevas tecnologías y la implementación de nuevas ideas.'
  },
  flexibility: {
    heading: 'Flexibilidad',
    description: 'Se debe ser flexible en la adaptación a las necesidades y requerimientos específicos de cada cliente, así como a los cambios en el mercado o en las condiciones de transporte.'
  },
  honesty: {
    heading: 'Honestidad',
    description: 'La empresa debe ser transparente en su operación y cumplir con los términos acordados con los clientes que le permitan construir relaciones duraderas y confiables.'
  },
  segurity: {
    heading: 'Seguridad',
    description: 'Es una prioridad en el transporte de mercancías y debe estar comprometida con la implementación de protocolos seguros, así como el cuidado del medio ambiente.'
  },
  teamwork: {
    heading: 'Trabajo en equipo',
    description: 'Una empresa de logística y transportación exitosa requiere de un equipo altamente colaborativo y eficiente, trabajando en conjunto para garantizar el mejor servicio al cliente.'
  }
}

/** The copyright of the application */
export const copyright = `Copyright ${new Date().getFullYear()} ${organization}. All rights reserved.`

/** The keyword list of the application */
export const keywords = [
  organization,
  SERVICES.consultancy.heading,
  SERVICES.personalTransportationRent.heading,
  SERVICES.freightTransportationRent.heading,
  SERVICES.packaging.heading,
  SERVICES.trucking.heading,
  SERVICES.personalTransportation.heading,
  SERVICES.routePlanning.heading,
  SERVICES.spareParts.heading,
  SERVICES.monitoring.heading
]

/** Is used as a cover image for social networks */
export const coverImageUrl: URL = new URL('cover.jpg', baseUrl)
