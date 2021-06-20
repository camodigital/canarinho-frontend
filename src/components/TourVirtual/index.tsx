import ButtonText from 'components/ButtonText'
import useTranslation from 'next-translate/useTranslation'

import * as S from './styles'

export type TourVirtualProps = {
  southWingTour: string
  northWingTour: string
}

const TourVirtual = ({ southWingTour, northWingTour }: TourVirtualProps) => {
  const { t } = useTranslation('common')

  return (
    <S.Wrapper>
      <S.Buttons>
        <S.Button>
          <ButtonText
            name={t('buttons.southWing')}
            link={southWingTour}
            manner="external"
            tone="secondary"
            size="big"
          />
        </S.Button>

        <S.Button>
          <ButtonText
            name={t('buttons.northWing')}
            link={northWingTour}
            manner="external"
            tone="tertiary"
            size="big"
          />
        </S.Button>
      </S.Buttons>

      <S.Image>
        <img src="images/casas.svg" />
      </S.Image>
    </S.Wrapper>
  )
}

export default TourVirtual
