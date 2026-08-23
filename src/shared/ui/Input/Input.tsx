import type React from "react";
import styles from "./Input.module.scss";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  placeholder?: string;
  id: string;
  label: string;
  className: string;
  type: string;
  onFocus?: () => void;
  onBlur?: (e: React.FocusEvent) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  classInput?: string;
  maxLength?: number;
  onInput?: (e: React.InputEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  step?: number;
  containerClass?: string;
  accept?: string;
}

export const Input = (props: InputProps) => {
  const {
    placeholder,
    id,
    label,
    className,
    classInput,
    type,
    onFocus,
    onBlur,
    onChange,
    maxLength,
    value,
    onInput,
    min,
    max,
    step,
    containerClass,
    accept,
    ...otherProps
  } = props;

  return (
    <div className={`${containerClass}`.trim()}>
      <label className={`input-label ${className}`.trim()} htmlFor={id}>
        {label}
      </label>
      <input
        className={`${styles.input} ${classInput}`.trim()}
        type={type}
        onInput={onInput}
        id={id}
        placeholder={placeholder}
        maxLength={maxLength}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        min={min}
        max={max}
        step={step}
        accept={accept}
        {...otherProps}
      ></input>
    </div>
  );
};
