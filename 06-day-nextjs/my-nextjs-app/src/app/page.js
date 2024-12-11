'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// export function getServerSideProps() {
//   // Could be GET or POST/PUT/PATCH/DELETE
//   fetch('//dummyjson.com/test')
//     .then(res => res.json())
//     .then(console.log(res));

//   /* { status: 'ok', method: 'GET' } */
// }

export default function Home() {
  let [state, setState] = useState('hi')
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      hello world from server {state}
      <Link href="/about">about</Link>
    </div>
  );
}
