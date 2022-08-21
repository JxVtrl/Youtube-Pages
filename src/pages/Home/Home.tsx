import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Spacing } from '../../components'
import { Header, Main } from '../../sections'

export function Home() {
  return (
    <Flex
      width='100%'
      flexDir='column'
      
    >
      <Header />
      <Spacing style={{ height: '20px'}} />
      <Main />
    </Flex>
  )
}
