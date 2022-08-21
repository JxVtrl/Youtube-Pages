import React from 'react'
import { Button as Btn, Flex } from '@chakra-ui/react'
import { SearchIcon, SettingsIcon, PhoneIcon as PhoneIcn } from "@chakra-ui/icons";

export function BtnSearch() {
  return (
    <Btn p="5px" _hover={{bgColor:"#fff"}} bgColor="#fff" w="60px">
      <SearchIcon/>
    </Btn>
  );
}

export function PhoneIcon() {
  return (
    <Flex>
    <Btn
      p='5px'
      position='relative'
      _hover={{bgColor:'#ccc'}} 
      ml='-40px'
      bgColor='transparent'
    >
      <PhoneIcn/>
      </Btn>
      </Flex>
  );
}

export function BtnLogin({text}: any) {
  
  return (
    <Btn
      bgColor="#fff"
      fontSize='15px'
      margin='0 16px'
      _hover={{ bgColor: '#fff' }}
      borderRadius='none' border='1px solid blue' justifyContent="center" alignItems='center' color='blue'>
      {text.toUpperCase()}
    </Btn>
  )
}

export function ConfigBtn({ setIsOpen, isOpen }: any) {
  return (
    <Btn
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      position="fixed"
      right="165px"
      top='10px'
      _hover={{ bgColor: "#fff" }}
    >
    </Btn>
  );
}