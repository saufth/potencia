// Components
import Image from 'next/image'
// Config
import { IMG_EXT } from '@/modules/data-display/config'
import { coreImgPath } from '@/modules/navigation/config'

/** The main loading component of application */
export default function Loading () {
  return (
    <div className='w-screen h-screen px-12 absolute top-0 left-0 z-80 overflow-hidden grid place-content-center bg-gradient-to-tr from-secondary via-secondary/80 to-secondary/80'>
      <div className='max-w-xs'>
        <Image
          src={`${coreImgPath}logo.${IMG_EXT.svg}`}
          alt='Loading...'
          className='w-full h-auto'
          width={826}
          height={211}
        />
      </div>
    </div>
  )
}
