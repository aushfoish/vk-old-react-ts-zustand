import { useAppStore } from "../app/store/useAppStore"


interface AppHeaderProps {
  onClick: (isShowed: boolean) => void
  onUnauthorize: () => void
}

export const AppHeader = (props:AppHeaderProps) => {

    const {onClick, onUnauthorize} = props

    const userName = useAppStore((state) => state.userName)
    const userPic = useAppStore((state) => state.userPic)
    const userIsLogged = useAppStore((state) => state.userIsLogged)

    return (
    <header className="header-panel">

      <div className="vklogo-input">
        <a><span className="header-logo">В</span>КОННЕКТЕ</a>
        {userIsLogged && (
          <div className="current-user">
            <img className="header-userpic" src={userPic}></img>
            <div className="header-username">
                  <p className="header-username">{userName}</p>
                  <p className="header-subscriptio">(это вы)</p>
            </div>
          </div>)}
      </div>
      <nav className="header-buttons">
        <ul className="header-options">
          <li onClick={() => onClick(false)}>музыка</li>
          <li onClick={() => onUnauthorize()}>выйти</li>
        </ul>
      </nav>
          
    
      
    </header>
    )
}

