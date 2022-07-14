import { useState } from 'react'
import './App.css'

//for chakra-ui
import { Box } from '@chakra-ui/react'

//import components
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box className="App" bg='#f5f5f5'>
      <Header/>
      <div>
        Hola mundo
      </div>
    </Box>
  )
}

export default App
