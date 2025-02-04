import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'; 

// debemos de vincular dos cosas de redux 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)