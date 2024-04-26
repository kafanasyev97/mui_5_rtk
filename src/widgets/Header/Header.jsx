import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="container">
          <nav className="header__container">
            <a href="/user/index" className="header__site-name-link">
              My Application
            </a>
            <div className="header__info-links">
              <ul className="list">
                <li>
                  <Link className="link-ul" to="/user/index">
                    Home
                  </Link>
                </li>
                <li>
                  <a className="link-ul" href="https://tasks.tizh.ru/swagger">
                    Swagger
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <div className="header-mb"></div>
    </div>
  )
}

export default Header
