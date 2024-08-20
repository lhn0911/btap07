"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const [inputValue, setInputValue] = useState("");
  const route = useRouter();

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };
  const handClick = () => {
    console.log("giá trị tìm kiếm", inputValue);
    route.push(`/post?search=${encodeURIComponent(inputValue)}`);
  };
  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handClick}>Tìm kiếm</button>
    </div>
  );
}
