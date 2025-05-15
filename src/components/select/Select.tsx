// import React, { useState } from 'react'
import React from "react";
import { TVariants } from "../defintions.components";
import S from "./Select.module.css";
import { ChevronsUpDown } from "lucide-react";

type Props = {
  children: React.ReactNode;
  title?: string;
  sze?: "sm" | "md";
  variant?: TVariants;
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

const Select = React.forwardRef<HTMLSelectElement, Props>(
  ({ children, sze = "md", title, variant = "primary", ...rest }, ref) => {
    // export default function Select({children, sze = 'md', title, variant = 'primary', ...rest}: Props) {
    // const options = data.map((option) => <option id={option.id} value={option.id}>{option.title}</option>)
    const sizes = {
      sm: "select-sm",
      md: "select-md",
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
            // id={rest.name}
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
