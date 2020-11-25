import React, { useState, useEffect } from 'react'
import UserForm from './UserForm'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  useEffect(() => {
    setUser(props.currentUser)
    console.log(props.currentUser)
  }, [props])

  return (
      <div>
        <UserForm
            action={(event) => {
                event.preventDefault()
        
                props.updateUser(user.id, user)
              }}
            user={user}
            inputChange={handleInputChange}
            submitBtnName="Update user"
        />
        <button
            onClick={() => props.setEditing(false)}
            className="button muted-button"
        >
            Cancel
        </button>
      </div>
  );
}

export default EditUserForm