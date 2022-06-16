import React, {useReducer} from 'react';

export default ({defaultValue, action, reducer}) => {
  /* Create context */
  const Context = React.createContext();

  /* Create Provider with global state values */
  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};

    for (let key in action) {
      boundActions[key] = action[key](dispatch);
    }

    return (
      <Context.Provider value={{state, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };

  return {Context: Context, Provider: Provider};
};
