import './App.css';
import { useState } from "react";
import Header from "./components/Header/Header.jsx";

function App() {
    const [count, setCount] = useState(0)
      return(
          <>
              <div>
                  <h1>Try Programmer</h1>
                  <Header/>
                  <h1>Try Programmer</h1>
                  <div>
                      <h1>Counter: {count}</h1>
                      <button onClick={() => setCount(count + 1)}>
                          +
                      </button>
                      <button onClick={() => setCount(count - 1)}>
                          -
                      </button>
                      <button onClick={() => setCount(count * 2)}>
                          x
                      </button>
                  </div>

              </div>
          </>

          )
}

export default App
