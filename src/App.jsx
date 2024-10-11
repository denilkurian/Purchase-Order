import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MasterForm } from './components/MasterForm'
import { ListItems } from './components/ListItems'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PurchaseOrder } from './components/purchase/PurchaseOrder'
import { OrderList } from './components/purchase/OrderList'



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PurchaseOrder />} />
          <Route path="/create-item" element={<MasterForm />} />
          <Route path='/order' element={<OrderList/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
