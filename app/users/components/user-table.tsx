"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { sort } from "fast-sort";
import Loading from "@/app/loading";

interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
}

interface UsersResponse {
  users: User[];
}

const fetchUsers = async (): Promise<UsersResponse> => {
  const { data } = await axios.get<UsersResponse>(
    "https://dummyjson.com/users"
  );
  return data;
};

interface Props {
  sortOrder: string;
}

const UserTable = ({ sortOrder }: Props) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 10000,
  });
  const router = useRouter();

  const filterUsers = !sortOrder
    ? data?.users
    : sort(data?.users!).asc(
        sortOrder === "email" ? (user) => user.phone : (user) => user.username
      );

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {filterUsers?.map((item) => (
            <tr
              onClick={() => {
                router.push(`/users/${item.id}`);
              }}
              key={item.id}
              style={{ cursor: "pointer" }}
            >
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
