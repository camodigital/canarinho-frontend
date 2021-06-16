import { useState, useEffect } from 'react'

import * as S from './styles'

export type TextLimitedProps = {
  text?: string
  limit?: number
}

const TextLimited = ({ text, limit }: TextLimitedProps) => {
  const [textLimited, setTextLimited] = useState<string | undefined>(undefined)

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
        <span dangerouslySetInnerHTML={{ __html: textLimited }} />
      )}
    </S.Wrapper>
  )
}

export default TextLimited
