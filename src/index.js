import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/web/css/bootstrap.min.css'
import './layout/web/style.css'
import './layout/web/css/font-awesome.min.css'
import './layout/web/css/owl.carousel.css'
import './layout/web/css/responsive.css'
import './layout/adm/vendor/fontawesome-free/css/all.min.css'
import './layout/adm/css/sb-admin-2.min.css'







ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
