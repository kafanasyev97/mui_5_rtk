import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const MainLayout = () => {
  return (
    <div className="global-wrapper">
      <div className="wrapper-head-main">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
