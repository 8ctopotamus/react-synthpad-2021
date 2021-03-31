import React, { createContext, useReducer, useContext } from 'react'
import scales from '../utils/scales'

const defaultContext = {
  ...scales.light,
  volume: 0,
}

const AppContext = createContext(defaultContext)

const reducer = (state, action) => {
  switch(action.type) {
    case 'CHANGE_SCALE':
      return {
        ...state,
        ...scales[action.payload]
      }
    case 'CHANGE_VOLUME':
      return {
        ...state,
        volume: action.payload
      }
  }
  return state
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultContext)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => useContext(AppContext)

export { AppProvider, useAppContext }