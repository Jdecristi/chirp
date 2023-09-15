import React from "react";

import type { FC, PropsWithChildren } from "react";

const MainSection: FC<PropsWithChildren> = ({ children }) => {
  return <div className="mx-auto h-screen grow overflow-scroll md:max-w-2xl md:border-x">{children}</div>;
};

export { MainSection };
