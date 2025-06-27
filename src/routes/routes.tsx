import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Tickets from "../app/dashboard/tickets/Tickets";
import CreateTicket from "../app/dashboard/tickets/create/CreateTicket";
import Departments from "../app/dashboard/departments/Departments";
import Settings from "../app/dashboard/settings/Settings";
import Users from "../app/dashboard/users/Users";
import Login from "../app/auth/login/Login";
import UpdateUser from "../app/dashboard/users/update/UpdateUser";
import CreateUser from "../app/dashboard/users/create/CreateUser";
import PublicRoutesWrapper from "../features/auth/components/publicRoutesWrapper/PublicRoutesWrapper";
import Dashboard from "../app/dashboard/Dashboard";
import Tags from "../app/dashboard/tags/Tags";
import TicketV2 from "../app/dashboard/tickets/id/Ticket";
import { USER_ROLES } from "../constraints/constraints";
import PrivateRoutesWrapper from "../components/privateRoutesWrapper/PrivateRoutesWrapper";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element:
          <PublicRoutesWrapper>
            <Login />
          </PublicRoutesWrapper>
      },
      {
        element: <PrivateRoutesWrapper roles={Object.values(USER_ROLES)} />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />,
            children: [
              { index: true, element: <Tickets /> },
              {
                path: 'tickets',
                children: [
                  { index: true, element: <Tickets /> },
                  {
                    element: <PrivateRoutesWrapper roles={[USER_ROLES.admin, USER_ROLES.manager, USER_ROLES.csr]} />,
                    children: [{
                      path: 'create', element: <CreateTicket />
                    }]
                  },
                  { path: ':ticketId', element: <TicketV2 /> },
                ]
              },
              {
                path: 'departments',
                children: [
                  { index: true, element: <Departments /> }
                ]
              },
              {
                path: 'tags',
                children: [
                  { index: true, element: <Tags /> },
                ]
              },
              {
                path: 'users',
                children: [
                  { index: true, element: <Users /> },
                  {
                    element: <PrivateRoutesWrapper roles={[USER_ROLES.admin, USER_ROLES.manager, USER_ROLES.csr]} />,
                    children: [
                      { path: 'create', element: <CreateUser /> }
                    ]
                  },
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
