import type React from "react";
import { Loader } from "../Loader";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  isLoading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { className, children, onClick, type, isLoading, disabled } = props;

  return (
    <button
      type={type}
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};
