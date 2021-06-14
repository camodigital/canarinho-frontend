import { useRef, useEffect } from 'react'

import * as S from './styles'

export type ParallaxContentXProps = {
  children: React.ReactNode
  speedLayer: number
}

const ParallaxContentX = ({
  children,
  speedLayer = 2
}: ParallaxContentXProps) => {
  const elementLayer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const parallax: { (event: MouseEvent): void } = (e) => {
      if (elementLayer.current) {
        const layer = elementLayer.current
        const speed = speedLayer
        const x = (window.innerWidth - e.pageX * speed) / 100
        // const y = (window.innerWidth - e.pageY * speed) / 200

        layer.style.transform = `translateX(${x}px)`

        // layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      }
    }

    document.addEventListener('mousemove', parallax)
    return () => {
      document.removeEventListener('mousemove', parallax)
    }
  }, [speedLayer])

  return <S.Wrapper ref={elementLayer}>{children}</S.Wrapper>
}

export default ParallaxContentX
