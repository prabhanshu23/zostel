import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SummaryProvider } from './components/context/SummaryContext';
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SummaryProvider>
        <App />
      </SummaryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

