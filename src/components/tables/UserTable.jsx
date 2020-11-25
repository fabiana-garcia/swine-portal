import React from 'react'

const UserTable = (props) => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Birth date</th>
                <th>Height</th>
                <th>Address</th>
                <th>ZIP Code</th>
                <th>Gender</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.birthdate}</td>
                        <td>{user.height}</td>
                        <td>{user.address}</td>
                        <td>{user.zipCode}</td>
                        <td>{user.gender}</td>
                        <td>
                            <button 
                                onClick={() => {props.editRow(user)}}
                                className="button muted-button">
                                    Edit
                            </button>
                            <button
                                onClick={() => props.deleteUser(user.id)}
                                className="button muted-button"
                                >
                                    Delete
                                </button>
                        </td>
                    </tr>
                ))
            ) : (
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )}
        </tbody>
    </table>
)

export default UserTable