import { 
  Box,
  Flex,
  Center,
  Grid, GridItem, SimpleGrid,
  Container,
  Text,
  HStack,
  VStack,
  InputGroup,
  InputLeftElement,
  Stack,
  Input,
  InputRightElement
} from "@chakra-ui/react";

import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiTwotoneMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';

import './Signup.css'

function Signup() {
  return (
    <Container
      maxW='container.lg'
    >
      <SimpleGrid columns={2} spacing={8}>
        <Box
          className='Welcome-container'
          p='20px' w='100%'
        >
          <Text
            fontSize='6xl'
            color='white'
            fontWeight='bold'
          >
            Bienvenido a
          </Text>
          <Text
            fontSize='6xl'
            color='blue.700'
            fontWeight={'bold'}
          >
            Waqya
          </Text>
        </Box>
        
        {/** Form section */}
        <Box
          w='100%'
          p='20px'
        >
          <VStack
            pb='20px'
            borderBottom={'1px solid #171923'}
          >
            <Box>
              <Text
                fontSize='2xl'
              >
                Registrarse con
              </Text>
            </Box>
            <Box>
            <HStack>
              <FaFacebook size='35px'/>
              <FcGoogle size='35px'/>
              <FaGithub size='35px'/>
            </HStack>
           </Box>
          </VStack>

          <Stack spacing={4}
            mt='20px'
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<AiTwotoneMail color='gray.300' />}
              />
              <Input size='lg' type='email' placeholder='Correo' />
            </InputGroup>

            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                fontSize='1.2em'
                children={<RiLockPasswordFill/>}
              />
              <Input size='lg' placeholder='Enter amount' />
              <InputRightElement children={<RiLockPasswordFill color='green.500' />} />
            </InputGroup>
          </Stack>
          
        </Box>
      </SimpleGrid>
    </Container>
  )
}

export default Signup;
