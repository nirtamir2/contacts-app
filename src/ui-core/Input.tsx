import cx from "classnames";
import React from "react";
import "./Input.css";

interface IProps {
  value: string;
  placeholder?: string;
  name?: string;
  type?: "tel" | "email" | "text";
  error?: boolean;
  onChange: (value: string) => void;
}

export function Input(props: IProps) {
  const {
    onChange,
    value,
    placeholder,
    name,
    type = "text",
    error = false,
  } = props;
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }
  return (
    <input
      name={name}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={handleChange}
      className={cx("Input", { "Input--error": error })}
    />
  );
}
