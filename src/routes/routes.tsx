import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Tickets from "../app/pages/tickets/Tickets";
import CreateTicket from "../app/pages/tickets/create/CreateTicket";
import Departments from "../app/pages/departments/Departments";
import Categories from "../app/pages/categories/Categories";
import Settings from "../app/pages/settings/Settings";
import Users from "../app/pages/users/Users";
import {routes} from "./routes-data";
import Ticket from "../app/pages/tickets/id/Ticket";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {index: true, element: <Tickets/>},
            {path: routes.tickets.base, element: <Tickets/>},
            {path: routes.tickets.create, element: <CreateTicket/>},
            {path: routes.tickets.id(':ticketId'), element: <Ticket/>},
            {path: routes.departments.base, element: <Departments/>},
            {path: routes.categories.base, element: <Categories/>},
            {path: routes.users.base, element: <Users/>},
            {path: routes.settings.base, element: <Settings/>},
        ]
    }
])
