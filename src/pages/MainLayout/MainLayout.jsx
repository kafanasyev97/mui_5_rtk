import { Outlet } from 'react-router-dom'
import Footer from '../../widgets/Footer/Footer'
import Header from '../../widgets/Header/Header'

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
