import { Outlet, useNavigate } from 'react-router-dom';
import useGetCurrentUser from '../../../hooks/useGetCurrentUser';
import PageLoader from '../../../components/loaders/page-loader/PageLoader';



export default function PublicRoute() {
  const navigate = useNavigate()
  const currentUser = useGetCurrentUser()

  if (currentUser.isLoading) {
    return <PageLoader />
  }

  if (currentUser.data && currentUser.isSuccess) {
    navigate('/')
  }
  return <Outlet />
}