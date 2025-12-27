import {useDispatch,useSelector} from 'react-redux'

import {increment,decrement,reset} from './redux/counterSlice'
import './App.css'

function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()


  return ( 
    <>  
      <h1>
        Redux Counter App
      </h1>
      <div>
        <h2>Count:{count}</h2>
        <div>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
          <button onClick={() => dispatch(increment())}>+</button>
          
        </div>
      </div>
    </>
  )
}

export default App