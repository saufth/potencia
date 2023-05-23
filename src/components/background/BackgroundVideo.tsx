/** The BackgrounVideo component poroperties */
interface BackgroundVideoProps {
  /** The name of the video */
  videoName: string
}

/**
 * A background video component
 * @see {@link BackgroundVideoProps} for props specification
 * @param BackgroundVideoProps The component props
 * @returns The BackgroundVideo component
 */
export default function BackgroundVideo ({ videoName }: BackgroundVideoProps) {
  const videoSrc = `/video/${videoName}.mp4`

  return (
    <div className='absolute inset-0 -z-20 overflow-hidden flex items-center'>
      <video
        className='w-full h-full object-cover'
        width={1920}
        height={1080}
        controls={false}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controlsList='nodownload noplaybackrate'
      >
        <source src={videoSrc} type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-primary-light/10' />
    </div>
  )
}
