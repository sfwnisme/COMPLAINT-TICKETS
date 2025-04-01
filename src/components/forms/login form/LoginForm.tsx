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

type Props = {}
type Inputs = {
  email: string,
  password: string
}

export default function LoginForm({ }: Props) {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()


  const { mutateAsync, data, isPending, isError, error } = useMutation({
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

      return logedIn
    } catch (error) {
      console.log('login error', error)
    }
  }
  console.log('hhhhhhhhhh', data)
  console.log('hhhhhhhhhh', Cookies.get('TOKEN'))
  return (
    <div className={S['form-wrapper']}>
      <Title text='login form' />
      <form className={S.form} onSubmit={handleSubmit(onSubmit)}>
        <Input type='email' placeholder='type your email' title='email' message={error?.name}
          {...register('email')}
        />
        <Spacer size='xs' />
        <Input type='password' placeholder='type your password' title='password'
          {...register('password')}
        />
        <Spacer size='md' />
        <Button size='xl' type='submit' width='fill'>
          {!isPending ? 'Login' : 'Login...'}
        </Button>
        <Spacer size='xs' />
        {isError && <HelpText variant='danger'>{error?.response.data.msg}</HelpText>}
      </form>
    </div>
  )
}