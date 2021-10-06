import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("placing your order");
    router.push("/products");
  };
  return (
    <div>
      <h1>Welcome to the nextJs boilerplate</h1>

      <Link href="/blog">
        <a>Blog</a>
      </Link>

      <Link href="/products">
        <a>Product</a>
      </Link>

      <button onClick={handleClick}>Place Order </button>
    </div>
  );
};

export default Index;
