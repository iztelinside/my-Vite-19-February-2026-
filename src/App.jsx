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

