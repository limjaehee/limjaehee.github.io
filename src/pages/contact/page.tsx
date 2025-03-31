import React, { useRef, useState } from 'react'
import * as S from 'pages/contact/page.style'
import Layout from 'features/layout/Layout'
import Input from 'components/form/Input'
// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from '@emailjs/browser'
import Textarea from 'components/form/Textarea'
import Label from 'components/form/Label'
import { addToastMessage } from 'providers/ToastProvider'

function Page() {
  const form = useRef<HTMLFormElement>(null)
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form || !form.current) {
      addToastMessage('메일 전송에 실패했습니다.', 'error')
      return
    }

    emailjs
      .sendForm(
        'rhak39@gmail.com',
        process.env.REACT_APP_EMAIL_TEMPLATE || '',
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAIL_KEY,
        },
      )
      .then(
        () => {
          addToastMessage('메일을 전송했습니다.', 'success')
        },
        () => {
          addToastMessage('메일 전송에 실패했습니다.', 'error')
        },
      )
  }

  const emailCheck = (email_address: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
    return emailRegex.test(email_address)
  }

  const isDisabled = () => {
    return !emailCheck(email) || !message
  }

  return (
    <Layout>
      <S.Layout>
        <S.Content>
          <S.Title>Contact</S.Title>
          <S.Article>
            안녕하세요.
            <br /> 제 포트폴리오 사이트에 방문해주셔서 감사합니다.:) <br />
            연락이 필요하시다면 오른쪽 양식을 채운 뒤에 메일을 보내주세요.
            <br /> 메일은 1~2일 내에 확인됩니다.
            <span>
              *회신이 필요한 메일일 경우 반드시 이메일 주소를 정확하게
              작성해주세요.
            </span>
          </S.Article>
        </S.Content>
        <S.Form ref={form} onSubmit={sendEmail}>
          <Label htmlFor="from_title" isRequired>
            보내는 사람
          </Label>
          <Input
            type="email"
            name="from_title"
            id="from_title"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
          <Label htmlFor="message" isRequired>
            내용
          </Label>
          <Textarea
            name="message"
            id="message"
            placeholder="내용을 입력해주세요"
            rows={6}
            value={message}
            onChange={e => {
              setMessage(e.target.value)
            }}
          />
          <S.SendBtn type="submit" value="전송하기" disabled={isDisabled()} />
        </S.Form>
      </S.Layout>
    </Layout>
  )
}

export default Page
