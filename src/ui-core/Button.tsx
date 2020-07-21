import React, { ButtonHTMLAttributes } from "react";
import "./Button.css";

interface IProps {
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  children: React.ReactNode;
}

export function Button(props: IProps) {
  const { children, onClick, type = "button" } = props;

  function handleClick() {
    if (onClick != null) {
      onClick();
    }
  }

  return (
    <button
      type={type}
      className="Button"
      onClick={onClick == null ? undefined : handleClick}
    >
      {children}
    </button>
  );
}
