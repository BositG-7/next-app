"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { notFound } from "next/navigation";
import React from "react";

interface Params {
  params: { id: string };
}
interface User {
  id: number;
  username: string;
  email: string;
}

const UserDetailPage = ({ params: { id } }: Params) => {
  const fetchUsers = async (): Promise<User> => {
    const { data } = await axios.get<User>(`https://dummyjson.com/users/${id}`);
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: fetchUsers,
    staleTime: 10000,
  });

  if (isLoading) return <div>Yuklanmoqda...</div>;
  if (error instanceof Error) return <div>Xato yuz berdi: {error.message}</div>;

  if (+id > 10) notFound();
  return (
    <>
      <div>UserDetailPage {id}</div>
      <tr>
        <td>{data?.username}</td>
        <td>{data?.email}</td>
      </tr>
    </>
  );
};

export default UserDetailPage;
