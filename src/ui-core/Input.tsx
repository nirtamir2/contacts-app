import React from "react";
import "./Input.css";

interface IProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export function Input(props: IProps) {
  const { onChange, value, placeholder } = props;
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      className="Input"
    />
  );
}
