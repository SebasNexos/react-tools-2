import React from "react";
import ReactDOM from 'react-dom/client'; 
 
import { CounterApp } from "./CounterApp";

import './style.css'

// Renderizar el código que tengo arriba 

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>

        <CounterApp value={0}/> 

    </React.StrictMode>
)

// title="Hola, soy nadie" subTitle = { 123 }
