import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AppRoutes } from './routes'
import { AppProvider } from './context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </ChakraProvider>
  </React.StrictMode>
)
