import React from "react";
import Link from "next/link";
const index = ({productId=500}) => {
  return (
    <div>
      <Link href="/">
        <a>Go to Homepage</a>
      </Link>

      <Link href={`/products/${productId}`} replace>
        <a>Product 1</a>
      </Link>

      <Link href="/products/2">
        <a>Product 2</a>
      </Link>
      <Link href="/products/3">
        <a>Product 3</a>
      </Link>
    </div>
  );
};

export default index;
