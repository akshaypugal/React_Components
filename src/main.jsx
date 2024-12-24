import React from "react";
import ReactDom from 'react-dom/client';
import App from "./App";
import ComponentA from "./ComponentA";




const rootElement = document.getElementById('root');


if(rootElement){
   
    const root = ReactDom.createRoot(rootElement);
    root.render(
        <React.StrictMode>
          <App/>
        </React.StrictMode>
    )
}