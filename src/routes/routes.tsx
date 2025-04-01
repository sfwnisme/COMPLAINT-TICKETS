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
import Dashboard from "../app/dashboard/Dashboard";
import Home from "../app/home/Home";
import HomeLayout from "../app/layouts/home layout/HomeLayout";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <HomeLayout />,
        children: [
          { index: true, element: <Home /> },
          {
            path: 'login',
            element: <Login />,
          }
        ]
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          // tickets
          { index: true, element: <Tickets /> },
          { path: routesData.tickets.base, element: <Tickets /> },
          { path: routesData.tickets.create, element: <CreateTicket /> },
          { path: routesData.tickets.id(':ticketId'), element: <Ticket /> },
          //departments
          { path: routesData.departments.base, element: <Departments /> },
          // categories
          { path: routesData.categories.base, element: <Categories /> },
          // users
          { path: routesData.users.base, element: <Users /> },
          // settings
          { path: routesData.settings.base, element: <Settings /> },
        ]
      }
    ]
  },
])

// export const routes = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: 'dashboard',
//     element: <Dashboard />,
//     children: [
//       // tickets
//       { index: true, element: <Tickets /> },
//       { path: routesData.tickets.base, element: <Tickets /> },
//       { path: routesData.tickets.create, element: <CreateTicket /> },
//       { path: routesData.tickets.id(':ticketId'), element: <Ticket /> },
//       //departments
//       { path: routesData.departments.base, element: <Departments /> },
//       // categories
//       { path: routesData.categories.base, element: <Categories /> },
//       // users
//       { path: routesData.users.base, element: <Users /> },
//       // settings
//       { path: routesData.settings.base, element: <Settings /> },
//     ]
//   },
//   {
//     path: 'login',
//     element: <Login />,
//   }
// ])
// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       { index: true, element: <Tickets /> },
//       { path: routesData.auth.login, element: <Login /> },
//       { path: routesData.tickets.base, element: <Tickets /> },
//       { path: routesData.tickets.create, element: <CreateTicket /> },
//       { path: routesData.tickets.id(':ticketId'), element: <Ticket /> },
//       { path: routesData.departments.base, element: <Departments /> },
//       { path: routesData.categories.base, element: <Categories /> },
//       { path: routesData.users.base, element: <Users /> },
//       { path: routesData.settings.base, element: <Settings /> },
//     ]
//   }
// ])