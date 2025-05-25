import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Tickets from "../app/dashboard/tickets/Tickets";
import CreateTicket from "../app/dashboard/tickets/create/CreateTicket";
import Departments from "../app/dashboard/departments/Departments";
import Categories from "../app/dashboard/categories/Categories";
import Settings from "../app/dashboard/settings/Settings";
import Users from "../app/dashboard/users/Users";
import Ticket from "../app/dashboard/tickets/id/Ticket";
import Login from "../app/auth/login/Login";
import Home from "../app/home/Home";
import UpdateUser from "../app/dashboard/users/update/UpdateUser";
import CreateUser from "../app/dashboard/users/create/CreateUser";
import DashboardLayout from "../features/dashboard/components/dashboardLayout/DashboardLayout";
import HomeLayout from "../features/home/homeLayout/HomeLayout";
import PublicRoutesWrapper from "../features/auth/components/publicRoutesWrapper/PublicRoutesWrapper";
import PrivateRoutesWrapper from "../features/auth/components/privateRoutesWrapper/PrivateRoutesWrapper";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <HomeLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'login', element: <PublicRoutesWrapper><Login /></PublicRoutesWrapper> }
        ]
      },
      {
        element: <PrivateRoutesWrapper />,
        children: [
          {
            path: 'dashboard',
            element: <DashboardLayout />,
            children: [
              { index: true, element: <Tickets /> },
              {
                path: 'tickets',
                children: [
                  { index: true, element: <Tickets /> },
                  { path: 'create', element: <CreateTicket /> },
                  { path: ':ticketId', element: <Ticket /> },
                ]
              },
              {
                path: 'departments',
                children: [
                  { index: true, element: <Departments /> }
                ]
              },
              {
                path: 'categories',
                children: [
                  { index: true, element: <Categories /> },
                ]
              },
              {
                path: 'users',
                children: [
                  { index: true, element: <Users /> },
                  { path: 'create', element: <CreateUser /> },
                  { path: 'update/:userId', element: <UpdateUser /> },
                ]
              },
              {
                path: 'settings',
                children: [
                  { index: true, element: <Settings /> }
                ]
              },
            ]
          }
        ]
      }
    ]
  },
])
