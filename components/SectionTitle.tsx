import React from "react";

export default function SectionTitle(
  props: {
    black?: boolean;
    children: React.ReactNode;
    shadow?: boolean;
  } & React.HTMLAttributes<HTMLSpanElement>
) {
  const { black, children, shadow = true, className } = props;
  return (
    <span
      className={`${black ? "text-black" : "text-white"} 
      ${shadow ? "text-shadow" : ""}  
      font-bold md:text-[100px] text-[70px]  ${className}`}
    >
      {children}
    </span>
  );
}
