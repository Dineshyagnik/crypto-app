import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from '../index'
import { Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';
const Exchanges = () => {

  const [exchanges,setExchanges]=useState([]);
  const [loader,setLoader] = useState(true);

  useEffect(() => {
    const fetchExchanges = async () => {
      const data = await axios.get(`${server}/exchanges`);
      console.log(data);
      setExchanges(data.data)
      setLoader(false)
    }
    fetchExchanges()

  }, []);
  return (
    <Container maxW={'container.xl'} >
      {
        loader ? <Loader/>:(
          <>
          <HStack wrap={'wrap'}>
            {
              exchanges.map((i)=>(
                <div>{i.name}</div>
              ))
            }
          </HStack>
          </>
        )
      }
    </Container>
  )
}

export default Exchanges