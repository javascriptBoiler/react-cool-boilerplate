import React from 'react';

const initialState = { test: 1 }
export const GlobalContext: any = React.createContext(initialState);

const GlobalContextProvider = ({ children }: any) => {

  const [state, dispatch] = React.useReducer((state:any, action:any) => {
    switch (action.type) {
      case 'temp':
        return { ...state, test: state.test + 1 }
      default:
        return initialState;
    };
  }, initialState);

  return <GlobalContext.Provider value={{state, dispatch}}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;