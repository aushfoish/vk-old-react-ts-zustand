interface AppHeaderProps {
  onClick: (isShowed: boolean) => void
}

const AppHeader = (props:AppHeaderProps) => {

  const {onClick} = props

    return (
    <header className="header-panel">

       <div className="vklogo-input">
        <a><span className="header-logo">В</span>КОНТАКТЕ</a>
       </div>
       <nav className="header-buttons">
        <ul className="header-options">
          <li onClick={() => onClick(false)}>музыка</li>
          <li>выйти</li>
        </ul>
       </nav>
          
     
      
    </header>
    )
}

export default AppHeader