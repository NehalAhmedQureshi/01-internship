'use client'
import { useParams } from 'next/navigation'
import React from 'react'

export default function Slug() {
     const slugParam = useParams()      // * return slug parameter
     console.log("🚀 ~ Slug ~ slugParam:", slugParam)
  return (
    <div>Slug</div>
  )
}
