import React, { useState } from 'react'
import UserTable from './components/tables/UserTable'
import AddUserForm from './components/tables/AddUserForm'


const App = () => {
  const usersData = [
    { id: 1, mail: 'hola@gmail.com', edad: '15',datarandom:'random',datecreation:'01/02/2003' },
    { id: 2, mail: 'asdad@gmail.com', edad: '15',datarandom:'random',datecreation:'01/02/2003' },
    { id: 3, mail: 'asda@gmail.com', edad: '15',datarandom:'random',datecreation:'01/02/2003' },
  ]


  //Setting state
  const [users, setUsers] = useState(usersData)

  //CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
		

		setUsers(users.filter(user => user.id !== id))
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
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App