'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
     let router = useRouter()
     console.log("🚀 ~ page ~ router:", router)
  return (
//     <div>optnfsdf sdfdsfklj  kdsdlfsdfslk</div>
    <button onClick={()=>router.push('/id')}>id</button>
  )
}