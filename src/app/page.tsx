// Components
import BackgroundVideo from '@/components/background/BackgroundVideo'
import Image from 'next/image'
import LinkToContact from '@/components/navigation/LinkToContact'
import LinkToServices from '@/components/navigation/LinkToServices'
// Config
import { SERVICES, VALUES, description } from '@/modules/app/config'
import { IMG_EXT } from '@/modules/data-display/config'
import { SECTION_ROUTES, sectionsImgPath } from '@/modules/navigation/config'
import { THEMES } from '@/modules/theme/config'

/** A list with the services names */
const SERVICES_NAMES: ReadonlyArray<string> = Object.keys(SERVICES)
/** A list with the values names */
const VALUES_NAMES: ReadonlyArray<string> = Object.keys(VALUES)

/** The home page of the application */
export default function HomePage () {
  return (
    <main>
      <section className='h-3xl md:h-2xl relative'>
        <div className='max-w-8xl h-full px-3% mx-auto flex flex-col justify-center text-white'>
          <div className='max-w-4xl space-y-8 text-center-sm'>
            <h1>{description}</h1>
            <p className='font-primary-bold text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi numquam illum qui
              culpa ut! Quisquam perferendis eligendi possimus consectetur quam, blanditiis
              ipsum ut corrupti rem optio porro numquam corporis aliquid!
            </p>
            <div className='flex justify-center md:block'>
              <LinkToServices />
            </div>
          </div>
        </div>
        <BackgroundVideo videoName='hero' />
      </section>

      <section
        id={SECTION_ROUTES.solutions}
        className='py-24 text-white bg-secondary space-y-24'
      >
        <div className='flex flex-col-reverse lg:flex-row items-center gap-y-12 lg:gap-0'>
          <Image
            src={`${sectionsImgPath}${SECTION_ROUTES.solutions}.${IMG_EXT.jpg}`}
            alt={SECTION_ROUTES.solutions}
            className='lg:w-1/2 h-auto'
            width={1260}
            height={840}
          />
          <header className='lg:w-1/2 px-5% space-y-10 text-center lg:text-left'>
            <h2>Nuestras soluciones</h2>
            <p className='text-xl text-primary leading-relaxed'>
              Nos importa mucho entender lo que necesitas y cómo lo necesitas, para poder ofrecerte
              soluciones a tu medida. Por ello, ponemos a tu alcance los siguientes servicios.
            </p>
            <div>
              <LinkToContact />
            </div>
          </header>
        </div>

        <div className='px-5'>
          {SERVICES_NAMES.map((service, key) => (
            <article className='py-12 lg:py-6 flex flex-col-reverse lg:flex-row justify-between items-start gap-y-6 lg:gap-x-12 border-b-2 first:border-t-2 border-primary/40' key={key}>
              <header className='lg:w-xl space-y-6 lg:space-y-16 text-center lg:text-left'>
                <h3>
                  {SERVICES[service].heading}
                </h3>
                <p className='text-lg text-primary'>
                  {SERVICES[service].description}
                </p>
              </header>
              <Image
                src={`${sectionsImgPath}${service}.${IMG_EXT.jpg}`}
                alt={service}
                className='lg:max-w-lg h-auto'
                width={1260}
                height={840}
              />
            </article>
          ))}
        </div>
      </section>

      <section
        id={SECTION_ROUTES.about}
        className='py-24 px-5% space-y-12 lg:space-y-24 text-white bg-gradient-to-br from-primary via-primary-light to-primary-light'
      >
        <header className='text-center'>
          <h2>
            Acerca de nosotros
          </h2>
        </header>
        <div className='lg:flex lg:justify-center lg:gap-x-24 space-y-12 lg:space-y-0 [&>article]:lg:w-sm [&>article]:space-y-4 text-center lg:text-left'>
          <article>
            <h3 className='font-primary-bold text-lg'>Misión</h3>
            <p>
              En DISTRIBUIDORA EMPRESARIAL POTENCIA, proporcionamos soluciones de logística
              y transporte efectivas y eficientes, siendo un socio estratégico para nuestros
              clientes.
            </p>
          </article>
          <article>
            <h3 className='font-primary-bold text-lg'>Visión</h3>
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
        id={SECTION_ROUTES.values}
        className='grid md:grid-cols-2 lg:grid-cols-3 text-center md:text-left [&>*]:h-xs'
      >
        <header className='py-12 px-8 md:p-8 flex flex-col justify-center gap-y-5 text-primary-light bg-secondary'>
          <h2 className='font-primary-black text-4xl'>
            Nuestros valores
          </h2>
          <p className='font-primary-bold text-lg'>
            Nuestros valores corporativos definen el estándar por el que nos esforzamos en
            cada área, reflejan la dedicación a la excelencia que brindamos en el servicio
            y son fundamentales para nuestra cultura empresarial.
          </p>
        </header>

        {VALUES_NAMES.map((values, key) => (
          <article
            className='p-8 space-y-4 flex flex-col justify-center border boder-seondary'
            key={key}
          >
            <div>
              <h3 className='font-primary-bold text-2xl'>
                {VALUES[values].heading}
              </h3>
            </div>
            <p className='text-prmary'>
              {VALUES[values].description}
            </p>
          </article>
        ))}

        <div className='py-6 grid place-content-center bg-primary-light'>
          <LinkToContact theme={THEMES.secondary} />
        </div>
      </section>
    </main>
  )
}
