import { useState, useEffect } from 'react'

import * as S from './styles'

export type ToneLastWordProps = {
  children: string | undefined
}

const ToneLastWord = ({ children = 'Last Word' }: ToneLastWordProps) => {
  const [newChildren, setNewChildren] = useState('')

  useEffect(() => {
    const n = children.trim().split(' ')
    const lastWord = `<span> ${n.pop()}</span>`
    const complete = n.join(' ') + lastWord
    setNewChildren(complete)
  }, [children])

  return (
    <S.Wrapper dangerouslySetInnerHTML={{ __html: newChildren }}></S.Wrapper>
  )
}

export default ToneLastWord
