import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie'
import { Role } from '../../types/types';
import useGetCurrentUser from '../../hooks/useGetCurrentUser';
import PageLoader from '../loaders/page-loader/PageLoader';
import ForbiddenPage from '../../app/dashboard/forbidden/ForbiddenPage';

type Props = {
  roles: Role[]
}
export default function PrivateRoutesWrapper({ roles = [] }: Props) {
  const currentUser = useGetCurrentUser();
  console.log(currentUser)

  if (currentUser.isLoading) {
    return <PageLoader />;
  }

  if (currentUser.isError) {
    Cookies.remove('TOKEN')
  }

  if (!currentUser.data) {
    Cookies.remove('TOKEN')
    return <Navigate to="/" replace />;
  }
  if (currentUser.isError) {
    Cookies.remove('TOKEN')
  }
  if (!roles.includes(currentUser.data.role)) {
    return <ForbiddenPage />
  }
  return currentUser?.isSuccess && roles.includes(currentUser.data.role) ? <Outlet /> : <Navigate to="/" replace />
}