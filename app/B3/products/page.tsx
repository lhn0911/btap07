"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const route = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };

  const handClick = () => {
    console.log("giá trị tìm kiếm", inputValue);
    console.log("giá trị tìm kiếm", inputValue2);

    const a = `name=${encodeURIComponent(
      inputValue
    )}&categories=${encodeURIComponent(inputValue2)}`;
    route.push(`/B3/products?${a}`);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <input type="text" onChange={handleInputChange2} />
      <button onClick={handClick}>Tìm kiếm</button>
    </div>
  );
}
