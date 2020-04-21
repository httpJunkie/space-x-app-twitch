import React, { useState, createContext } from 'react';
import { useMediaPredicate } from 'react-media-hook'

const AppContext = createContext();

const AppProvider = props => {
  const [appData, setApp] = useState({
    navOpen: false,
    toggleSidenav: value => setApp(data => (
      { ...data, navOpen: value }
    ))
  });
  
  return <AppContext.Provider value={appData}>{props.children}</AppContext.Provider>
}

export { AppContext, AppProvider };
