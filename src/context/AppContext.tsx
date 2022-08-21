import { useBoolean } from '@chakra-ui/react'
import React, { createContext, useContext, useEffect, useState, useRef } from 'react'

const AppContext = createContext({})

export function AppProvider({ children }: any) {
    const [load, setLoad] = useBoolean()
    const [error, setError] = useState<string | undefined>(undefined)
   




    const value = {
        load,
        setLoad,
        error,
        setError
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext)
}
