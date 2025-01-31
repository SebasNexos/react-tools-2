
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementBy } from './store/slices/counter';

function App() {

  // Como seleccionar algo del useSelector 

  const { counter } = useSelector(state => state.counter)

  // despachar la acción 

  const dispatch = useDispatch(); 

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <p>count is { counter }</p>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={ () => dispatch(increment()) }>
          Increment 
        </button>
        <button onClick={ () => dispatch(decrement()) }>
          Decrement 
        </button>
        <button onClick={ () => dispatch(incrementBy(2)) }>
          Increment by 2  
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
