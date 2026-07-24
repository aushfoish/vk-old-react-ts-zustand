import AsideNavBtn from "./AsideNavBtn"


interface NavItem {
    id: string,
    label: string
}



const AppAside = () => {



    const NAV_ITEMS: NavItem[] = [
  { id: 'my-page', label: 'Моя Страница' },
  { id: 'my-audio', label: 'Мои Аудиозаписи' },
//   { id: 'my-communities', label: 'Мои Группы' },
  { id: 'my-feed', label: 'Мои Новости' },
//   { id: 'my-applications', label: 'Приложения' },
  

];


    return (
        <aside className="side-navigation">
            <nav className="side-bar">
            <ul className="navigation-main">
                {NAV_ITEMS.map((item) => (
                    <AsideNavBtn
                        className=""
                        id={item.id}
                        children={item.label}
                        key={item.id}
                        
                    />
                ))}
            </ul>
            </nav>
        </aside>
    )
}

export default AppAside