import React, { useState } from 'react'
import UserTable from './components/tables/UserTable'
import AddUserForm from './components/forms/AddUserForm'
import EditUserForm from './components/forms/EditUserForm'
import Header from './components/Header'

const App = () => {
  const usersData = [
    { 
      id: 1, 
      name: 'Swine', 
      email: 'swine@example.com', 
      birthdate: '2002-01-01', 
      height: 1.60, 
      address: "teste",
      zipCode: "18031-09",
      gender: "Female"
    },
    { 
      id: 2, 
      name: 'FIT', 
      email: 'fit@example.com', 
      birthdate: '1998-05-20', 
      height: 1.70, 
      address: "teste",
      zipCode: "11111-11",
      gender: "Male"
    },
    { 
      id: 3, 
      name: 'Test', 
      email: 'test@test.com.br', 
      birthdate: '1986-12-24', 
      height: 1.65, 
      address: "teste",
      zipCode: "12039-0",
      gender: "Male"
    },
  ]

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)
  const initialFormState = { 
    id: 0, 
    name: '', 
    email: '', 
    birthdate: "", 
    height: "0.00",
    address: '',
    zipCode: '',
    gender: "Female"
  }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    console.log(user.id);
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({ 
      id: user.id, 
      name: user.name, 
      email: user.email, 
      birthdate: user.birthdate, 
      height: user.height,
      address: user.address,
      zipCode: user.zipCode,
      gender: user.gender
    })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  }

  return (
    <div className="container">
      <Header/>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm 
                  addUser={addUser}
                  initialFormState={initialFormState} 
                />
              </div>
            )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
            users={users} 
            deleteUser={deleteUser} 
            editRow={editRow} 
          />
        </div>
      </div>
    </div>
  )
}

export default App