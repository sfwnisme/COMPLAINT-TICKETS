import LoginForm from '../../../components/forms/login form/LoginForm'
import S from './Login.module.css'


export default function Login() {
  return (
    <div className={S.login}>
      <LoginForm />
    </div>
  )
}