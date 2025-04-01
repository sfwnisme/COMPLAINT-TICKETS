import React from 'react'
import Title from '../../../components/title/Title'
import Input from '../../../components/input/Input'
import HelpText from '../../../components/help-text/HelpText'
import Spacer from '../../../components/spacer/Spacer'
import Button from '../../../components/button/Button'
import { Visible } from '@sfwnisme/visi'
import LoginForm from '../../../components/forms/login form/LoginForm'
import S from './Login.module.css'

type Props = {}

export default function Login({ }: Props) {
  const isError = false
  return (
    <div className={S.login}>
      <LoginForm />
    </div>
  )
}