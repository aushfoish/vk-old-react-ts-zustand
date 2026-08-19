import type React from "react";
import styles from "./Button.module.scss";
import { Loader } from "../Loader";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  isLoading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { className, children, onClick, type, isLoading, disabled, ...otherProps } = props;
  const isButtonDisabled = disabled || isLoading

  return (
    <button
      type={type}
      className={`${styles.button} ${className}`.trim()}
      onClick={onClick}
      disabled={isButtonDisabled}
      aria-disabled={isButtonDisabled}
      {...otherProps}
    >
      {isLoading ? (
        <>
          <Loader />
          <span className="visuallyHidden">Загрузка..</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
