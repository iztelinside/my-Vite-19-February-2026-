import { useState, useEffect } from "react"
import UserList from "./components/UserList"
import SelectedUserCard from "./components/SelectedUserCard"

function App() {
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
            })
    }, [])

    const deleteUser = (id) => {
        setUsers(prev => prev.filter(user => user.id !== id))

        if (selectedUser?.id === id) {
            setSelectedUser(null)
        }
    }

    const selectUser = (user) => {
        setSelectedUser(user)
    }

    if (loading) return <h2>Loading...</h2>

    return (
        <div>
            <h1>User Manager</h1>

            <SelectedUserCard user={selectedUser} />

            <UserList
                users={users}
                onDelete={deleteUser}
                onSelect={selectUser}
            />
        </div>
    )
}

export default App
// import './App.css';
// import { useState } from "react";
// import Header from "./components/Header/Header.jsx";
//
// function App() {
//     const [users, setUsers] = useState([
//         {id: 1, name: "Dan"},
//         {id: 2, name: "Alex"}
//     ])
//
//     const [newUser, setNewUser] = useState("")
//     // const [name, setName] = useState("")
//     // const [count, setCount] = useState(0)
//     const addUser = () => {
//         const newItem = {
//             id: Date.now(),
//             name: newUser
//         }
//
//
//         setUsers([...users, newItem])
//         setNewUser("")
// }
    // const deleteUser = (id) => {
    //     const filteredUsers = users.filter(user => user.id !== id)
    //     setUsers(filteredUsers)
    // }
    //
    //   return(
    //       <>
    //       <div>
    //         <h1>User List</h1>
    //
    //         <input
    //           type="text"
    //           value={newUser}
    //           onChange={(e) => setNewUser(e.target.value)}
    //         />
    //        <button onClick={addUser}>Add</button>
    //        {/*<button onClick={deleteUser}>Delete</button>*/}
    //
    //
    //
    //        <ul>
    //           {users.map((user) => (
    //            <li key={user.id}>
    //
    //               {user.name}
    //                {/*<button onClick={() => addUser(user.id)}>*/}
    //                {/*    Add*/}
    //                {/*</button>*/}
    //                <button onClick={() => deleteUser(user.id)}>
    //                    Delete
    //                </button>
    //
    //            </li>
    //        ))}
    //       </ul>
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
{/*          </div>*/}
{/*          </>*/}


{/*          )*/}
{/*}*/}

{/*export default App*/}
