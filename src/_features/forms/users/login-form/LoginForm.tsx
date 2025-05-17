import Input from '../../../../components/input/Input'
import Spacer from '../../../../components/spacer/Spacer'
import Button from '../../../../components/button/Button'
import S from './LoginForm.module.css'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import Loader from '../../../../components/loaders/loader/Loader'
import PasswordInput from '../../../../components/input/PasswordInput'
import Logo from '../../../../assets/logo.png'
import { z } from 'zod'
import { loginSchema } from '../../../../validation/user.validation'
import { zodResolver } from '@hookform/resolvers/zod'
import Alert from '../../../../components/alert/Alert'

type Inputs = z.infer<typeof loginSchema>

export default function LoginForm() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty, disabled }
  } = useForm<Inputs>({
    resolver: zodResolver(loginSchema),
    mode: 'all'
  })

  const isSubmitDisabled = !isValid || !isDirty

  console.log(`isDirty:${isDirty}`, `isValid:${isValid}`, `disabled:${disabled}`, `both: ${isSubmitDisabled}`)

  const { mutateAsync, isPending, isError, error, isSuccess } = useMutation({
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

  let typedError;
  if (axios.isAxiosError(error)) {
    typedError = error
  }
  console.log(error)
  const showAlert = isSuccess || isError
  const errorMessage = typedError?.response?.data?.msg ?? typedError?.message
  const successMessage = 'you logged in successfully'

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
        <Input
          type='email'
          placeholder='type your email'
          title='email'
          {...register('email')}
          message={errors.email?.message}
          variant={
            errors.email &&
            'danger'
          }
        />
        <Spacer size='sm' />
        <PasswordInput
          title='password'
          {...register('password')}
          message={errors.password?.message}
          variant={
            errors.password &&
            'danger'
          }
        />
        <Spacer size='sm' />
        <Alert visible={showAlert} variant={isSuccess ? 'success' : 'danger'} hasIcon>
          {isSuccess ? successMessage : errorMessage}
        </Alert>
        <Spacer size='xs' />
        <Button size='xl' type='submit' width='fill' disabled={isPending || isSubmitDisabled}>
          {!isPending ? 'Login' : <Loader />}
        </Button>
      </form>
    </div>
  )
}