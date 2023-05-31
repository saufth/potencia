// Components
import BackgroundVideo from '@/components/background/BackgroundVideo'
import Image from 'next/image'
import LinkToContact from '@/components/navigation/LinkToContact'
import LinkToServices from '@/components/navigation/LinkToServices'
// Config
import { SERVICES, description } from '@/modules/app/config'
import { IMG_EXT } from '@/modules/data-display/config'
import { APP_ROUTES, sectionsImgPath } from '@/modules/navigation/config'
import { THEMES } from '@/modules/theme/config'
// Types
import type { HeaderListConfig } from '@/types/data-dislay'

/** The headers configuration for solutions section */
const SOLUTIONS: HeaderListConfig = [
  {
    heading: SERVICES[0],
    description: 'Contamos con un equipo de expertos en logística y transporte que brindan asesoría y consultoría a clientes en temas como la optimización de procesos, la gestión de inventarios, la selección de proveedores, entre otros.'
  },
  {
    heading: SERVICES[1],
    description: 'Nuestros vehículos cuentan con la comodidad y modernidad necesarias para asegurar que sus empleados lleguen en tiempo y forma. Además las unidades de transporte están en constante mantenimiento, desde sedanes y SUVs hasta minibuses y autocares. Estos vehículos están equipados con todas las comodidades necesarias para garantizar un viaje óptimo.'
  },
  {
    heading: SERVICES[2],
    description: 'En el transporte de carga, la eficiencia y la seguridad son primordiales, por ello contamos con una flota de vehículos moderna y en óptimas condiciones, así como conductores con amplia experiencia en el manejo de cargas. '
  },
  {
    heading: SERVICES[3],
    description: 'Ofrecemos servicios de empaquetado, embalaje y entarimado de mercancías, respondiendo a la necesidad de que los productos sean transportados de manera segura, protegida y en perfecto estado.'
  },
  {
    heading: SERVICES[4],
    description: 'Tenemos a disposición un equipo de conductores altamente capacitado y con la experiencia necesaria para transportar mercancía. Nuestra flota se adapta a las solicitudes de los clientes y a los requerimientos de las cargas. '
  },
  {
    heading: SERVICES[5],
    description: 'Entendemos que el transporte de personal es un tema sensible, ya que se trata de la seguridad y comodidad de las personas, por lo que respondemos a la necesidad de transportar a sus empleados al lugar de trabajo, garantizando un traslado seguro.'
  },
  {
    heading: SERVICES[6],
    description: 'Nos encargamos de la planificación y optimización de rutas de transporte, utilizando herramientas tecnológicas para minimizar los tiempos de entrega y mejorar la eficiencia en la distribución de las mercancías.'
  },
  {
    heading: SERVICES[7],
    description: 'Sabemos la importancia de contar con refacciones de calidad en la industria del transporte. Por eso, trabajamos con los principales proveedores del mercado para ofrecer a nuestros clientes refacciones de alta calidad y con garantía. Además, nuestro equipo de expertos en logística y transporte está siempre a disposición de los clientes para asesorarles en la selección de las refacciones más adecuadas para sus vehículos y necesidades específicas. '
  },
  {
    heading: SERVICES[8],
    description: 'Buscamos ofrecer servicios eficientes y adecuados de monitoreo y rastreo de las mercancías transportadas, lo que permite a nuestros clientes conocer en todo momento la ubicación y el estado de sus productos. Esto brinda una mayor seguridad en el transporte y una mejor gestión de los tiempos de entrega.'
  }
]

/** The headers configuration for values section */
const VALUES: HeaderListConfig = [
  {
    heading: 'Profesionalismo',
    description: 'Los clientes esperan un alto nivel de profesionalismo en el trato, así como en la ejecución de los servicios ofrecidos. La compañía debe asegurarse de que su equipo sea altamente capacitado y tenga una actitud respetuosa y cortés hacia sus clientes.'
  },
  {
    heading: 'Responsabilidad',
    description: 'La empresa de logística y transportación debe ser responsable en el manejo de la mercancía y cumplir con las fechas de entrega prometidas. Además, deben tener una actitud proactiva en la identificación y resolución de problemas durante el transporte.'
  },
  {
    heading: 'Innovación',
    description: 'Una empresa de logística y transportación debe estar siempre buscando maneras de mejorar y optimizar sus servicios, mediante la adopción de nuevas tecnologías y la implementación de nuevas ideas.'
  },
  {
    heading: 'Flexibilidad',
    description: 'Se debe ser flexible en la adaptación a las necesidades y requerimientos específicos de cada cliente, así como a los cambios en el mercado o en las condiciones de transporte.'
  },
  {
    heading: 'Honestidad',
    description: 'La empresa debe ser transparente en su operación y cumplir con los términos acordados con los clientes que le permitan construir relaciones duraderas y confiables.'
  },
  {
    heading: 'Seguridad',
    description: 'Es una prioridad en el transporte de mercancías y debe estar comprometida con la implementación de protocolos seguros, así como el cuidado del medio ambiente.'
  },
  {
    heading: 'Trabajo en equipo',
    description: 'Una empresa de logística y transportación exitosa requiere de un equipo altamente colaborativo y eficiente, trabajando en conjunto para garantizar el mejor servicio al cliente.'
  }
]

