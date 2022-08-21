import React from 'react'
import { Input, Flex } from '@chakra-ui/react'

export function SearchInput({ placeholder, width }: any) {
    return (
        <Input
          placeholder={placeholder}
          w={width}
        ></Input>
    );
}
