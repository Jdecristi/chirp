import React from "react";
import { AuthButton } from "../auth/AuthButton";

const Header = () => (
  <div className="padding bg-black-50 flex items-center justify-end border-b border-slate-500 p-4">
    <AuthButton />
  </div>
);

export { Header };
