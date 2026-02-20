function UserItem({ user, onDelete, onSelect }) {
    return (
        <li>
            {user.name} — {user.email}

            <button onClick={() => onSelect(user)}>
                Select
            </button>

            <button onClick={() => onDelete(user.id)}>
                Delete
            </button>
        </li>
    )
}

export default UserItem