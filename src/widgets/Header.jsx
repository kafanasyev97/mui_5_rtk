const Header = () => {
  return (
    <div className="head">
      <header className="header">
        <div className="container">
          <nav className="header__container">
            <a href="#" className="header__link">
              My Application
            </a>
            <div className="header__block">
              <ul className="list">
                <li>
                  <a className="link-ul" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="link-ul" href="#">
                    Swagger
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
