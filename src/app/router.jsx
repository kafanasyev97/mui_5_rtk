import { Navigate, createBrowserRouter } from 'react-router-dom'
import UserListPage from '../pages/UserListPage'
import CreateUserPage from '../pages/CreateUserPage'
import ViewUserPage from '../pages/ViewUserPage'
import UpdateUserPage from '../pages/UpdateUserPage'
import MainLayout from '../widgets/MainLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/index" />,
      },
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
    ],
  },
])
