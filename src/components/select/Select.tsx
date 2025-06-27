import React from "react";
import S from "./Select.module.css";
import { ChevronsUpDown } from "lucide-react";
import { Variants } from "../../types/types";

type Props = {
  children: React.ReactNode;
  title?: string;
  sze?: "sm" | "md";
  variant?: Variants;
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

const Select = React.forwardRef<HTMLSelectElement, Props>(
  ({ children, sze = "md", title, variant = "primary", ...rest }, ref) => {
    const sizes = {
      sm: "select--sm",
      md: "select--md",
    };
    const variants = {
      primary: S["select--primary"],
      info: S["select--info"],
      success: S["select--success"],
      warning: S["select--warning"],
      danger: S["select--danger"],
    };

    const settings = `${S[sizes[sze]]} ${variants[variant]}`;

    return (
      <div className={S["select-wrapper"]}>
        {title && <label className={S["select-label"]} htmlFor={rest.name}>
          {title}
        </label>}
        <div className={S["select-container"]}>
          <select
            ref={ref}
            title={rest.name}
            className={`${S.select} ${settings}`}
            defaultChecked={true}
            {...rest}
          >
            {children}
          </select>
          <ChevronsUpDown className={S["select__icon"]} />
        </div>
      </div>
    );
  },
);

export default Select;
