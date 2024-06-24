
"use client";

import { motion, HTMLMotionProps, useInView } from "framer-motion";
import { HTMLAttributes, ReactHTML, useEffect, useMemo, useRef, useState } from "react";

type Props<T extends keyof ReactHTML> = {
  children: React.ReactNode;
  element?: T;
  animateOnView?: boolean;
  animateOnce?: boolean;
  intersectionOptions?: any
} & HTMLAttributes<HTMLDivElement> &
  HTMLMotionProps<T>;

export default function AnimatedElement<T extends keyof ReactHTML>(
  props: Props<T>
) {
  const {
    children,
    element = "div",
    animateOnView = true,
    animateOnce = false,
    animate = { opacity: [0, 1], transition: { duration: 0.7 } },
    initial,
    intersectionOptions,
    ...rest
  } = props;
  const Motion = useMemo(
    // @ts-expect-error
    () => motion[element] as (typeof motion)["div"],
    [element]
  );

  const ref = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false)
  const isIntersecting = useInView(ref, {
    once: Boolean(animateOnce && hasAnimated),
    ...intersectionOptions
  });
  const animation = useMemo(
    () => (animateOnView ? (isIntersecting ? animate : undefined) : animate),
    [animate, animateOnView, isIntersecting]
  );
  useEffect(() => {
    if(isIntersecting) setHasAnimated(true)
  }, [isIntersecting])
  return (
    <Motion
      {...rest}
      ref={ref}
      initial={initial ? initial : { opacity: 0 }}
      animate={animation}
    >
      {children}
    </Motion>
  );
}