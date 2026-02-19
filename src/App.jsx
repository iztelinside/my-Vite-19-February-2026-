import './App.css';
import { useState } from "react";
import Header from "./components/Header/Header.jsx";

function App() {
    const [count, setCount] = useState(0)
      return(
          <div>
            <h1>Try Programmer</h1>
            <Header/>
            <h1>Try Programmer</h1>

          </div>
          )
}

export default App
