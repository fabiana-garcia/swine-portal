import React, { useState } from 'react'
import UserForm from './UserForm.jsx'

const AddUserForm = (props) => {

    const [user, setUser] = useState(props.initialFormState);

    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setUser({ ...user, [name]: value })
    }

  return (
    <UserForm
      action={event => {
        event.preventDefault()
        if(!user.name || !user.email) return
        
        props.addUser(user);
        setUser(props.initialFormState);
      }}
      user={user}
      inputChange={handleInputChange}
      submitBtnName="Add new user"
      />
  )
}

export default AddUserForm