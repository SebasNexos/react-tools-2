import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import { MainApp } from './09-useContext/MainApp';
import { BrowserRouter } from 'react-router-dom';
//import { Padre } from './07-tarea-memo/Padre';
//import './08-useReducer/intro-reducer'



//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Memorize } from './06-memos/Memorize';
//import { MemoHook } from './06-memos/MemoHook';
//import { CallbackHook } from './06-memos/CallbackHook';
//import {FormWithCustomHook} from './02-useEffect/FormWithCustomHook.jsx'
//import { CounterApp } from './01-useState/CounterApp';
//import { TodoApp } from './08-useReducer/TodoApp';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <MainApp />
    </StrictMode>
  </BrowserRouter>
)
