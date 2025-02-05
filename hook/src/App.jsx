import { ContadorMejorado } from "./components/ContadorMejorado";
import { NewContador } from "./components/NewContador";


export const App = () => {
  return (
    <>
      <h1>useReducer</h1>
      <ContadorMejorado /> 
      <hr />
      <NewContador /> 
      <hr />
    </>
  );
}
