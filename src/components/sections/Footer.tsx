// Components
import LinkToContact from '../navigation/LinkToContact'
import Image from 'next/image'
import Link from '../navigation/core/Link'
import LinkEmail from '../navigation/LinkEmail'
import NextLink from 'next/link'
// Config
import { NAV, navAriaLabel } from '@/modules/navigation/config'
import { copyright, organization } from '@/modules/app/config'
import { THEMES } from '@/modules/theme/config'
import { SIZES } from '@/modules/sizing/config'

export default function Footer () {
  return (
    <footer className='bg-secondary'>
      <div className='px-5%'>
        <div className='max-w-8xl py-16 mx-auto flex flex-col lg:flex-row justify-between gap-y-8'>
          <div className='lg:w-[232px] grid lg:block place-content-center'>
            <NextLink href={NAV[0].href}>
              <Image
                className='w-auto h-6'
                src='/images/logoname.svg'
                alt={organization}
                width={368}
                height={56}
              />
            </NextLink>
          </div>
          <nav aria-label={navAriaLabel}>
            <ul className='w-full flex flex-col lg:flex-row gap-y-4 lg:gap-x-6 text-center'>
              {NAV.map((option, key) => (
                <li
                  className='last:hidden last:lg:block'
                  key={key}
                >
                  <Link href={option.href} theme={THEMES.secondary} size={SIZES.sm}>
                    {option.children}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='lg:w-[232px] text-center lg:text-right'>
            <LinkEmail theme={THEMES.secondary} />
          </div>
          <div className='grid place-content-center lg:hidden'>
            <LinkToContact />
          </div>
        </div>
      </div>
      <div>
        <div className='max-w-8xl px-1 py-4 mx-auto text-white text-center'>
          {copyright}
        </div>
      </div>
    </footer>
  )
}
