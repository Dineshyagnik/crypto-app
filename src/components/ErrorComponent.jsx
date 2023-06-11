import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({message}) => {
  return (
    // <div style={{color:'red'}}>{message}</div>
    <Alert 
    status='error' 
    position={'fixed'} 
    bottom={'4'} 
    left={'50%'}
    transform={'translateX(-50%)'}
    w={'lg'}
    >
      <AlertIcon/>
      {message}
    </Alert>
  )
}

export default ErrorComponent