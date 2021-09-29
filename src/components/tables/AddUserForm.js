import React, { useState ,useEffect} from 'react'
import axios from 'axios';

const AddUserForm = (props) => {
  const initialFormState = { id: null, mail: '', edad: '',datarandom:'',datecreation:'' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

 

  const[agregarok, setAgregarok]=useState(false);

  const[inputdatarandom,setInputdatarandom]=useState("");
  const[inputddatecreation,setInputdatecreation]=useState("");


  useEffect(() => {
    
    
    
    const apifunction = async () => {
      
      if(agregarok===false) return;

      
      

      const rand =  Math.floor(Math.random()*200)+1;
        
  
      const url=`https://rickandmortyapi.com/api/character/${rand}`;
      
      const resultado= await axios.get(url);
  
        
      setInputdatecreation(resultado.data.created);
      setInputdatarandom(resultado.data.location.name);
      
      setAgregarok(false);
         
       }
  
       apifunction();

      
         },[agregarok]
                     
                         )




  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.mail || !user.edad) return

        
        user.datecreation= inputddatecreation
        user.datarandom= inputdatarandom

        console.log(user)
   
        props.addUser(user)
        setUser(initialFormState)
        setAgregarok(true)
      }}
    >
      <label>Mail</label>
      <input
        type="text"
        name="mail"
        value={user.mail}
        onChange={handleInputChange}
      />
      <label>Edad</label>
      <input
        type="text"
        name="edad"
        value={user.edad}
        onChange={handleInputChange}
      />
 
      <button type="submit">Add new register</button>
    </form>
  )
}

export default AddUserForm