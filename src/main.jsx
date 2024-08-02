import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { store } from './redux/store.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <PayPalScriptProvider
					options={{
						"client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
					}}> */}

        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
        {/* </PayPalScriptProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
