import React from "react";
import "./Button.css";

interface IProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function Button(props: IProps) {
  const { children, onClick } = props;
  function handleClick() {
    onClick();
  }
  return (
    <button className="Button" onClick={handleClick}>
      {children}
    </button>
  );
}
