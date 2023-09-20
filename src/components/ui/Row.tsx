import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "@src/utils";

import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

const rowVariants = cva("flex", {
  variants: {
    content: {
      left: "justify-start",
      right: "justify-end",
      center: "justify-center",
      "space-between": "justify-between",
      "space-evenly": "justify-evenly",
      "space-around": "justify-around",
    },
    align: {
      top: "items-start",
      bottom: "items-end",
      center: "items-center",
    },
    filled: {
      true: "w-full",
      false: "",
    },
  },
  defaultVariants: {
    content: "center",
    align: "center",
    filled: false,
  },
});

type RowProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof rowVariants> & {
    gap?: string;
  };

const Row = forwardRef<HTMLDivElement, RowProps>(({ children, content, align, filled, gap, className, ...props }, ref) => {
  const gapStyle = gap ? `gap-${gap}` : "";

  return (
    <div className={cn(gapStyle, rowVariants({ content, align, filled, className }))} ref={ref} {...props}>
      {children}
    </div>
  );
});

export { Row };
