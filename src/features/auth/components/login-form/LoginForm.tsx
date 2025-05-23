import Spacer from '../../../../components/spacer/Spacer'
import Button from '../../../../components/button/Button'
import Style from './LoginForm.module.css'
import Loader from '../../../../components/loaders/loader/Loader'
import Logo from '../../../../assets/logo.png'
import Alert from '../../../../components/alert/Alert'
import useLoginFormValidation from '../../hooks/use-login-form-validation'
import useLogin from '../../hooks/use-login'
import InputsArray from '../../../../components/inputsArray/InputsArray'
import { getLoginInputsConfigs } from '../../inputsConfig'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useLoginFormValidation()
  const inputsConfigs = getLoginInputsConfigs(errors)

  const {
    onSubmit,
    isPending,
    isError,
    isSuccess,
    successMessage,
    errorMessage
  } = useLogin()
  const showAlert = isSuccess || isError
  const canLogin = !isPending && isValid

  return (
    <div className={Style['form-wrapper']}>
      <div className={Style['form-header']}>
        <div>
          <img src={Logo} height={40} className={Style['form-header-logo']} alt='logo' />
        </div>
        <h2 className={Style['form-header-title']}>Welcome Back</h2>
        <p className={Style['form-header-subtitle']}>please enter your details to sign in</p>
      </div>
      <Spacer size='lg' />
      <form className={Style.form} onSubmit={handleSubmit(onSubmit)}>
        <InputsArray inputs={inputsConfigs} register={register} />
        <Button size='xl' type='submit' width='fill' disabled={!canLogin}>
          {!isPending ? 'Login' : <Loader />}
        </Button>
        <Alert visible={showAlert} variant={isSuccess ? 'success' : 'danger'} hasIcon>
          {isSuccess ? successMessage : errorMessage}
        </Alert>
      </form>
    </div>
  )
}