function UserItem({ user, onDelete, onSelect }) {
    return (
        <li style={{ marginBottom: "10px" }}>
            {user.name} — {user.email}
            <button onClick={() => onSelect(user)} style={{ marginLeft: "10px" }}>
                Select
            </button>
            <button onClick={() => onDelete(user.id)} style={{ marginLeft: "5px" }}>
                Delete
            </button>
        </li>
    );
}

export default UserItem;

// function UserItem({ user, onDelete, onSelect }) {
//     return (
//         <li>
//             {user.name} — {user.email}
//
//             <button onClick={() => onSelect(user)}>
//                 Select
//             </button>
//
//             <button onClick={() => onDelete(user.id)}>
//                 Delete
//             </button>
//         </li>
//     )
// }
//
// export default UserItem