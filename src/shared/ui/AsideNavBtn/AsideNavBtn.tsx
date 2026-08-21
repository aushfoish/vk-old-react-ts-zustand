import styles from './AsideNavBtn.module.scss'
import { Link } from "react-router-dom";

interface AsideNavBtnProps {
  id: string;
  children: React.ReactNode;
  className: string;
}

export const AsideNavBtn = (props: AsideNavBtnProps) => {
  const { id, children, className } = props;

  return (
    <Link to={`/${id}`}>
      <button className={`${styles.navBtn} ${className || ""}`.trim()} id={id}>
        {children}{" "}
      </button>
    </Link>
  );
};

