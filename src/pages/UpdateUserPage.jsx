import UserButton from '../shared/UserButton'
import png from '../shared/images/user-placeholder.png'

const UpdateUserPage = () => {
  return (
    <div className="container">
      <div className="user-form">
        <form action="">
          <img className="user-img" src={png} alt="" />
          <br />
          <label htmlFor="file">Заменить</label>
          <input type="file" id="file" />
          <br />

          <label htmlFor="name"></label>
          <input id="name" type="text" />
          <br />

          <label htmlFor="email"></label>
          <input id="email" type="email" />
          <br />

          <label htmlFor="date"></label>
          <input type="date" id="date" name="date" />
          <br />

          <label htmlFor="programming-language">Любимая еда</label>
          <select
            id="programming-language"
            name="programming-language"
            multiple
          >
            <option value="ruby">Выбрать все</option>
            <option value="python">Морковка</option>
            <option value="javascript">Капуста</option>
            <option value="java">Свекла</option>
            <option value="csharp">Редиска</option>
            <option value="cpp">Сосиска</option>
            <option value="php">Пирожок</option>
          </select>
          <UserButton
            title="Сохранить"
            bgColor="#28a745"
            bgColorHover="#218838"
            bgBorderColor="#1e7e34"
          />
        </form>
      </div>
    </div>
  )
}

export default UpdateUserPage
