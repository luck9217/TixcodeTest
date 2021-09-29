import React from 'react'

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Mail</th>
        <th>Edad</th>
        <th>Dato Api</th>
        <th>Fecha Creacion</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.mail}</td>
            <td>{user.edad}</td>
            <td>{user.datarandom}</td>
            <td>{user.datecreation}</td>
            <td>
              
                    <button 
                         onClick={() => props.deleteUser(user.id)}   
                         className="button muted-button"
                
                         >Delete
                    
                    </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No data</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable