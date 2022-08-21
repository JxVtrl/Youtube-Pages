import React from 'react'
import { Flex, Image, Box, Text, Avatar } from '@chakra-ui/react'
import { formatDate } from '../../helpers'

export function Card({ item }: any) {
    console.log(item)
    return (
        <>
            {item?.id && (
                <Flex
                    cursor='pointer'
                    flexDir='column'
                    m='0 8px 40px'
                    w='275px'
                    h='268px'
                >
                    <Box w='100%' h='180px' overflow='hidden'>
                        <Image objectFit='cover' w='100%' h='100%' key={item?.id} src={item?.preview_photos[0].urls.thumb} />
                    </Box>
                    <Flex>
                        <a href="#" style={{ margin: "12px 12px 0 0"}}>
                            <Avatar
                                name={item?.user.username}
                                src={item?.user.profile_image.small}
                            />
                        </a>
                        <Flex flexDir='column' overflow='hidden' h='100%' w='100%' pr='24px'>
                            <Flex
                                w='100%'
                                h='50px'
                                margin='12px 0 6px'
                                overflow='hidden'
                                word-wrap='normal'
                                textOverflow='ellipsis'
                            >
                                <Text
                                    fontFamily='Roboto'
                                    fontSize='20px'
                                    lineHeight='25px'
                                    fontWeight='500'
                                    textOverflow='ellipsis'
                                    wordBreak='break-word'
        
                                >
                                    {item?.title || 'No description'}
                                </Text>
                            </Flex>
                            <Text>
                                {item?.user.username}
                            </Text>
                            <Flex flexDir='row'>
                                <Text>
                                    {formatDate(item?.published_at)}
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>  
                </Flex>
            )}
        </>
  )
}
