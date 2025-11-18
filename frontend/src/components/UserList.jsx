import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const UserList = () => {
  const navigate = useNavigate()   
  const [users, setUsers] = useState([])
      const fetchUsers = async()=>{
        try{
          const res = await fetch("http://localhost:5000/api")
          const data =await res.json()
          // console.log(data)
          setUsers([...data])
        }
        catch(err){console.log(err)}
      }
      useEffect(()=>{ fetchUsers() },[])
//delete 
const handleDelete = async(id)=>{
  try{
    await fetch(`http://localhost:5000/api/${id}`,
      {method:"DELETE"})
      alert("user deleted")
      window.location.reload()
  }
  catch(err){console.log(err)}
}
  return (
    <div>
      <h3>User List</h3>
      <table border="1" cellSpacing={0}>
        <thead>
            <tr>
              <th>ID</th>
                <th>Name</th><th>Email</th><th>Age</th><th>Action</th>
            </tr>
        </thead>
        <tbody>
            {users.length === 0 ? <tr><td colSpan={5}>No users found</td></tr>
            :
            <>
        {users.map((user) => 
            <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td><button 
                onClick={()=>navigate(`/edit/${user._id}`)}>Edit</button>{" "}
              <button 
              onClick={()=>handleDelete(user._id)}>
                Delete</button></td>
            </tr>)}
            </>
            }
        </tbody>
      </table>
      

    
    </div>
  )
}

export default UserList
