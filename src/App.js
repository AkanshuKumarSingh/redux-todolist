import React, { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Inputarea from './Component/Inputarea';
import Todo from './Component/Todo';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo></Todo>
      </div>
    </Provider>

  );
}

export default App;
