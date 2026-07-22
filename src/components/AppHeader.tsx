interface AppHeaderProps {
  onClick: (isShowed: boolean) => void
}

const AppHeader = (props:AppHeaderProps) => {

  const {onClick} = props

    return (
    <header className="header-panel">

     <div className="header-main">
       <div className="vklogo-input">
        <a>ВКОНТАКТЕ</a>
        <input className="search"></input>
       </div>
       <nav className="header-buttons">
        <ul className="header-options">
          <li>люди</li>
          <li>сообщества</li>
          <li>игры</li>
          <li onClick={() => onClick(false)}>музыка</li>
          <li>помощь</li>
          <li>выйти</li>
        </ul>
       </nav>
          
     </div>
      
    </header>
    )
}

export default AppHeader