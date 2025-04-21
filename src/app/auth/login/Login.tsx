import LoginForm from '../../../features/forms/users/login-form/LoginForm'
import S from './Login.module.css'


export default function Login() {
  return (
    <div className={S.login}>
      <LoginForm />
    </div>
  )
}