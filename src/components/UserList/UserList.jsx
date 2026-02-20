import UserItem from "../UserItem/UserItem.jsx";

function UserList({ users, onDelete, onSelect }) {
    return (
        <ul>
            {users.map(user => (
                <UserItem
                    key={user.id}
                    user={user}
                    onDelete={onDelete}
                    onSelect={onSelect}
                />
            ))}
        </ul>
    );
}

export default UserList;

// import UserItem from "../UserItem/UserItem.jsx"
//
// function UserList({ users, onDelete, onSelect }) {
//
//     return (
//         <div>
//             <ul>
//                 {users.map(user => (
//                     <UserItem
//                         key={user.id}
//                         user={user}
//                         onDelete={onDelete}
//                         onSelect={onSelect}
//                     />
//                 ))}
//             </ul>
//
//         </div>
//
//     )
// }
//
// export default UserList