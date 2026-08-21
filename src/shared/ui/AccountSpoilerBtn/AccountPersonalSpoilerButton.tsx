import type React from "react";
import styles from "./Spoiler.module.scss";
import type { ButtonHTMLAttributes } from "react";

interface SpoilerBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  isOpen: boolean;
  ariaControls: string;
}

export const AccountPersonalSpoilerButton = (props: SpoilerBtnProps) => {
  const { children, onClick, isOpen, ariaControls, ...otherProps } = props;

  return (
    <button
      className={styles.spoilerBtn}
      onClick={() => onClick()}
      aria-expanded={isOpen}
      aria-controls={ariaControls}
      {...otherProps}
    >
      {children}
    </button>
  );
};
