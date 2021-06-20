import ButtonIcon from 'components/ButtonIcon'
import CardTestimonial, {
  CardTestimonialProps
} from 'components/CardTestimonial'
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
    slidesToShow: 1,
    centerPadding: '30%',
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
      <div className="arrowPrev">
        <ButtonIcon tone="secondary" size="medium" icon="arrowRight" />
      </div>
    ),
    nextArrow: (
      <div className="arrowNext">
        <ButtonIcon tone="secondary" size="medium" icon="arrowLeft" />
      </div>
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
