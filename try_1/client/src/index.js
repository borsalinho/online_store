import React, {createContext} from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import ProductStore from './store/productStore';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider 
    value={{
      product: new ProductStore()
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root')
);


