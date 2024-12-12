'use client'
import { useSelectedLayoutSegments } from 'next/navigation'
import React from 'react'

export default function Users() {
     const layoutSegment = useSelectedLayoutSegments()
     console.log("🚀 ~ Users ~ layoutSegment:", layoutSegment)
     return (
          <div>Users</div>
     )
}
