import { Navigate } from 'react-router-dom';

import Cookies from 'js-cookie'
export default function PublicRoutesWrapper({ children }: { children: React.ReactNode }) {
  const token = Cookies.get('TOKEN')

  return !token ? children : <Navigate to="/dashboard" replace />
}