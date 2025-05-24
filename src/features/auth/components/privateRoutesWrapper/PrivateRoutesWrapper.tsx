import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie'
import PageLoader from '../../../../components/loaders/page-loader/PageLoader';
import useGetCurrentUser from '../../../../hooks/useGetCurrentUser';

export default function PrivateRoutesWrapper() {
  const currentUser = useGetCurrentUser();
  console.log(currentUser)

  if (currentUser.isLoading) {
    console.log('inloading', currentUser)
    return <PageLoader />;
  }
  if(currentUser.isError) {
    Cookies.remove('TOKEN')
  }
  return currentUser?.isSuccess ? <Outlet /> : <Navigate to="/login" replace />
}