import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';

// Get the root element for App component
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}

// Get the root element for Notifications component
const notificationsRootElement = document.getElementById('root-notifications');
if (notificationsRootElement) {
  const notificationsRoot = ReactDOM.createRoot(notificationsRootElement);
  notificationsRoot.render(
    <React.StrictMode>
      <Notifications />
    </React.StrictMode>
  );
} else {
  console.error('Notifications root element not found');
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
