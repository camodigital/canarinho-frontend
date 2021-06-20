import { useState, useEffect, useRef } from 'react'

import * as S from './styles'

export type TextLimitedProps = {
  text?: string
  limit?: number
}

const TextLimited = ({ text, limit }: TextLimitedProps) => {
  const [textLimited, setTextLimited] = useState<string | undefined>(undefined)
  const content = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!!text && !!limit) {
      setTextLimited(
        () => text.slice(0, limit) + (text.length > limit ? '...' : '')
      )
    }
  }, [textLimited, limit, text])

  return (
    <S.Wrapper>
      {!!textLimited && (
        <div dangerouslySetInnerHTML={{ __html: textLimited }} ref={content} />
      )}
    </S.Wrapper>
  )
}

export default TextLimited
