import LoginForm from '../../../features/auth/components/login-form/LoginForm'
import S from './Login.module.css'


export default function Login() {
  return (
    <div className={S.login}>
      <LoginForm />
    </div>
  )
}