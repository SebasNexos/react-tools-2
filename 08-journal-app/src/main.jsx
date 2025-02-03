import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { JournalApp } from './JournalApp';
import { store } from './store';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalApp/>
      </BrowserRouter> 
    </Provider>
  </StrictMode>,
)

