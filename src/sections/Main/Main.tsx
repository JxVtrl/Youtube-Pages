import { useEffect, useState } from 'react'
import { Image, Flex, Grid } from "@chakra-ui/react";
import { Card } from '../../components'
import { getQueryPhotos } from '../../services/getQueryPhotos';

export const Main = () => {
  const [photos, setPhotos] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => { 
      setPhotos(await getQueryPhotos())
    }

    fetchData()
  }, [])
  
  useEffect(() => {
    console.log(photos)
  }, [photos])
  

    return (
      <Flex flexWrap="wrap" m="0 16px" justifyContent="space-around">
        {photos?.map((item: any, index: number) => (
          <Flex key={index}>
            <Card item={item} />
          </Flex>
        ))}
      </Flex>
    );
};
