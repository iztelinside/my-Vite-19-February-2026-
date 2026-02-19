import './App.css';
import { useState } from "react";
import Header from "./components/Header/Header.jsx";

function App() {
    const [users, setUsers] = useState([
        {id: 1, name: "Dan"},
        {id: 2, name: "Alex"}
    ])

    const [newUser, setNewUser] = useState("")
    // const [name, setName] = useState("")
    // const [count, setCount] = useState(0)
    const addUser = () => {
        const newItem = {
            id: Date.now(),
            name: newUser
        }


        setUsers([...users, newItem])
        setNewUser("")
}
    const deleteUser = (id) => {
        const filteredUsers = users.filter(user => user.id !== id)
        setUsers(filteredUsers)
    }

      return(
          <>
          <div>
            <h1>User List</h1>

            <input
              type="text"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
            />
           <button onClick={addUser}>Add</button>
           {/*<button onClick={deleteUser}>Delete</button>*/}



           <ul>
              {users.map((user) => (
               <li key={user.id}>

                  {user.name}
                   {/*<button onClick={() => addUser(user.id)}>*/}
                   {/*    Add*/}
                   {/*</button>*/}
                   <button onClick={() => deleteUser(user.id)}>
                       Delete
                   </button>

               </li>
           ))}
          </ul>
                  {/*<input*/}
                  {/*    type="text"*/}
                  {/*    value={name}*/}
                  {/*    onChange={(e) => setName(e.target.value)}*/}
                  {/*/>*/}

                  {/*<h1>Hello, {name}</h1>*/}




                  {/*<h2>Counter: {count}</h2>*/}
                  {/*<button onClick={() => setCount(count + 1)}>+</button>*/}
                  {/*<button onClick={() => setCount(count - 1)}>-</button>*/}
                  {/*<button onClick={() => setName("")}>Clear</button>*/}
          </div>
          </>
          // <>
          //     <div className={"header"}>
          //         <div className={"header__title"}>
          //             <Header/>
          //             <h1>Try Programmer</h1>
          //         </div>
          //         <div className={"header__counter"}>
          //             <h1 className={"header__counter_main"}>Counter: <div className={"header__counter_title"}>{count}</div></h1>
          //                 <button onClick={() => setCount(count + 1)}>
          //                     +
          //                 </button>
          //                 <button onClick={() => setCount(count - 1)}>
          //                     -
          //                 </button>
          //                 <button onClick={() => setCount(count * 2)}>
          //                     x
          //                 </button>
          //                 <button onClick={() => setCount(count / 2)}>
          //                     /
          //                 </button>
          //                 <button onClick={() => setCount(count * 0)}>
          //                     0
          //                 </button>
          //         </div>
          //
          //
          //
          //     </div>
          //
          //         {/*<div id={"header_counter"}>*/}
          //
          //         {/*</div>*/}
          // </>

          )
}

export default App
