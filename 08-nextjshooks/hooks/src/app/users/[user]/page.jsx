import React from 'react'

export async function generateStaticParams(){
  return [
    {
    user : 'arslan'
  },{
    user : 'arib'
  },{
    user:'ahad-ilyas'
  }
]
}
export default async function User({params}) {
  const {user} = await params
  console.log("🚀 ~ User ~ slug:", user)
  return (
    <div>User</div>
  )
}
