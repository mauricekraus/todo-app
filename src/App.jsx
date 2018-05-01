import React from 'react';
import { Provider } from 'react-redux';
import { Typography } from 'material-ui';
import configureStore from './store/configureStore';
import List from './components/List';
import './App.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div className="app-container">
      <Typography variant="display1">Todos</Typography>
      <List />
    </div>
  </Provider>
);

export default App;
