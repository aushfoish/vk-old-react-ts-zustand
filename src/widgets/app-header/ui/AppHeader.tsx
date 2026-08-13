import { CurrentUserWidget } from "../../../entities/user/ui/CurrentUserWidget/CurrentUserWidget";

interface AppHeaderProps {
  onToggleMp3: (isShowed: boolean) => void;
  onUnauthorize: () => void;
}

export const AppHeader = (props: AppHeaderProps) => {
  const { onToggleMp3, onUnauthorize } = props;


  return (
    <header className="header-panel">
      <div className="vklogo-input">
        <a>
          <span className="header-logo">В</span>КОННЕКТЕ
        </a>
          <CurrentUserWidget />
      </div>
      <nav className="header-buttons">
        <ul className="header-options">
          <li onClick={() => onToggleMp3(false)}>музыка</li>
          <li onClick={() => onUnauthorize()}>выйти</li>
        </ul>
      </nav>
    </header>
  );
};
