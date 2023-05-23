// Types
import type { Parent } from '@/types/layout'

/**
 * A page hero component used for secondary pages
 * @see {@link HeroProps} for props specification
 * @param HeroProps The component props
 * @returns The Hero component
 */
export default function Hero ({ children }: Parent<string>) {
  return (
    <div className='h-xs bg-gradient-primary'>
      <div className='h-full px-3% md:px-11% pt-44'>
        <h2 className='text-white text-center md:text-left'>
          {children}
        </h2>
      </div>
    </div>
  )
}
