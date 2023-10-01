import React, { ReactNode } from "react";
interface ButtonProps {
  className?: string;
  id?: string;
  children?: string | ReactNode;
  title: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  className,
  id,
  children,
  type,
  title,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={className}
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
