import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie'
import { Role } from '../../types/types';
import useGetCurrentUser from '../../hooks/useGetCurrentUser';
import PageLoader from '../loaders/page-loader/PageLoader';

type Props = {
  roles: Role[]
}
export default function PrivateRoutesWrapper({ roles = [] }: Props) {
  const currentUser = useGetCurrentUser();
  console.log(currentUser)

  if (!currentUser?.data || currentUser.isLoading) {
    console.log('inloading', currentUser)
    return <PageLoader />;
  }
  if (currentUser.isError) {
    Cookies.remove('TOKEN')
  }
  if (!roles.includes(currentUser.data.role)) {
    return <Navigate to='/dashboard' replace />
  }
  return currentUser?.isSuccess && roles.includes(currentUser.data.role) ? <Outlet /> : <Navigate to="/login" replace />
}