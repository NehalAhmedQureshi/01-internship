'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function page() {
     const parameter = usePathname()
     return (
          <>
          <div>page</div>
          <ol type="A" className="border-2 border-white p-5 text-white ">
        <li>
          <Link href='/' className={parameter === '/' ? 'active':''}>Nehal</Link>
        </li>
        <li>
          <Link href="/dashboard" className={parameter === '/dashboard' ? 'active':''}>Dashboard</Link>
        </li>
      </ol>
      </>
     )
}
