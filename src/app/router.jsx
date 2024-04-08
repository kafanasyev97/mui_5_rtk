import { createBrowserRouter } from 'react-router-dom'
import UserListPage from '../pages/UserListPage'
import CreateUserPage from '../pages/CreateUserPage'
import ViewUserPage from '../pages/ViewUserPage'
import UpdateUserPage from '../pages/UpdateUserPage'

export const router = createBrowserRouter([
  {
    path: '/index',
    element: <UserListPage />,
  },
  {
    path: '/create',
    element: <CreateUserPage />,
  },
  {
    path: '/view/:id',
    element: <ViewUserPage />,
  },
  {
    path: '/update/:id',
    element: <UpdateUserPage />,
  },
])
