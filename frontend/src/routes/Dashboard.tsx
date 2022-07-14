import './Dashboard.css'

import {
  Box,
  Flex,
  Container,
  Grid,
  GridItem,
  Center,
  VStack
}from '@chakra-ui/react'

import {
  FaHome,
  FaRocket,
  FaUsers,
  FaUser,
  FaSignOutAlt
} from 'react-icons/fa'

function Admin () {
  return (
    <Grid 
      className='Dashboard' 
      bg='#edf1fa'
      templateColumns='repeat(12, 1fr)'
    >
      <GridItem
        colSpan={3}
        borderRadius={15}
        /* bg='white' */ m={5} p={3}
      >
        <VStack
          align='stretch'
        >
          <Center 
            className='Logo-container'
            mb={5}
          >
            <h1>WAQYA</h1>
          </Center>
          
          <Box
            className='Navbar-item'
            boxShadow='base'
          >
            <Flex>
              <FaHome 
                size='20px'
                color='#3730f2'
              /> 
              <p className='Navbar-item-caption'>Main Dashboard</p>
            </Flex>
          </Box>

          <Box
            className='Navbar-item'
            boxShadow='base'
          >
            <Flex>
              <FaRocket 
                size='20px'
                color='#3730f2'
              /> 
              <p className='Navbar-item-caption'>Eventos</p>
            </Flex>
          </Box>

          <Box
            className='Navbar-item'
            boxShadow='base'
          >
            <Flex>
              <FaUsers 
                size='20px'
                color='#3730f2'
              /> 
              <p className='Navbar-item-caption'>Usuarios</p>
            </Flex>
          </Box>

          <Box
            className='Navbar-item'
            boxShadow='base'
          >
            <Flex>
              <FaUser 
                size='20px'
                color='#3730f2'
              /> 
              <p className='Navbar-item-caption'>Perfil</p>
            </Flex>
          </Box>

          <Box
            className='Navbar-item'
            boxShadow='base'
          >
            <Flex>
              <FaSignOutAlt 
                size='20px'
                color='#3730f2'
              /> 
              <p className='Navbar-item-caption'>Salir</p>
            </Flex>
            
          </Box>

        </VStack>
      </GridItem>


      <GridItem
        colSpan={9}
        borderRadius={15}
        bg='white' p={3}
        mt={5} mb={5} mr={5}
      >
        Mundo
      </GridItem>
    </Grid>
  )
}

export default Admin