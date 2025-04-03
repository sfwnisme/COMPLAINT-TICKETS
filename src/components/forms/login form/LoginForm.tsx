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
import { Eye, EyeClosed } from 'lucide-react'
import Loader from '../../loaders/loader/Loader'

type Inputs = {
  email: string,
  password: string
}

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

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
      <Title text='login form' />
      <form className={S.form} onSubmit={handleSubmit(onSubmit)}>
        <Input type='email' placeholder='type your email' title='email' message={error?.name}
          {...register('email')}
        />
        <Spacer size='xs' />
        <Input type={showPassword ? 'text' : 'password'} placeholder='type your password' title='password'
          {...register('password')}
        />
        <Spacer size='xs' />
        <div style={{ display: 'flex', gap: '5px' }}>
          <Button size='square' type='button' outline
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <Eye size={11} /> : <EyeClosed size={11} />}
          </Button>
          <HelpText icon='invisible'>
            {showPassword ? 'hide password' : 'show password'}
          </HelpText>
        </div>
        <Spacer size='xs' />
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