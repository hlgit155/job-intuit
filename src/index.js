import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*----- CSS -----*/
import './index.css';

/*----- Pages Components -----*/
import App from 'App';
import Main from 'Pages/Main.jsx';
import Store from 'Pages/Store.jsx';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Main />} />
        <Route path="/store" element={<Store />} />
        {/* <Route path="/" element={<App />} /> */}

      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
