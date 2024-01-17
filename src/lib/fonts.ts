import localFont from 'next/font/local'

export const fontSans = localFont({
  src: [
    {
      path: '../../public/fonts/lato/lato-thin.woff2',
      weight: '100'
    },
    {
      path: '../../public/fonts/lato/lato-light.woff2',
      weight: '300'
    },
    {
      path: '../../public/fonts/lato/lato-regular.woff2',
      weight: '400'
    },
    {
      path: '../../public/fonts/lato/lato-bold.woff2',
      weight: '700'
    },
    {
      path: '../../public/fonts/lato/lato-black.woff2',
      weight: '900'
    }
  ],
  display: 'swap',
  variable: '--font-sans'
})
