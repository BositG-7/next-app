"use client";
import React, { Suspense } from "react";
import UserTable from "./components/user-table";
import { useRouter } from "next/navigation";

interface Props {
  searchParams: { sortOrder: string };
}
const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  const router = useRouter();
  return (
    <div>
      <h1>Users</h1>
      <button
        onClick={() => {
          router.push("/users/new");
        }}
        className="btn btn-white block"
      >
        New User
      </button>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
