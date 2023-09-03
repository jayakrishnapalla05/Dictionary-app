
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { Provider } from 'react-redux'; // Import Provider
import store from './Store'; // Import your Redux store
import App from './App';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

// Wrap your App component with Provider and render it using createRoot
reactRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
