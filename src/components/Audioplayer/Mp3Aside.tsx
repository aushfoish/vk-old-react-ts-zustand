import AsideNavBtn from "../Navigation/AsideNavBtn"

const Mp3Aside = () => {

    const audio_nav = [
        {label: "Мои аудиозаписи", id: 'my-audios'},
        {label: "Обновления друзей", id: 'friends'},
        {label: "Рекомендации", id: 'recomendations'},
        {label: "Популярное", id: 'trends'},
        {label: "Мои альбомы", id: 'my-albums'},
        
    ]

    return (
        <div className="mp3-track-list-aside">

                  <ul className="navigation-main">
                    {audio_nav.map((item) => 
                        <AsideNavBtn 
                            key={item.id}
                            className="audio-nav"
                            children={item.label}
                            id={item.id}/>
                        )}
                  </ul>

                  <div className="mp3-aside-friends-container">
                    <input className='mp3-friends-search'></input>
                    <div className="navigation-main">
                        <AsideNavBtn id='gera' className='audio-nav-friend'>
                            <img src="./gera-bratan.jpg" className="mp3-friendlist-account-userpic"></img>
                            Гера Брательник
                        </AsideNavBtn>
                    </div>
                  </div>

        </div>
    )
}

export default Mp3Aside