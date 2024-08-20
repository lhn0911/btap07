"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const route = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    console.log("giá trị tìm kiếm", inputValue);
    setDisplayValue(inputValue);
    route.push(`/post?search=${encodeURIComponent(inputValue)}`);
  };

  return (
    <div>
      <h1>giá trị tìm kiếm là: {displayValue}</h1>{" "}
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleClick}>Tìm kiếm</button>
    </div>
  );
}
