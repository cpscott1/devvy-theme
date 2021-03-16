import { useContext, useEffect } from 'react'
import { Box, Icon, Grid, Image, Text, Badge, Button } from '@chakra-ui/react'
import { Link, Switch, Route } from 'react-router-dom'
import { ShopContext } from './context/shopContext'
import { MdShoppingBasket, BsSearch } from 'react-icons'
import './App.css'
import './navbar.css'
import topimage from './images/top-image5.jpg'
import bottomimage from './images/top-image3.jpg'
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
          <Text className="logo" fontSize="4xl" marginRight="2rem">Devvy</Text>
          <Link to="#"><a className="links">NIKE</a></Link>
          <Link to="#"><a className="links">JORDAN</a></Link>
          <Link to="#"><a className="links">YEEZY</a></Link>
        </Box>
        <Box><Text>Search</Text></Box>
      </Grid>
      <Box className="image-container" w="100%" h="30rem" position="relative">
        <Image src={topimage}  m="auto" objectFit="contain" />
        <Box className="border" textAlign="center"
        position="absolute"
        color="white"
        left="27%"
        bottom="10vh"
        fontWeight="bold"
        fontSize="4rem"
        >
          <Text className="hero-text">Air Jordan</Text>
          <Button className="hero-button">Shop Now</Button>
        </Box>
      </Box>
      <Box w="100%" position="relative" h="30rem">
        <Image src={bottomimage}  m="auto" objectFit="contain" />
        <Box className="border" textAlign="center"
        position="absolute"
        left="27%"
        bottom="60%"
        color="white"
        fontWeight="bold"
        fontSize="4rem"
        >
        <Text className="hero-text">Yeezy Season</Text>
        <Button className="hero-button">Shop Now</Button>
        </Box>
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
