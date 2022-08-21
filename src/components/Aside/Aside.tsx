import React, { useState } from 'react'
import { BtnLogin } from "../../components/Button";
import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  useBoolean,
  Image,
  Text
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import { menuItems } from '../../data';

export function Aside() {
  const [isOpen, setIsOpen] = useBoolean()
  
    return (
      <>
        <Flex
          p="10px"
          gap="20px"
          flexDir="column"
          align="center"
          justify="center"
          h="100%"
          w={isOpen ? "10%" : ""}
          borderRight={isOpen ? "1px solid #CCC" : ""}
          overflowY={isOpen ? 'visible' : 'hidden'}
          transition='all 0.5s normal'
          
        >
          <HamburgerIcon
            alignSelf={isOpen ? "flex-start" : "center"}
            ml={isOpen ? '10px' : '0'}
            w="20px"
            boxSize="1.8em"
            cursor="pointer"
            h="20px"
            onClick={() => setIsOpen.toggle()}
          />
          <Flex
            flexDir="column"
            h="100%"
            w="100%"
            align="flex-start"
            mt="10px"
            gap={isOpen ? "5px" : "30px"}
          >
            {menuItems.items.map((item: any, index: number) => (
              <Flex
                _hover={{ bgColor: "#CCC" }}
                key={index}
                p={isOpen ? "10px" : "8px"}
                gap={isOpen ? "20px" : ""}
                cursor="pointer"
                w="100%"
                h="100%"
                alignItems="center"
                flexDir={isOpen ? "row" : "column"}
              >
                <i className={item.class} />
                <Text
                  align="center"
                  mt={isOpen ? "0" : "15px"}
                  justifyContent="center"
                  fontSize={isOpen ? "13px" : "11px "}
                >
                  {item.name}
                </Text>
              </Flex>
            ))}
            <Flex flexDir='column' mt="15px">
              {isOpen && <BtnLogin text="fazer login" />}
              {isOpen && (
                <Text mb='5px' mt='10px' fontSize='14px' textAlign='center'>
                  Faça login para curtir vídeos, comentar e se inscrever.
                </Text>
              )}
              <hr/>
            </Flex>
          </Flex>
        </Flex>
      </>
    );
    
}