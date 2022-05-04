import React from 'react';
import ReactDOM from 'react-dom/client';
import One from './Components/One';
import Two from './Components/Two';
// import Three from  '../comps/three';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <One />
    <Two />
    <App />
    {/* <Three /> */}
    {/* Module not found: Error: You attempted to import ../comps/three which falls outside of the project src/ directory. Relative imports outside of src/ are not supported. */}
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
