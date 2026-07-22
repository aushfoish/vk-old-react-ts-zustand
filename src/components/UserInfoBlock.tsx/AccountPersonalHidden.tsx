import PersonalInfo from "./PersonalInfo"

const AccountPersonalHidden = () => {
    return (
        <div className="user-info">
              
              <div className="contacts-info">


                <h3 className="info-header">Контактная информация</h3>

                <PersonalInfo 
                  id='user-city'
                  children='Город'
                  label='Санкт-Петербург/Ленинград'/>

                <div className="info-row" id="user-mobile-container">
                  <div className="label">
                    Моб. телефон:
                  </div>
                  <div className="content" id="user-mobile-number">
                    Скрыто
                  </div>
                </div>

                  <PersonalInfo 
                    id='user-skype'
                    children="Skype"
                    label='durov'/>

                  <div className="info-row" id="user-website-container">
                    <div className="label">
                      Сайт:
                    </div>
                    <div className="content" id="user-website">
                      telegram.org
                    </div>
                  </div>


                </div>

              <div className="personal-info">


                <h3 className="info-header">Личная информация</h3>

                <div className="info-row" id="user-activity-container">
                  <div className="label">
                    Деятельность:
                  </div>
                  <div className="content" id="user-activity">
                    Создание социальных сетей, программирование
                  </div>
                </div>

                <div className="info-row" id="user-hobbies-container">
                  <div className="label">
                    Увлечения:
                  </div>
                  <div className="content" id="user-hobbies">
                    буддизм, саморазвитие, технологии
                  </div>
                </div>

                <div className="info-row" id="user-music-genres-container">
                  <div className="label">
                    Любимая музыка:
                  </div>
                  <div className="content" id="user-music-genres">
                    Классика, минимал-техно
                  </div>
                </div>

                <div className="info-row" id="user-favorite-quotes-container">
                  <div className="label">
                    Любимые цитаты:
                  </div>
                  <div className="content" id="user-favorite-quotes">
                    Люблю цитаты про стояцизм 
                  </div>
                </div>


              </div>

            </div>
    )
}

export default AccountPersonalHidden