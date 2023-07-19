import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/common.css'
import './assets/css/reset.css'
import store from './store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
  <Suspense fallback={<div>loading</div> }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
  </Provider>
);


