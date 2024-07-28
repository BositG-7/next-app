import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/product-card/product-card";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <p></p>
      <Link href="/users/new">NewUserPage</Link>
      <ProductCard />
    </>
  );
}
