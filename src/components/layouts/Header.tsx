import Link from "next/link";
import React from "react";

import { AuthButton } from "@src/components/auth/AuthButton";

const Header = () => (
  <div className="flex items-center justify-between border-b bg-black p-4">
    <Link href="/">
      <h1 className="text-3xl font-semibold">Home</h1>
    </Link>
    <AuthButton />
  </div>
);

export { Header };
