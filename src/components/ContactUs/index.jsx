import { useRef, useState } from 'react'
import * as emailjs from 'emailjs-com'
import Recaptcha from 'react-recaptcha'

import * as S from './styles'
import ButtonText from 'components/ButtonText'

export default function ContactUs({
  name = 'Name',
  email = 'Email',
  message = 'Message'
}) {
  const [recaptchaLoad, setRecaptchaLoad] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [showCaptcha, setShowCaptcha] = useState(false)
  const [showWarningFill, setShowWarningFill] = useState(false)
  const [showWarningSucess, setShowWarningSucess] = useState(false)
  const [showWarningError, setShowWarningError] = useState(false)
  const [showWarningCaptcha, setShowWarningCaptcha] = useState(false)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)

  const recaptchaLoaded = () => {
    setRecaptchaLoad(true)
  }

  const verifiedRecaptcha = (response) => {
    if (response) {
      setIsVerified(true)
    }
  }

  function sendEmail(e) {
    e.preventDefault()
    const templateParams = {
      from_name: nameRef.current.value,
      from_email: emailRef.current.value,
      to_name: 'APEX Brasil',
      message: messageRef.current.value
    }
    if (
      nameRef.current.value !== '' &&
      emailRef.current.value !== '' &&
      messageRef.current.value !== ''
    ) {
      setShowWarningFill(false)

      if (recaptchaLoad && isVerified) {
        emailjs
          .send(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
          )
          .then(
            (result) => {
              setShowWarningSucess(true)
              setShowWarningFill(false)
              setShowWarningCaptcha(false)
              setShowWarningError(false)
              setShowCaptcha(false)
              console.log(result)

              nameRef.current.value = null
              emailRef.current.value = null
              messageRef.current.value = null

              setTimeout(function () {
                setShowWarningSucess(false)
              }, 2000)
            },
            (error) => {
              setShowWarningError(true)
              console.log(error.text)
            }
          )
      } else {
        setShowWarningCaptcha(true)
        console.error('Please check reCaptcha and try again.')
      }
    } else {
      setShowWarningFill(true)
    }
  }

  function handlerCaptcha() {
    if (
      nameRef.current.value !== '' &&
      emailRef.current.value !== '' &&
      messageRef.current.value !== ''
    ) {
      setShowCaptcha(true)
      setShowWarningFill(false)
      setShowWarningSucess(false)
      setShowWarningError(false)
    } else {
      setShowCaptcha(false)
    }
  }

  return (
    <S.Wrapper onKeyUp={handlerCaptcha}>
      <S.Form className="contact-form" onSubmit={sendEmail}>
        <S.Warnings>
          <S.WarningFill className={showWarningFill ? 'show' : 'hide'}>
            Todos os campos são obrigatórios. Por favor preencha corretamente.
          </S.WarningFill>

          <S.WarningSucess className={showWarningSucess ? 'show' : 'hide'}>
            Obrigado por entrar em contato. retornaremos assim que possível.
          </S.WarningSucess>

          <S.WarningError className={showWarningError ? 'show' : 'hide'}>
            Por favor check reCaptcha e tente novamente.
          </S.WarningError>

          <S.WarningCaptcha className={showWarningCaptcha ? 'show' : 'hide'}>
            Por favor check reCaptcha e tente novamente.
          </S.WarningCaptcha>
        </S.Warnings>

        <S.InputGroup>
          <input
            onKeyUp={handlerCaptcha}
            type="text"
            name="user_name"
            ref={nameRef}
            placeholder={name}
          />

          <input
            onKeyUp={handlerCaptcha}
            type="email"
            name="user_email"
            ref={emailRef}
            placeholder={email}
          />
        </S.InputGroup>

        <S.TextareaGroup>
          <textarea
            name="message"
            ref={messageRef}
            onKeyUp={handlerCaptcha}
            placeholder={message}
          />

          <S.Button>
            <ButtonText text="Enviar" tone="secondary" manner="function" />
          </S.Button>
        </S.TextareaGroup>

        <S.Recaptcha className={showCaptcha ? 'show' : 'hide'}>
          <Recaptcha
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            render="explicit"
            hl="pt-BR"
            onloadCallback={recaptchaLoaded}
            verifyCallback={verifiedRecaptcha}
          />
        </S.Recaptcha>
      </S.Form>
    </S.Wrapper>
  )
}
