import { forwardRef, ReactNode } from "react";

interface MenuDropdownProps {
  children: ReactNode;
  className?: string; // Optional className prop
  left?: string;
}

const MenuDropdown = forwardRef<HTMLDivElement, MenuDropdownProps>(
  ({ children, className, left }, ref) => {
    return (
      <div ref={ref} className={`group relative inline-block ${className}`}>
        <div
          className={`${
            left ? left : ""
          } absolute z-[100] bg-dark-container rounded-md border border-dark-line dark:border-neutral-700 top-full`}
        >
          {children}
        </div>
      </div>
    );
  }
);

MenuDropdown.displayName = "MenuDropdown";

export default MenuDropdown;
