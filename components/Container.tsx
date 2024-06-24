import React from "react";

type Props = {
  children: React.ReactNode;
  center?: boolean;
  full?: boolean;
  padding?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export default function Container(props: Props) {
  const {
    children,
    className,
    center = true,
    full = true,
    padding = true,
    ...rest
  } = props;
  return (
    <section
      className={`${padding ? "md:p-20 p-12" : ""} ${
        center ? "flex justify-center items-center" : ""
      } 
      ${full ? "min-h-screen" : ""}  
      ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}
