import { useContext, useEffect } from 'react'
import { Box, Icon, Grid, Image, Text, Badge } from '@chakra-ui/react'
import { Link, Switch, Route } from 'react-router-dom'
import { ShopContext } from './context/shopContext'
import { MdShoppingBasket, BsSearch } from 'react-icons'
import './navbar.css'
import topimage from './images/top-image.jpg'
import bottomimage from './images/top-image2.jpg'
function App() {

  const { fetchAllCollections, fetchCollection, products } = useContext(ShopContext)

  useEffect(() => {
    fetchCollection()
  }, [])

  return (
    <div className="App">
      <Grid templateColumns="repeat(3, 1fr)" textAlign="center">
        <Box></Box>
        <Box>
          <Text fontSize="4xl" marginRight="2rem">Devvy</Text>
          <Link to="#"><a className="links">NIKE</a></Link>
          <Link to="#"><a className="links">JORDAN</a></Link>
          <Link to="#"><a className="links">YEEZY</a></Link>
        </Box>
        <Box><Text>Search</Text></Box>
      </Grid>
      <Box w="100%" position="relative" h="27vw">
        <Image src={topimage} h="25vw" m="auto" objectFit="contain" />
        <Text
          position="absolute"
          color="black"
          left="25vw"
          bottom="10vh"
          fontWeight="bold"
          fontSize="4rem"
        >Air Jordan</Text>
      </Box>
      <Box w="100%" position="relative" h="27vw">
        <Image src={bottomimage} h="25vw" m="auto" objectFit="contain" />
        <Text
          position="absolute"
          left="25vw"
          bottom="45vh"
          color="white"
          fontWeight="bold"
          fontSize="4rem"
        >Yeezy Season</Text>
      </Box>
      <Box>

      </Box>
      <Switch>
        <Route path="/" exact>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
