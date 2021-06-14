import useTranslation from 'next-translate/useTranslation'

import TemplateHeader from 'templates/TemplateHeader'

import * as S from './styles'

const TemplateHome = () => {
  const { t } = useTranslation('home')

  return (
    <S.Wrapper>
      <TemplateHeader pageTitle={t('pageTitle')} pageDesc={t('pageDesc')} />
    </S.Wrapper>
  )
}

export default TemplateHome
