'use client'
// Components
import Image from 'next/image'
import Link from './core/Link'
import LinkToContact from './LinkToContact'
import NextLink from 'next/link'
import Menu from './Menu'
import MenuButton from '../input/core/MenuButton'
// Animation
import { useCycle } from 'framer-motion'
// Config
import { NAV } from '@/modules/navigation/config'
import { SIZES } from '@/modules/sizing/config'
import { THEMES } from '@/modules/theme/config'

/**
 * The main navbar component of the application
 * @returns The Navbar component
 */
export default function Navbar () {
  // Animation
  const [isOpen, toggle] = useCycle(false, true)
  /** Handle the Menu state */
  const handleToggle = () => { toggle() }
  /** Close the Menu but not open */
  const closeToggle = () => { isOpen && toggle() }

  return (
    <>
      <header className='absolute top-0 left-0 right-0 z-70'>
        <div className='max-w-8xl h-24 mx-auto flex'>
          <div className=' w-full lg:w-1/4 pl-3% flex items-center justify-between lg:justify-normal'>
            <NextLink href={NAV.home.href} onClick={closeToggle}>
              <Image
                className='w-auto h-8 md:h-8'
                src={`/images/logoname${isOpen ? '' : '-white'}.svg`}
                alt='Inicio'
                width={368}
                height={56}
                priority
              />
            </NextLink>
          </div>

          <div className='w-1/2 px-3% hidden lg:flex justify-between items-center'>
            {[NAV.solutions, NAV.about, NAV.values, NAV.history].map(({ children, href }, key) => {
              return (
                <div className='hidden lg:block' key={key}>
                  <Link href={href} size={SIZES.md} theme={THEMES.secondary}>
                    {children.toUpperCase()}
                  </Link>
                </div>
              )
            })}
          </div>

          <div className='lg:w-1/4 pr-3% flex justify-end items-center md:gap-x-6'>
            <span className='hidden md:block'>
              <LinkToContact />
            </span>
            {isOpen
              ? (
                <div
                  className='w-7 md:w-8 h-7 md:h-8 grid place-content-center text-4xl cursor-pointer'
                  onClick={handleToggle}
                >
                  X
                </div>
                )
              : <MenuButton action={handleToggle} />}
          </div>
        </div>
      </header>
      <Menu isOpen={isOpen} action={handleToggle} />
    </>
  )
}
