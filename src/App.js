import React, { useState } from 'react'
import UserTable from './components/tables/UserTable'
import AddUserForm from './components/tables/AddUserForm'

const App = () => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  return (
    <div className="container">
 
      <div className="flex-row">
        <div className="flex-large">

          
          <h2>Add New Register</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View Register</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  )
}

export default App