import React from "react";

export default function SectionTitle(
  props: {
    black?: boolean;
    children: React.ReactNode;
    shadow?: boolean;
    background?: boolean;
  
  } & React.HTMLAttributes<HTMLSpanElement>
) {
  const {
    black,
    children,
    shadow = false,
    background = false,
    className,

  } = props;
  return (
    <span
      className={`
      ${black ? "text-black" : "text-white"} 
      ${shadow ? "text-shadow" : ""}  
      ${
        background
          ? black
            ? "md:px-12 px-1 md:py-4 bg-color text-white"
            : "md:px-12 px-1 md:py-4  bg-secondary text-white"
          : ""
      }
      font-black md:text-[100px] text-[75px]   ${className}`}
    >
      {children}
    </span>
  );
}
