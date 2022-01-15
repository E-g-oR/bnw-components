import React from "react";
// import * as styles from "./Button.css";

type Props = {
  className?: string;
//   style: keyof typeof styles.button;
  color: "primary" | "success" | "failure" | "warning" | "info";
  onClick: () => void;
  children?: string;
  text?: string;
  icon?: React.ReactNode;
};
const Button: React.FC<Props> = ({
  className,
//   style = "contained",
  onClick,
  children,
  text,
  icon,
  color = "primary",
}) => {
  return <button>button</button>;
};

export default Button;
