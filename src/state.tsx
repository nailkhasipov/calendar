import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext({});

type StateProviderProps = {
  reducer: any;
  initialState: any;
  children: any;
};

export const StateProvider = (props: StateProviderProps) => (
  <StateContext.Provider value={useReducer(props.reducer, props.initialState)}>
    {props.children}
  </StateContext.Provider>
);
