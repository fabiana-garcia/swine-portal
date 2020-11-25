import React from 'react';

const UserForm = (props) => {
    const genders = [{"value": "Female"},{"value": "Male"},{"value": "Other"}];

    return (
        <form onSubmit={props.action}>
            <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    required={true}
                    value={props.user.name} 
                    onChange={props.inputChange} 
                />
                <label>E-mail</label>
                <input 
                    type="email" 
                    name="email" 
                    required={true}
                    value={props.user.email} 
                    onChange={props.inputChange} 
                />
                <label>Birth date</label>
                <input 
                    type="date" 
                    name="birthdate" 
                    required={true}
                    value={props.user.birthdate} 
                    onChange={props.inputChange} 
                />
                <label>Height</label>
                <input 
                    type="number" 
                    name="height" 
                    step="0.01"
                    min="0"
                    required={true}
                    value={props.user.height} 
                    onChange={props.inputChange} 
                />
                <label>Address</label>
                <input 
                    type="text" 
                    name="address" 
                    required={true}
                    value={props.user.address} 
                    onChange={props.inputChange} 
                />
                <label>ZIP Code</label>
                <input 
                    type="text" 
                    name="zipCode" 
                    required={true}
                    value={props.user.zipCode} 
                    onChange={props.inputChange} 
                />
                <label>Gender</label>
                <select
                name="gender"
                required={true}
                value={props.user.gender} 
                onChange={props.inputChange}  >
                    {genders.map((gender) => 
                        <option
                            value={gender.value}
                            key={gender.value}>
                                {gender.value}
                        </option>
                    )}
                </select>
            <button>{props.submitBtnName}</button>
        </form>

    )
}

export default UserForm;