import React, { useReducer, createContext, useContext} from 'react'
import {reducer, initialState } from './styled'

export const ConnectionsContext= createContext()
export const useConnectionsContext=()=> useContext(ConnectionsContext)
export const ConnectionsProvider = ({children}) => {
    const [state, dispatch]=useReducer(reducer, initialState)
    return (
        <ConnectionsContext.Provider value={[state, dispatch]}>
            {children}
        </ConnectionsContext.Provider>
    )
}
export default ConnectionsProvider;
