import React from 'react'
import { categoriesList } from '../../data'
import { Flex } from '@chakra-ui/react'

export function MainHeader() {
  return (
      <Flex flexShrink='0' w='100%' flexDir='column'>
          <hr />
          <Flex
            justify='center'
            overflow='scroll'
            overflowY='hidden'
            className='scrollbar'
          >
            {categoriesList.categories.map(
                (item: any, index: number) => (
                    <Flex
                        key={index}
                        flexShrink='0'
                        margin='10px'
                        padding='3px 12px'
                        _hover={{ bgColor: "#ddd" }}
                        borderRadius='20px'
                        cursor='pointer'
                        border='1px solid #AAA'
                        bgColor="#eee"
                    >
                        {item.name}
                    </Flex>
                )
            )}
          </Flex>
          <hr />
      </Flex>
  )
}
