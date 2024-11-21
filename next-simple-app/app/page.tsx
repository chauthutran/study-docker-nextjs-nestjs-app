"use client";

import { useEffect, useState } from "react";

export default function Home() {
  
  const [list, setList] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  const fetchData = async() => {
    try {
			const response: any = await fetch(`http://localhost:3001/data`);
      const data = await response.json();
      setList(data);
		} catch (err: any) {
			setError(err.message);
		}
  }
  
  useEffect(() => {
    fetchData();
  }, [])
  
  
  if( error !== null ) return (<div>{error}</div>);
  
  return (
    <>
      <div> Hello, World !</div>
      <div>{JSON.stringify(list)}</div>
    </>
  );
}
