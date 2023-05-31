import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './component/CoffeeCard'

function App() {
  const coffees = useLoaderData()
  return (
    <  div className='ms-20 me-20 mt-20'>

      <h1 className='text-4xl text-purple-500 text-center mb-20'>Hot Hot Cold Coffee!!!!</h1>

      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>)
        }

      </div>
    </div>
  )
}

export default App
