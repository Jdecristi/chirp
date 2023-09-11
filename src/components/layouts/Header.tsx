import React from "react";
import { AuthButton } from "../auth/AuthButton";

const Header = () => (
  <div className="padding bg-black-50 flex items-center justify-between border-b p-4">
    <h1 className="text-3xl font-semibold">Home</h1>
    <AuthButton />
  </div>
);

export { Header };
