import {AsideNavBtn} from "../../../shared/ui/AsideNavBtn/AsideNavBtn";

const NAV_ITEMS = [
  { id: "my-page", label: "Моя Страница" },
  { id: "my-audio", label: "Мои Аудиозаписи" },
];

export const AppAside = () => {
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
  );
};
