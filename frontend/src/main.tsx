import React from 'react'
import { ChakraProvider } from '@chakra-ui/react' 
import ReactDOM from 'react-dom/client'
import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom'

import App from './App'
import Dashboard from './routes/Dashboard'
import Login from './routes/Login'
import Signup from './routes/Signup'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/admin/dashboard' element={<Dashboard/>}/>
          <Route path='/signup/' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
