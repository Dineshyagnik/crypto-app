import React from 'react'

const ErrorComponent = ({message}) => {
  return (
    <div style={{color:'red'}}>{message}</div>
  )
}

export default ErrorComponent