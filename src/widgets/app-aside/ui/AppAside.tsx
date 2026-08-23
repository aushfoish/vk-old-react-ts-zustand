import { AsideNavBtn } from "@/shared/ui";
import styles from './Aside.module.scss'

const NAV_ITEMS = [
  { id: "my-page", label: "Моя Страница" },
  { id: "my-audio", label: "Мои Аудиозаписи" },
];

export const AppAside = () => {
  return (
    <aside className={styles.sideNavigation}>
      <nav className={styles.navigationMain}>
          {NAV_ITEMS.map((item) => (
            <AsideNavBtn
              className=""
              id={item.id}
              children={item.label}
              key={item.id}
            />
          ))}
      </nav>
    </aside>
  );
};
