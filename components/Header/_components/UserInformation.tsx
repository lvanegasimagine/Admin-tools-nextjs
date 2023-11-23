import React from 'react'
import { currentUser } from '@clerk/nextjs'

const UserInformation = async () => {
  const user = await currentUser()
  console.log("🚀 ~ file: UserInformation.tsx:6 ~ UserInformation ~ user:", user)
  
    return (
    <div>{user?.firstName}</div>
  )
}

export default UserInformation