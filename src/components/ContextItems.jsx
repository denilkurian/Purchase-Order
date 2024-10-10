import React, { createContext, useState } from 'react';


// For Passing Product Items
export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [submittedItems, setSubmittedItems] = useState([]);

  return (
    <ItemsContext.Provider value={{ submittedItems, setSubmittedItems }}>
      {children}
    </ItemsContext.Provider>
  );
};


// For Passing POPUP(Modal) 
export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({ itemsdisplay: true,
    formdisplay: false,})

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
}