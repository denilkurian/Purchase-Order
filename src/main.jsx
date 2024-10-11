import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ItemsProvider, ModalProvider } from './components/ContextItems.jsx'
import { OrderProvider } from './components/purchase/ContextOrder.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ItemsProvider>
      <ModalProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </ModalProvider>
    </ItemsProvider>
  </StrictMode>,
)


