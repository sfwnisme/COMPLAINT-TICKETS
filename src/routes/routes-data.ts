export const routes = {
  tickets: {
    base: '/tickets',
    create: '/tickets/create',
    update: (id: number) => `/tickets/update/${id}`,
    id: (id: string) => `/tickets/${id}`
  },
  departments: {
    base: '/departments',
    create: '/departments/create',
    update: (id: number) => `/departments/update/${id}`,
    id: (id: number) => `/departments/${id}`
  },
  categories: {
    base: '/categories',
    create: '/categories/create',
    update: (id: number) => `/categories/update/${id}`,
    id: (id: number) => `/categories/${id}`
  },
  users: {
    base: '/users',
    create: '/users/create',
    update: (id: number) => `/users/update/${id}`,
    id: (id: number) => `/users/${id}`
  },
  settings: {
    base: '/settings',
  }

}