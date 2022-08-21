import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { Aside } from '../components'
import { Footer } from '../sections'
import { useDevice } from '../hooks'

export function Layout({ children }: any) {
  const { device: { isMobile }} = useDevice()
  return (
    <Flex>
      <Aside />
      {children}
      {isMobile && <Footer />}
    </Flex>
  )
}
