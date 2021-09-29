import React, { useState, useEffect } from 'react'
import UserTable from './components/tables/UserTable'
import AddUserForm from './components/tables/AddUserForm'
import axios from 'axios';

const App = () => {
  const usersData = [
    { id: 1, mail: 'hola@gmail.com', edad: '15',datarandom:'random',datecreation:'01/02/2003' },
    { id: 2, mail: 'asdad@gmail.com', edad: '15',datarandom:'random',datecreation:'01/02/2003' },
    { id: 3, mail: 'asda@gmail.com', edad: '15',datarandom:'random',datecreation:'01/02/2003' },
  ]

  // const initialFormState = {id:null, mail: '', edad: '',datarandom:'',datecreation:'' }

  //Setting state
  const [users, setUsers] = useState(usersData)
  // const [ currentUser, setCurrentUser ] = useState(initialFormState)

  //CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
		

		setUsers(users.filter(user => user.id !== id))
	}

  useEffect(() => {
    if(addUser) {

       console.log("click")

       const apifunction = async () => {

      //   //evitamos la ejecucion la primera vez
      // if(moneda==='')return;
  
      //consultar la api para obetener la cotizacion
      const url=`https://rickandmortyapi.com/api/character/10`;
      
      const resultado= await axios.get(url);
  
        //guardar cotizacion
      console.log(resultado.data);
     
         
       }
  
       apifunction();

      }
    }
  )


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