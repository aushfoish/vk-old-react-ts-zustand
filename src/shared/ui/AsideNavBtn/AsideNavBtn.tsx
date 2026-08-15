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
      <div className={`navigation-btn -- ${className || ""}`} id={id}>
        {children}{" "}
      </div>
    </Link>
  );
};

