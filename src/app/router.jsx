import { Navigate, createBrowserRouter } from 'react-router-dom'
import UserListPage from '../pages/UserListPage'
import CreateUserPage from '../pages/CreateUserPage'
import ViewUserPage from '../pages/ViewUserPage'
import UpdateUserPage from '../pages/UpdateUserPage'
import MainLayout from '../pages/MainLayout/MainLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/user/index" />,
      },
      {
        path: '/user/index',
        element: <UserListPage />,
      },
      {
        path: '/user/create',
        element: <CreateUserPage />,
      },
      {
        path: '/user/view/:id',
        element: <ViewUserPage />,
      },
      {
        path: '/user/update/:id',
        element: <UpdateUserPage />,
      },
    ],
  },
])
