import ButtonIcon from 'components/ButtonIcon'
import CardTestimonial, {
  CardTestimonialProps
} from 'components/CardTestimonial'
import SlickButtonFix from 'components/SlickButtonFix'
import SliderBase, { SliderSettings } from 'components/SliderBase'

import * as S from './styles'

export type SliderTestimonialProps = {
  testimonials: CardTestimonialProps[]
}

const SliderTestimonial = ({ testimonials }: SliderTestimonialProps) => {
  const settings: SliderSettings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: (
      <SlickButtonFix>
        <ButtonIcon
          size="medium"
          tone="secondary"
          icon="arrowLeft"
          manner="funtion"
        />
      </SlickButtonFix>
    ),
    nextArrow: (
      <SlickButtonFix>
        <ButtonIcon
          size="medium"
          tone="secondary"
          icon="arrowRight"
          manner="funtion"
        />
      </SlickButtonFix>
    )
  }

  return (
    <S.Wrapper>
      <SliderBase settings={settings}>
        {!!testimonials &&
          testimonials.map((testimonial, index) => (
            <S.Slide key={`SliderTestimonial${index}`}>
              <CardTestimonial
                text={testimonial.text}
                name={testimonial.name}
              />
            </S.Slide>
          ))}
      </SliderBase>
    </S.Wrapper>
  )
}

export default SliderTestimonial
