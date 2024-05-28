import { getDataFetch } from '@/service'
import { ENDPOINTS } from '@/service/endpoints'
import React from 'react'

const Profile = async () => {
  const data = await getDataFetch(ENDPOINTS.PROFILE)
  console.log(data)
  return (
    <div>
      Profile
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Profile
