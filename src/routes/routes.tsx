import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Tickets from "../app/pages/tickets/Tickets";
import CreateTicket from "../app/pages/tickets/create/CreateTicket";
import Departments from "../app/pages/departments/Departments";
import Categories from "../app/pages/categories/Categories";
import Settings from "../app/pages/settings/Settings";
import Users from "../app/pages/users/Users";
import { routesData } from "./routes-data";
import Ticket from "../app/pages/tickets/id/Ticket";
import Login from "../app/auth/login/Login";
// import Dashboard from "../app/dashboard/Dashboard";
import Home from "../app/home/Home";
import HomeLayout from "../app/layouts/home layout/HomeLayout";
import PrivateRoute from "../app/auth/auth-wrapper/PrivateRoute";
import PublicRoute from "../app/auth/auth-wrapper/PublicRoute";
import UpdateUser from "../app/pages/users/update/UpdateUser";
import DashboardLayout from "../app/layouts/dashboard layout/DashboardLayout.tsx";
import CreateUser from "../app/pages/users/create/CreateUser.tsx";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // loader: <mark>'loading'</mark>,
    children: [
      {
        element: <HomeLayout />,
        children: [
          { index: true, element: <Home /> },
          {
            element: <PublicRoute />,
            children: [{
              path: 'login',
              element:
                <Login />
            }]
          }
        ]
      },
      {
        element: <PrivateRoute />,
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
