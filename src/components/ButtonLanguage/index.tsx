import React, { useState, useEffect } from 'react'
import setLanguage from 'next-translate/setLanguage'
import { useRouter } from 'next/router'

import IconFlagBrasil from 'components/Icons/IconFlagBrasil'
import IconFlagEUA from 'components/Icons/IconFlagEUA'

import * as S from './styles'

const ButtonLanguage = () => {
  const [lang, setLang] = useState('pt-BR')

  const router = useRouter()
  const { locale } = router

  const changeLang = () => {
    return async (e: React.MouseEvent) => {
      e.preventDefault()

      switch (lang) {
        case 'pt-BR':
          await setLanguage('en')
          break

        case 'en':
          await setLanguage('pt-BR')
          break

        default:
          break
      }
    }
  }

  useEffect(() => {
    if (locale === 'en') {
      setLang('en')
    } else {
      setLang('pt-BR')
    }
  }, [locale])

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
      <S.Button onClick={changeLang()}>
        {!!lang && lang === 'en' ? <IconFlagEUA /> : <IconFlagBrasil />}
      </S.Button>
    </S.Wrapper>
  )
}

export default ButtonLanguage
