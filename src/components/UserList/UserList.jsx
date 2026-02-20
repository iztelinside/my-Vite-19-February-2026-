import UserItem from "../UserItem/UserItem.jsx";

function UserList({ users, onDelete, onSelect, onEdit }) {
    return (
        <ul>
            {users.map(user => (
                <UserItem
                    key={user.id}
                    user={user}
                    onDelete={onDelete}
                    onSelect={onSelect}
                    onEdit={onEdit} // передаём onEdit в UserItem
                />
            ))}
        </ul>
    );
}

export default UserList;

// import UserItem from "../UserItem/UserItem.jsx";
//
// function UserList({ users, onDelete, onSelect }) {
//     return (
//         <ul>
//             {users.map(user => (
//                 <UserItem
//                     key={user.id}
//                     user={user}
//                     onDelete={onDelete}
//                     onSelect={onSelect}
//                 />
//             ))}
//         </ul>
//     );
// }
//
// export default UserList;

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