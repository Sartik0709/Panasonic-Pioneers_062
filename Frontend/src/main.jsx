import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import { Provider } from 'react-redux';
<<<<<<< HEAD
import store from './redux/store.js';
import { EmailProvider } from './contexApi/EmailPRovider.jsx';
=======
import { store } from './redux/store.js';

>>>>>>> d79d50ebc846298ee69fd8ef9dc9680e6cb38845

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChakraProvider>
         <BrowserRouter>
            <Provider store={store}>
              <EmailProvider>
                <App />
              </EmailProvider>
             </Provider>
          </BrowserRouter>   
      </ChakraProvider>    
  </React.StrictMode>,
)
