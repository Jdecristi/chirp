import React from "react";

import { Column } from "@src/components/ui/Column";

import type { FC, PropsWithChildren } from "react";

const MainSection: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Column content="top" align="left" className="mx-auto h-screen grow overflow-scroll md:max-w-2xl md:border-x">
      {children}
    </Column>
  );
};

export { MainSection };
