import React from 'react'

const WelcomMeassage = ({onGetPostList}) => {
  return (
    <center className='welcome-message'>
      <h1 >There are no posts</h1>
      {/* <button type="button" className="btn btn-primary" onClick={onGetPostList}>Get Posts From Server</button> */}
    </center>
  )
}

export default WelcomMeassage

