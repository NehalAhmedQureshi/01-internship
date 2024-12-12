'use server'
import { cookies } from "next/headers";
import Image from "next/image";
import { after, connection } from "next/server";
import create from './action.js'

export default async function Home() {
  function log() {
    console.log('after rendere');
  }
  const cookie = await cookies()
  console.log("🚀 ~ Home ~ cookie:", cookie)

  // cookies().set('name', 'nehal')
  // await create()
  // after(()=>{
  //   log()
  // })
  return (
    <div className="main">
      Home page
    </div>
  );
}
