import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex bg-slate-200 gap-5 p-5">
        <Link href="/">Next.js</Link>
        <Link href="/users">Users</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </>
  );
};

export default Navbar;
