import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="head">
      <header className="header">
        <div className="container">
          <nav className="header__container">
            <a href="/user/index" className="header__link">
              My Application
            </a>
            <div className="header__block">
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
      <div className="header__line"></div>
    </div>
  )
}

export default Header
