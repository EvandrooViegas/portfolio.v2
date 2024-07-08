import React from "react";

export default function SectionTitle(
  props: {
    black?: boolean;
    children: React.ReactNode;
    shadow?: boolean;
    background?: boolean;
    subtitle?: string;
  } & React.HTMLAttributes<HTMLSpanElement>
) {
  const {
    black,
    children,
    shadow = false,
    background = false,
    className,
    subtitle,
  } = props;
  return (
    <span
      className={`${black ? "text-black" : "text-white"} 
      ${shadow ? "text-shadow" : ""}  
      ${
        background
          ? black
            ? "px-12 py-4 bg-color text-white"
            : "px-12 py-4  bg-secondary text-white"
          : ""
      }
      font-black md:text-[100px] text-[90px]   ${className}`}
    >
      {children}
    </span>
  );
}
