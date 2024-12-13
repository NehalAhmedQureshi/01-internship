'use server'
import { cookies, headers } from "next/headers";
import Image from "next/image";
import { after, connection, NextRequest } from "next/server";
import create from './action.js'
import { notFound } from "next/navigation.js";

export default async function Home() {
  // Given incoming request /home
  // Set a cookie to hide the banner
  // request will have a `Set-Cookie:show-banner=false;path=/home` header
  // request.cookies.set('show-banner', 'false')
  function log() {
    console.log('after rendere');
  }
  const post = false
  const headerList = await headers()
  console.log("🚀 ~ Home ~ headerList:", headerList)
  // const cookie = await cookies()
  // console.log("🚀 ~ Home ~ cookie:", cookie)

  // cookies().set('name', 'nehal')
  // await create()
  // after(()=>{
  //   log()
  // })
  if (!post){
    notFound()
  }
  return (
    <div className="main">
      Home page
    </div>
  );
}
