import React, { useState } from 'react'

const AddUserForm = (props) => {
  const initialFormState = { id: null, mail: '', edad: '',datarandom:'',datecreation:'' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.name || !user.username) return

        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <label>Mail</label>
      <input
        type="text"
        name="mail"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Edad</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <label>Random</label>
      <input
        type="text"
        name="datarandom"
        value={user.datarandom}
        onChange={handleInputChange}
      />
      <label>Fecha Creacion</label>
      <input
        type="text"
        name="datecreation"
        value={user.datecreation}
        onChange={handleInputChange}
      />
      <button>Add new register</button>
    </form>
  )
}

export default AddUserForm