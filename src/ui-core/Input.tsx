import React from "react";
import "./Input.css";

interface IProps {
  value: string;
  placeholder?: string;
  name?: string;
  type?: "tel" | "email" | "text";
  onChange: (value: string) => void;
}

export function Input(props: IProps) {
  const { onChange, value, placeholder, name, type = "text" } = props;
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
      className="Input"
    />
  );
}
