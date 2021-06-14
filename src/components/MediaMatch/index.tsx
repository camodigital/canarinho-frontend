import { useState, useEffect } from 'react'

import breackpoints from 'styles/theme/props/_breackpoints'

export type MediaMatchProps = {
  method: 'lessThan' | 'greaterThan'
  medias:
    | 'xphone'
    | 'phone'
    | 'tablet'
    | 'desk'
    | 'wide'
    | 'superWide'
    | 'ultraWide'
    | 'r4k'
    | 'r8k'
  children: React.ReactNode
}

const MediaMatch = ({ method, medias, children }: MediaMatchProps) => {
  const [media, setMedia] = useState(0)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    medias === 'xphone' && setMedia(breackpoints.xphone)
    medias === 'phone' && setMedia(breackpoints.phone)
    medias === 'tablet' && setMedia(breackpoints.tablet)
    medias === 'desk' && setMedia(breackpoints.desk)
    medias === 'wide' && setMedia(breackpoints.wide)
    medias === 'superWide' && setMedia(breackpoints.superWide)
    medias === 'ultraWide' && setMedia(breackpoints.ultraWide)
    medias === 'r4k' && setMedia(breackpoints.r4k)
    medias === 'r8k' && setMedia(breackpoints.r8k)

    const checkWindow = () => {
      if (method === 'lessThan') {
        if (window.innerWidth <= media - 1) setShowContent(true)
        else setShowContent(false)
      }

      if (method === 'greaterThan') {
        if (window.innerWidth >= media) setShowContent(true)
        else setShowContent(false)
      }
    }
    checkWindow()

    window.addEventListener('resize', checkWindow)

    return () => {
      window.removeEventListener('resize', checkWindow)
    }
  }, [media, medias, method])

  return <>{showContent && children}</>
}

export default MediaMatch
