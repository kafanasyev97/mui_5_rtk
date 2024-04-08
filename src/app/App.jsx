import Footer from '../widgets/Footer'
import { RouterProvider } from 'react-router-dom'

import Header from '../widgets/Header'
import { router } from './router'
import './styles/App.scss'

function App() {
  return (
    <RouterProvider router={router}>
      <Header />
      <div className="hello">Hello</div>
      <Footer />
    </RouterProvider>
  )
}

export default App
