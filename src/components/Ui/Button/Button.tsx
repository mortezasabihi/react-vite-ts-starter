import { forwardRef } from "react";
import { Spinner } from "@/components/Ui";

type ButtonSizes = "btn-xxl" | "btn-xl" | "btn-lg" | "btn-md" | "btn-sm";
type ButtonVariants =
  | "btn-contained-black"
  | "btn-outlined-black"
  | "btn-link-black"
  | "btn-contained-green"
  | "btn-outlined-green"
  | "btn-link-green"
  | "btn-contained-blue"
  | "btn-outlined-blue"
  | "btn-link-blue"
  | "btn-contained-red"
  | "btn-outlined-red"
  | "btn-link-red"
  | "btn-contained-gray"
  | "btn-outlined-gray"
  | "btn-link-gray";

interface ButtonProps {
  children?: React.ReactNode;
  size?: "xxl" | "xl" | "lg" | "md" | "sm";
  color?: "black" | "green" | "blue" | "red" | "gray";
  variant?: "link" | "outlined" | "contained";
  block?: boolean;
  icon?: JSX.Element;
  isLoading?: boolean;
}

export type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
  ButtonProps;

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { children, size = "md", variant = "link", color = "black", block, isLoading, onClick, icon, ...props },
  ref,
) {
  const iconSizes = {
    xxl: "text-[32px]",
    xl: "text-2xl",
    lg: "text-xl",
    md: "text-base",
    sm: "text-base",
  };
  const iconSizeClass = iconSizes[size];

  const iconButtonSizes = {
    xxl: "w-[55px] h-[55px]",
    xl: "w-[50px] h-[50px]",
    lg: "w-[45px] h-[45px]",
    md: "w-10 h-10",
    sm: "w-8 h-8",
  };
  const iconButtonSizeClass = iconButtonSizes[size] + " p-0";

  const loadingSizes = {
    xxl: 32,
    xl: 24,
    lg: 20,
    md: 16,
    sm: 16,
  };
  const loadingSize = loadingSizes[size];

  const sizeClass: ButtonSizes = `btn-${size}`;
  const variantClass: ButtonVariants = variant ? `btn-${variant}-${color}` : "btn-link-black";

  return (
    <button
      ref={ref}
      {...props}
      className={`btn ${props.className ? props.className : ""} ${sizeClass} ${variantClass} ${
        block ? "btn-block w-full" : ""
      } ${children && icon ? "gap-x-2" : ""} ${isLoading ? "cursor-wait" : ""} ${
        icon && !children ? iconButtonSizeClass : ""
      }`}
      onClick={(e) => {
        if (isLoading) {
          e.preventDefault();
          return;
        }

        onClick && onClick(e);
      }}
    >
      {icon && (
        <span className={[iconSizeClass, props.disabled && "opacity-50", isLoading ? "invisible" : ""].join(" ")}>
          {icon}
        </span>
      )}

      <span className={[props.disabled ? "opacity-50" : "", isLoading ? "invisible" : ""].join(" ")}>{children}</span>

      {isLoading && (
        <Spinner
          width={loadingSize}
          height={loadingSize}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      )}
    </button>
  );
});

export default Button;
