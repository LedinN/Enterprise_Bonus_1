"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex bg-blue-500 flex justify-center items-center flex-col h-screen">
      <h1>Welcome to our first application</h1>
      <p>Under construction....</p>
      <span>
        <p>Logical Arithmatic Operators</p>
        <p>2 + 2 = {2 + 2}</p>
        <p>2 - 2 = {2 - 2}</p>
        <p>2 * 2 = {2 * 2}</p>
        <p>2 / 2 = {2 / 2}</p>
        <p>2 % 2 = {2 % 2}</p>
      </span>

      <span>
        <p>Conditional Operations</p>
        <p>2 &gt; 2 {2 > 2 ? "TRUE" : "FALSE"}</p>
        <p>2 &gt; 4 {2 > 4 ? "TRUE" : "FALSE"}</p>
        <p>4 &gt; 2 {4 > 2 ? "TRUE" : "FALSE"}</p>
      </span>

      {/* Display API Result */}
      <div>Result: {JSON.stringify(data)}</div>
    </div>
  );
}
