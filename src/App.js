import React from 'react';
import { Provider } from 'react-redux';

import store from './store.js'
import './App.css';
import Counter from './counter';

function App () {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
export default App;