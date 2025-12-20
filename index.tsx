import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Safe environment variable handling for browser context
// Added type assertion to window to fix 'Property process does not exist on type Window' error
if (typeof window !== 'undefined' && !(window as any).process) {
  (window as any).process = { env: {} };
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);