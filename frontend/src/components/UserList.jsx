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
//search
const [search,setSearch] = useState("")
const [sortType,setSortType] = useState("")

const filterUsers = users.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase()))
.sort((a,b)=>{
  if(sortType=="atoz") {return a.name.localeCompare(b.name)}
  if(sortType=="ztoa") {return b.name.localeCompare(a.name)}
  if(sortType=="ltoh") {return a.age - b.age}
  if(sortType=="htol") {return b.age - a.age}
  return 0;
})

// users.sort((a,b)=>a-b) //asending
// users.sort((a,b)=>b-a) //desending


  return (
    <div>
      {/* search */}
      <input placeholder='search by name' 
      value={search} onChange={(e)=>setSearch(e.target.value)} />
      &emsp;
      <select value={sortType} onChange={(e)=>setSortType(e.target.value)}>
        <option value="">Choose</option>
        <option value="atoz">Name (A-Z)</option>
        <option value="ztoa">Name (Z-A)</option>
        <option value="ltoh">Age (Ascending)</option>
        <option value="htol">Age (Decending)</option>
      </select>    
      
      <br/>

      <h3>User List</h3>
      <table border="1" cellSpacing={0}>
        <thead>
            <tr>
              <th>ID</th>
                <th>Name</th><th>Email</th><th>Age</th><th>Action</th>
            </tr>
        </thead>
        <tbody>
            {filterUsers.length === 0 ? <tr><td colSpan={5}>No users found</td></tr>
            :
            <>
        {/* {users.map((user) => 
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
            </tr>)} */}

            {filterUsers.map((user) => 
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
