import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  // loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  id?: string;
  onClick?: () => void;
}

const buttonVariants: Record<string, string> = {
  primary: "bg-dark-main text-white",
  secondary: "border-dark-main border text-dark-main",
  tertiary: "bg-transparent border border-dark-main text-dark-main",
};

const buttonSizes: Record<string, string> = {
  large: "text-[16px] px-5 py-3",
  medium: "text-[14px] px-3 py-2",
  small: "text-[12px] px-2",
};

export default function Button({
  variant = "primary",
  size = "medium",
  loading = false,
  startIcon,
  endIcon,
  id,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      id={id}
      type="button"
      disabled={disabled}
      className={[
        "storybook-button rounded-md font-medium hover:opacity-[0.7] transition ease-in-out delay-[300]",
        buttonVariants[variant],
        buttonSizes[size],
        className,
      ].join(" ")}
      {...props}
    >
      <div className="flex items-center justify-center">
        {startIcon && <span className="mr-2 text-[16px]">{startIcon}</span>}
        {children}
        {endIcon && <span className="ml-2 text-[16px]">{endIcon}</span>}
      </div>
    </button>
  );
}
