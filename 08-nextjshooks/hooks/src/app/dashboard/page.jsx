'use client'
import { useParams } from 'next/navigation'
import React from 'react'

export default function Dashboard() {
  const param = useParams()
  console.log("🚀 ~ Dashboard ~ param:", param)
  return (
    <div>app</div>
  )
}
