import React from 'react'

export default function ClockTime() {
  let time = new Date()
  return (
    <div><p  className='lead'>This is current time : {time.toLocaleTimeString()} - {time.toLocaleDateString()}</p></div>
  )
}
