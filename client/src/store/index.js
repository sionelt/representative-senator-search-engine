import React, { createContext, useContext, useReducer } from 'react'

const StateContext = createContext()

const initialState = {
  congressList: [],
  fetching: true,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CONGRESS_LIST':
      return { ...state, congressList: action.congressList }
    case 'FETCHING_STATE':
      return { ...state, fetching: action.fetching }
    default:
      return state
  }
}

export const StateProvider = ({ children }) => <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>

export const Store = () => useContext(StateContext)
