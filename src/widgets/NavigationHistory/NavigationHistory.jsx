import './NavigationHistory.scss'

const NavigationHistory = () => {
  return (
    <nav className="history">
      <ol className="nav-history">
        <li>
          <a href="/user/index">Главная</a>
        </li>
        <li className="nav-history__slash">
          <a href="#">Пользователи</a>
        </li>
      </ol>
    </nav>
  )
}

export default NavigationHistory
