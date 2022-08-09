import React from 'react';
import ReactDOM from 'react-dom/client';
import ContextConsumer from './components/functions/ContextConsumer';
import SimpleContext from './components/functions/SimpleContext';
import './index.css';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleContext>
      <ContextConsumer name="jedan">
        <ContextConsumer name="dva">
          <ContextConsumer name="tri">

          </ContextConsumer>
        </ContextConsumer>
      </ContextConsumer>
    </SimpleContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
