import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "@src/utils";

import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

const columnVariants = cva("flex flex-col", {
  variants: {
    content: {
      top: "justify-start",
      bottom: "justify-end",
      center: "justify-center",
      "space-between": "justify-between",
      "space-evenly": "justify-evenly",
      "space-around": "justify-around",
    },
    align: {
      left: "items-start",
      right: "items-end",
      center: "items-center",
    },
    filled: {
      true: "h-full",
      false: "",
    },
  },
  defaultVariants: {
    content: "center",
    align: "center",
    filled: false,
  },
});

type ColumnProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof columnVariants>;

const Column = forwardRef<HTMLDivElement, ColumnProps>(({ children, content, align, filled, className, ...props }, ref) => (
  <div className={cn(columnVariants({ content, align, filled, className }))} ref={ref} {...props}>
    {children}
  </div>
));

export { Column };
