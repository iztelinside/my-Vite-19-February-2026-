import { useState, useEffect } from "react";
import UserList from "./components/UserList/UserList.jsx";
import SelectedUserCard from "./components/SelectedUserCard/SelectedUserCard.jsx";

function App() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // TODO 1: useEffect для загрузки данных с API
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          // .then(...)
          .catch(err => setError(err))
          .finally(() => setLoading(false))
    }, []);

    // TODO 2: useEffect для отслеживания изменений users
    useEffect(() => {
        console.log("Users changed", users)
    }, [users]);

    // TODO 3: useEffect для отслеживания поиска
    useEffect(() => {
        console.log("Search term changed", search)
    }, [search]);

    // TODO 4: Добавление нового пользователя
    const addUser = () => {
        if (!newName || !newEmail) return
        const newUser = { id: Date.now(), name: newName, email: newEmail }
        setUsers([...users, newUser])
        // очистка newName и newEmail
    };

    // TODO 5: Удаление пользователя
    const deleteUser = (id) => {
        setUsers(users.filter(u => u.id !== id))
        // если удаляем выбранного → setSelectedUser(null)
    };

    // TODO 6: Выбор пользователя
    const selectUser = (user) => {
        setSelectedUser(user)
    };

    // TODO 7: Сортировка пользователей по имени
    const sortUsers = () => {
        setUsers([...users].sort((a,b) => a.name.localeCompare(b.name)))
    };

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error loading users</h2>;

    // TODO 8: Фильтрация пользователей по search
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>Mini User Manager — Day 2 Extended</h1>

            {/* Добавление пользователя */}
            <div style={{ marginBottom: "20px" }}>
                <input
                    placeholder="Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <input
                    placeholder="Email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                />
                <button onClick={addUser}>Add User</button>
            </div>

            {/* Поиск и сортировка */}
            <div style={{ marginBottom: "20px" }}>
                <input
                    placeholder="Search by name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={sortUsers}>Sort by Name</button>
            </div>

            {/* Выбранный пользователь */}
            <SelectedUserCard user={selectedUser} />

            {/* Список пользователей */}
            <UserList
                users={filteredUsers}
                onDelete={deleteUser}
                onSelect={selectUser}
            />
        </div>
    );
}

export default App;
// import { useState, useEffect } from "react";
// import UserList from "./components/UserList/UserList.jsx";
// import SelectedUserCard from "./components/SelectedUserCard/SelectedUserCard.jsx";
//
// function App() {
//     const [users, setUsers] = useState([]);
//     const [selectedUser, setSelectedUser] = useState(null);
//     const [newName, setNewName] = useState("");
//     const [newEmail, setNewEmail] = useState("");
//     const [loading, setLoading] = useState(true);
//
//     // 🔹 useEffect для загрузки данных
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then(res => res.json())
//             .then(data => {
//                 setUsers(data);
//                 setLoading(false);
//             });
//     }, []);
//
//     // 🔹 Добавление нового пользователя
//     const addUser = () => {
//         if (!newName.trim() || !newEmail.trim()) return;
//
//         const newUser = {
//             id: Date.now(),
//             name: newName,
//             email: newEmail,
//         };
//
//         setUsers(prev => [...prev, newUser]);
//         setNewName("");
//         setNewEmail("");
//     };
//
//     // 🔹 Удаление пользователя
//     const deleteUser = (id) => {
//         setUsers(prev => prev.filter(user => user.id !== id));
//         if (selectedUser?.id === id) setSelectedUser(null);
//     };
//
//     // 🔹 Выбор пользователя
//     const selectUser = (user) => setSelectedUser(user);
//
//     if (loading) return <h2>Loading...</h2>;
//
//     return (
//         <div>
//             <h1>Mini User Manager</h1>
//
//             {/* Добавление пользователя */}
//             <div style={{ marginBottom: "20px" }}>
//                 <input
//                     placeholder="Name"
//                     value={newName}
//                     onChange={(e) => setNewName(e.target.value)}
//                 />
//                 <input
//                     placeholder="Email"
//                     value={newEmail}
//                     onChange={(e) => setNewEmail(e.target.value)}
//                 />
//                 <button onClick={addUser}>Add User</button>
//             </div>
//
//             {/* Выбранный пользователь */}
//             <SelectedUserCard user={selectedUser} />
//
//             {/* Список пользователей */}
//             <UserList
//                 users={users}
//                 onDelete={deleteUser}
//                 onSelect={selectUser}
//             />
//         </div>
//     );
// }
//
// export default App;

// import { useState, useEffect } from "react"
// import UserList from "./components/UserList/UserList.jsx"
// import SelectedUserCard from "./components/SelectedUserCard/SelectedUserCard.jsx"
//
// function App() {
//     const [users, setUsers] = useState([])
//     const [selectedUser, setSelectedUser] = useState(null)
//     const [loading, setLoading] = useState(true)
//     const [newName, setNewName] = useState("")
//     const [newEmail, setNewEmail] = useState("")
//     const createUser = () => {
//         if (!newName.trim() || !newEmail.trim()) return
//         const newUser = {
//             id: Date.now(),
//             name: newName,
//             email: newEmail
//         }
//
//
//         setUsers(prev => [...prev, newUser])
//             setNewName("")
//             setNewEmail("")
//     }
//
//
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then(res => res.json())
//             .then(data => {
//                 setUsers(data)
//                 setLoading(false)
//             })
//     }, [])
//
//     const deleteUser = (id) => {
//         setUsers(prev => prev.filter(user => user.id !== id))
//
//         if (selectedUser?.id === id) {
//             setSelectedUser(null)
//         }
//     }
//
//     const selectUser = (user) => {
//         setSelectedUser(user)
//     }
//
//     if (loading) return <h2>Loading...</h2>
//
//     return (
//         <div>
//             <h1>User Manager</h1>
//
//
//             <input
//                 type="text"
//                 value={newName}
//                 onChange={(e) => setNewName(e.target.value)}
//             />
//             <input
//                 type="text"
//                 value={newEmail}
//                 onChange={(e) => setNewEmail(e.target.value)}
//             />
//             <button onClick={createUser}>Add</button>
//             <SelectedUserCard user={selectedUser} />
//             <UserList
//                 users={users}
//                 onDelete={deleteUser}
//                 onSelect={selectUser}
//             />
//
//         </div>
//     )
// }
//
// export default App

