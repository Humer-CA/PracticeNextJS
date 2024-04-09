import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center bg-gray-900 p-5 mb-5 gap-4">
      <Link href="/" className="mr-5 text-lg font-bold text-pink-400">
        Next.js
      </Link>

      <div className="flex gap-4">
        <Link href="/users" className="hover:text-green-300">
          Users
        </Link>
        <Link href="/products" className="hover:text-green-300">
          Products
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
