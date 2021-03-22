import { useEffect, useContext } from 'react';
import { ShopContext } from '../context/shopContext'
import {Flex, Grid, Box, Text, Image } from '@chakra-ui/react'
import '../releases.css'

const NewRelease = () => {

const { newCollection } = useContext(ShopContext)

console.log(newCollection)

  return (
    <Box>
    <Flex className="new-release" alignItems="center">
      <Text className="new-header">new</Text>
      <Box className="dotted"></Box>
    </Flex>
    <Grid className="shoe-grid" templateColumns="repeat(2, 1fr)">
      {
        newCollection.map(collection => {
          return (
            <Box>
              <Box className="collection-image-container">
                <Image src={collection.images[0].src} />
              </Box>
              <Text className="collection-title">{collection.title}</Text>
              <Text className="collection-price">{collection.variants[0].price}</Text>
            </Box>
          )
        })
      }
    </Grid>
    </Box>
  )
}

export default NewRelease
