import './App.css'
import { useFetch } from './useFetch'

function App() {

  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  )

  console.log(data); 

  return (
    <>
      <h1>Uso del Fetch</h1>
      <ul>
        {loading && <li>loading...</li>}
        { data?.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default App
