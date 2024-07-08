import React from "react";

export default function SectionSubtitle(
  props: {
    black?: boolean;
    children: React.ReactNode;
  } & React.HTMLAttributes<HTMLSpanElement>
) {
  const { black, children, className } = props;
  return (
    <span
      className={`${black ? "text-black" : "text-white"} 
      font-bold md:text-[60px] text-[40px]  ${className}`}
    >
      {children}
    </span>
  );
}
