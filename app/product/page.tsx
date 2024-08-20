"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function page() {
  const searchParams = useSearchParams();
  const idProduct = searchParams.get("id");
  const nameProduct = searchParams.get("name");

  return (
    <div>
      <h1>TRANG sản phẩm</h1>
      <p>sản phẩm có id là: {idProduct}</p>
      <p>sản phẩm có name là :{nameProduct}</p>
    </div>
  );
}