/** The home page of the application */
export default function HomePage () {
  return (
    <main>
      <section className='h-3xl md:h-2xl relative'>
        <div className='max-w-8xl h-full px-3% pt-12 md:pt-24 mx-auto flex flex-col justify-center text-white'>
          <div className='max-w-4xl space-y-8 text-center md:text-left'>
            <h1>{description}</h1>
            <p className='font-primary-bold text-xl'>
              Logistica y transporte seguro
              <br className='md:hidden' />
              a la medida de tus necesidades.
            </p>
            <div className='flex justify-center md:block'>
              <LinkToServices />
            </div>
          </div>
        </div>
        <BackgroundVideo videoName='hero' />
      </section>

      <section
        id={APP_ROUTES[1]}
        className='py-24 text-white bg-secondary space-y-12 lg:space-y-24'
      >
        <div className='flex flex-col-reverse lg:flex-row items-center gap-y-12 lg:gap-0'>
          <Image
            src={`${sectionsImgPath}${APP_ROUTES[1]}.${IMG_EXT.jpg}`}
            alt={APP_ROUTES[1]}
            className='lg:w-11/20 h-auto hidden lg:block'
            width={1260}
            height={840}
          />
          <header className='lg:w-9/20 px-5% space-y-6 text-center lg:text-left'>
            <h2>Nuestras soluciones</h2>
            <p className='text-lg text-primary leading-relaxed'>
              Nos importa mucho entender lo que necesitas y cómo lo necesitas, para poder ofrecerte
              soluciones a tu medida. Por ello, ponemos a tu alcance los siguientes servicios.
            </p>
            <div className='grid md:block place-content-center'>
              <LinkToContact />
            </div>
          </header>
        </div>

        <div className='px-5'>
          {SOLUTIONS.map((service, key) => (
            <article className='py-12 lg:py-6 flex flex-col-reverse lg:flex-row justify-between items-start gap-y-6 lg:gap-x-12 border-t-2 first:border-t-0 border-primary/40' key={key}>
              <header className='lg:w-xl space-y-6 lg:space-y-8 text-center lg:text-left'>
                <h3>
                  {service.heading}
                </h3>
                <p className='text-primary leading-relaxed'>
                  {service.description}
                </p>
              </header>
              <Image
                src={`${sectionsImgPath}service${key}.${IMG_EXT.jpg}`}
                alt={service.heading}
                className='lg:max-w-lg h-auto'
                width={1260}
                height={840}
              />
            </article>
          ))}
        </div>
      </section>

      <section
        id={APP_ROUTES[2]}
        className='py-24 md:py-36 px-5% space-y-12 lg:space-y-20 text-white bg-gradient-to-br from-primary via-primary-light to-primary-light'
      >
        <header className='text-center'>
          <h2>
            Acerca de nosotros
          </h2>
        </header>

        <div className='lg:flex lg:justify-center lg:gap-x-36 space-y-12 lg:space-y-0 [&>article]:lg:w-md [&>article]:space-y-4 text-center lg:text-left'>
          <article>
            <h3>Misión</h3>
            <p>
              En DISTRIBUIDORA EMPRESARIAL POTENCIA, proporcionamos soluciones de logística
              y transporte efectivas y eficientes, siendo un socio estratégico para nuestros
              clientes.
            </p>
          </article>
          <article>
            <h3>Visión</h3>
            <p>
              optimizando de manera innovadora los recursos y caminando con firmeza hacia el
              futuro en la industria de la logística y transporte.
            </p>
          </article>
        </div>

        <div className='grid place-content-center'>
          <LinkToContact theme={THEMES.secondary} />
        </div>
      </section>

      <section
        id={APP_ROUTES[3]}
        className='grid md:grid-cols-2 lg:grid-cols-3 text-center md:text-left'
      >
        <header className='h-md md:h-xs py-12 px-8 md:p-8 flex flex-col justify-center gap-y-5 row-span-2 md:row-span-1 md:col-span-2 bg-secondary'>
          <h2 className='text-white'>
            Nuestros valores
          </h2>
          <p className='font-primary-bold text-lg text-primary leading-relaxed'>
            Nuestros valores corporativos definen el estándar por el que nos esforzamos en
            cada área, reflejan la dedicación a la excelencia que brindamos en el servicio
            y son fundamentales para nuestra cultura empresarial.
          </p>
        </header>

        {VALUES.map((value, key) => (
          <article
            className='h-xs p-8 space-y-4 flex flex-col justify-center border boder-seondary'
            key={key}
          >
            <span className='flex items-center justify-center md:justify-start gap-x-5'>
              <Image
                src={`${sectionsImgPath}value${key}.${IMG_EXT.svg}`}
                alt={value.heading}
                className='w-auto h-8 md:h-12'
                width={250}
                height={250}
              />
              <h3 className='text-primary-light'>
                {value.heading}
              </h3>
            </span>
            <p className='text-prmary leading-relaxed'>
              {value.description}
            </p>
          </article>
        ))}

        <div className='h-xs py-6 hidden md:grid lg:hidden place-content-center bg-primary-light'>
          <LinkToContact theme={THEMES.secondary} />
        </div>
      </section>
    </main>
  )
}
