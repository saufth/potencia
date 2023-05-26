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
        <div className='max-w-8xl h-full px-3% pt-24 mx-auto flex flex-col justify-center text-white'>
          <div className='max-w-4xl space-y-8 text-center md:text-left'>
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
        className='py-24 text-white bg-secondary space-y-12 lg:space-y-24'
      >
        <div className='flex flex-col-reverse lg:flex-row items-center gap-y-12 lg:gap-0'>
          <Image
            src={`${sectionsImgPath}${SECTION_ROUTES.solutions}.${IMG_EXT.jpg}`}
            alt={SECTION_ROUTES.solutions}
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
          {SERVICES_NAMES.map((service, key) => (
            <article className='py-12 lg:py-6 flex flex-col-reverse lg:flex-row justify-between items-start gap-y-6 lg:gap-x-12 border-t-2 first:border-t-0 border-primary/40' key={key}>
              <header className='lg:w-xl space-y-6 lg:space-y-8 text-center lg:text-left'>
                <h3>
                  {SERVICES[service].heading}
                </h3>
                <p className='text-primary leading-relaxed'>
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
        id={SECTION_ROUTES.values}
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

        {VALUES_NAMES.map((value, key) => (
          <article
            className='h-xs p-8 space-y-4 flex flex-col justify-center border boder-seondary'
            key={key}
          >
            <span className='flex items-center justify-center md:justify-start gap-x-5'>
              <Image
                src={`${sectionsImgPath}${value}.${IMG_EXT.svg}`}
                alt={VALUES[value].heading}
                className='w-auto h-8 md:h-12'
                width={250}
                height={250}
              />
              <h3 className='text-primary-light'>
                {VALUES[value].heading}
              </h3>
            </span>
            <p className='text-prmary leading-relaxed'>
              {VALUES[value].description}
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
