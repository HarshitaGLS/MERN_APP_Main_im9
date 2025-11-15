import React, { useState } from 'react'

const UserList = () => {
      const [users, setUsers] = useState([])
  return (
    <div>
      <h3>User List</h3>
      <table border="1" cellSpacing={0}>
        <thead>
            <tr>
                <th>Name</th><th>Email</th><th>Age</th><th>Action</th>
            </tr>
        </thead>
        <tbody>
            {users.length === 0 ? <tr><td colSpan={4}>No users found</td></tr>
            :
            <>
        {users.map((user) => 
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td><button>Edit</button>{" "}
              <button >Delete</button></td>
            </tr>)}
            </>
            }
        </tbody>
      </table>
      

    
    </div>
  )
}

export default UserList
