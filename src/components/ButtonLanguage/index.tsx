import { useState, useEffect } from 'react'
import setLanguage from 'next-translate/setLanguage'

import IconFlagBrasil from 'components/Icons/IconFlagBrasil'
import IconFlagEUA from 'components/Icons/IconFlagEUA'

import * as S from './styles'

const ButtonLanguage = () => {
  const [lang, setLang] = useState('pt')

  const changeLang = async () => {
    switch (lang) {
      case 'pt':
        setLang('en')
        await setLanguage('en')
        break

      case 'en':
        setLang('pt')
        await setLanguage('pt-BR')
        break

      default:
        break
    }
  }

  useEffect(() => {
    if (lang) {
      document.documentElement.setAttribute('lang', lang)
    }
  }, [lang])

  return (
    <S.Wrapper
      aria-label={
        lang === 'en'
          ? 'change language to portuguese'
          : 'trocar idioma para português'
      }
    >
      <S.Button onClick={changeLang}>
        {!!lang && lang === 'en' ? <IconFlagEUA /> : <IconFlagBrasil />}
      </S.Button>
    </S.Wrapper>
  )
}

export default ButtonLanguage
