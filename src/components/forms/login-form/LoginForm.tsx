import Input from '../../input/Input'
import HelpText from '../../help-text/HelpText'
import Spacer from '../../spacer/Spacer'
import Button from '../../button/Button'
import S from './LoginForm.module.css'
import Title from '../../title/Title'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useState } from 'react'
import Loader from '../../loaders/loader/Loader'
import PasswordInput from '../../input/PasswordInput'
import Logo from '../../../assets/logo.png'

type Inputs = {
  email: string,
  password: string
}

export default function LoginForm() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()


  const { mutateAsync, data, isPending, isError, error, isSuccess } = useMutation({
    mutationKey: ['login', watch('email')],
    mutationFn: async (data: Inputs) => {
      const res = await axios.post(import.meta.env.VITE_BASE_URL + '/users/login', data)
      Cookies.set('TOKEN', res.data.data.token)
      console.log('mutated res', res.data.data)
      return res
    },
    onSuccess: (data) => {
      console.log('success', data)
    }
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const logedIn = await mutateAsync(data)
      console.log('loged in successfully', logedIn)
      window.location.pathname = '/dashboard'
      return logedIn
    } catch (error) {
      console.log('login error', error)
    }
  }

  console.log(Cookies.get('TOKEN'))

  return (
    <div className={S['form-wrapper']}>
      <div className={S['form-header']}>
        <div>
          <img src={Logo} height={40} className={S['form-header-logo']} alt='logo' />
        </div>
        <h2 className={S['form-header-title']}>Welcome Back</h2>
        <p className={S['form-header-subtitle']}>please enter your details to sign in</p>
      </div>
      <Spacer size='lg' />
      <form className={S.form} onSubmit={handleSubmit(onSubmit)}>
        <Input type='email' placeholder='type your email' title='email' message={error?.name}
          {...register('email')}
        />
        <Spacer size='sm' />
        <PasswordInput title='password'
          {...register('password')} />
        <Spacer size='sm' />
        <Button size='xl' type='submit' width='fill' disabled={isPending}>
          {!isPending ? 'Login' : <Loader />}
        </Button>
        <Spacer size='xs' />
        {isError && <HelpText variant='danger' icon='invisible'>{error?.response.data.msg}</HelpText>}
        {isSuccess && <HelpText variant='success' icon='invisible'>{'successfully logged in'}</HelpText>}
      </form>
    </div>
  )
}