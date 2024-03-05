'use client'
import React, { useEffect, useState } from "react";

export default function Page() {
  const [data,setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data:any) => {
      setData(data)
    })
  }, [])

  console.log('data',data);

  return (
    <div>
      
    </div>
  );
}
