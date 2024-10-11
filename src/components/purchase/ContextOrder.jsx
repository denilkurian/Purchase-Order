import React, { createContext, useState } from 'react'

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [allitems, setAllitem] = useState([])
    const [total, setTotal] = useState(0)

    return (
        <OrderContext.Provider value={{ allitems, setAllitem, total, setTotal }}>
            {children}
        </OrderContext.Provider>
    );
};


