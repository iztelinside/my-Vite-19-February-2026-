import { useState, useEffect } from "react"
import UserList from "./components/UserList/UserList.jsx"
import SelectedUserCard from "./components/SelectedUserCard/SelectedUserCard.jsx"

function App() {
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const createUser = () => {
        if (!newName.trim() || !newEmail.trim()) return
        const newUser = {
            id: Date.now(),
            name: newName,
            email: newEmail
        }


        setUsers(prev => [...prev, newUser])
            setNewName("")
            setNewEmail("")
    }


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
            })
    }, [])
    // const createUser = () => {
    //     if (!newName.trim() || !newEmail.trim()) return
    //
    //     const newUser = {
    //         id: Date.now(),
    //         name: newName,
    //         email: newEmail
    //     }
    //
    //     setUsers(prev => [...prev, newUser])
    //     setNewName("")
    //     setNewEmail("")
    // }

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
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
            />
            <input
                type="text"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
            />
            <button onClick={createUser}>Add</button>
        </div>
    )
}

export default App

