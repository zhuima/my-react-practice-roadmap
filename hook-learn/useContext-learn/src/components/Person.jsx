import { UserContext, ChannelContext } from '../App'
import React, { useContext } from 'react'

const Person = () => {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <div>
      <h1>
        {user} - {channel}
      </h1>
    </div>
  )
}

export default Person
