export const routesData = {
  auth: {
    login: 'auth/login',
    register: 'auth/register',
    update: (id: string) => `auth/update/${id}`,
    // id: (id: string) => `auth/${id}`
  },
  tickets: {
    base: 'tickets',
    create: 'tickets/create',
    update: (id: string) => `tickets/update/${id}`,
    id: (id: string) => `tickets/${id}`
  },
  departments: {
    base: 'departments',
    create: 'departments/create',
    update: (id: string) => `departments/update/${id}`,
    id: (id: string) => `departments/${id}`
  },
  categories: {
    base: 'categories',
    create: 'categories/create',
    update: (id: string) => `categories/update/${id}`,
    id: (id: string) => `categories/${id}`
  },
  users: {
    base: 'users',
    create: 'users/create',
    update: (id: string) => `users/update/${id}`,
    id: (id: string) => `users/${id}`,
    current: (id: string) => `users/${id}`
  },
  settings: {
    base: 'settings',
  },
  metrics: {
    base: 'metrics',
  }

}