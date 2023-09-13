import React from "react";
import Link from "next/link";

import { AuthButton } from "@src/components/auth/AuthButton";

const Header = () => (
  <div className="padding bg-black-50 flex items-center justify-between border-b p-4">
    <Link href="/">
      <h1 className="text-3xl font-semibold">Home</h1>
    </Link>
    <AuthButton />
  </div>
);

export { Header };
