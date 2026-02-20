import UserItem from "../UserItem/UserItem.jsx"

function UserList({ users, onDelete, onSelect }) {

    return (
        <div>
            <ul>
              {/*<h2>Add User</h2>*/}

              {/*      <input*/}
              {/*          type="text"*/}
              {/*          placeholder="Name"*/}
              {/*          value={newName}*/}
              {/*          onChange={(e) => setNewName(e.target.value)}*/}
              {/*      />*/}

              {/*      <input*/}
              {/*          type="email"*/}
              {/*          placeholder="Email"*/}
              {/*          value={newEmail}*/}
              {/*          onChange={(e) => setNewEmail(e.target.value)}*/}
              {/*      />*/}

              {/*      <button onClick={createUser}>*/}
              {/*          Add User*/}
              {/*      </button>*/}

                {users.map(user => (
                    <UserItem
                        key={user.id}
                        user={user}
                        onDelete={onDelete}
                        onSelect={onSelect}
                    />
                ))}
            </ul>

        </div>
        // <div>
        //     <h2>Add User</h2>
        //
        //     <input
        //         type="text"
        //         placeholder="Name"
        //         value={newName}
        //         onChange={(e) => setNewName(e.target.value)}
        //     />
        //
        //     <input
        //         type="email"
        //         placeholder="Email"
        //         value={newEmail}
        //         onChange={(e) => setNewEmail(e.target.value)}
        //     />
        //
        //     <button onClick={createUser}>
        //         Add User
        //     </button>
        // </div>

    )
}

export default UserList