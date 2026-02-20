function SelectedUserCard({ user }) {
    if (!user) return <h3>No user selected</h3>;

    return (
        <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "20px" }}>
            <h2>Selected User</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default SelectedUserCard;

// function SelectedUserCard({ user }) {
//     if (!user) return <h3>No user selected</h3>;
//
//     return (
//         <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "20px" }}>
//             <h2>Selected User</h2>
//             <p>Name: {user.name}</p>
//             <p>Email: {user.email}</p>
//         </div>
//     );
// }
//
// export default SelectedUserCard;

// function SelectedUserCard({ user }) {
//     if (!user) return <h3>No user selected</h3>
//
//     return (
//         <div>
//             <h2>Selected User</h2>
//             <p>Name: {user.name}</p>
//             <p>Email: {user.email}</p>
//         </div>
//     )
// }
//
// export default SelectedUserCard
