import useTranslation from 'next-translate/useTranslation'

import TemplateHeader from 'templates/TemplateHeader'

import * as S from './styles'

const TemplateHome = () => {
  const { t } = useTranslation('common')

  return (
    <S.Wrapper>
      <TemplateHeader />
      <h1>{t('hello')}</h1>
    </S.Wrapper>
  )
}

export default TemplateHome
