import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="flex h-12 items-center px-4 justify-between shadow-md">
        <Link href="/">
          <a className="text-lg font-bold">Hecasan</a>
        </Link>

        <div>
          <Link href="/login">
            <a className="p-2">Login</a>
          </Link>
          <Link href="/carrinho">
            <a className="p-2">Carrinho</a>
          </Link>
        </div>
      </nav>
    </div>
  );
}
