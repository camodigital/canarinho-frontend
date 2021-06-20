import useTranslation from 'next-translate/useTranslation'

import ButtonText from 'components/ButtonText'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'
import TitleSection from 'components/TitleSection'

const photosFake = [
  {
    url: 'images/imgDefault.jpg',
    link: 'http://instagram.com'
  },
  {
    url: 'images/imgDefault.jpg',
    link: 'http://instagram.com'
  },
  {
    url: 'images/imgDefault.jpg',
    link: 'http://instagram.com'
  },
  {
    url: 'images/imgDefault.jpg',
    link: 'http://instagram.com'
  },
  {
    url: 'images/imgDefault.jpg',
    link: 'http://instagram.com'
  },
  {
    url: 'images/imgDefault.jpg',
    link: 'http://instagram.com'
  },
  {
    url: 'images/imgDefault.jpg',
    link: 'http://instagram.com'
  }
]

export type PhotosInstaProps = {
  photosInsta?: { url: string; link: string }[]
}

const PhotosInsta = ({ photosInsta = photosFake }: PhotosInstaProps) => {
  const { t } = useTranslation('home')

  return (
    <S.Wrapper>
      <S.Wrapper>
        <S.Items>
          <MediaMatch method="lessThan" medias="tablet">
            <S.Item>
              <S.Image>
                <img src="images/imgDefault.jpg" />
              </S.Image>
            </S.Item>
          </MediaMatch>

          <S.Item>
            <S.Title>
              <TitleSection
                dark={false}
                tone="secondary"
                title={t('photos.title')}
                withSubtitle={false}
              />
            </S.Title>

            <S.Text>{t('photos.subtitle')}</S.Text>

            <S.Button>
              <ButtonText
                name="Instagram"
                tone="secondary"
                manner="external"
                link="https://www.instagram.com/escolacanarinhodf/?hl=pt-br"
              />
            </S.Button>
          </S.Item>

          <MediaMatch method="greaterThan" medias="tablet">
            {!!photosInsta &&
              photosInsta.map((photo, index) => (
                <S.Item key={photo.url + index}>
                  <S.Image>
                    <a
                      href={photo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={photo.url} />
                    </a>
                  </S.Image>
                </S.Item>
              ))}
          </MediaMatch>
        </S.Items>
      </S.Wrapper>
    </S.Wrapper>
  )
}

export default PhotosInsta
