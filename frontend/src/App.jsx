import { Link, Outlet } from "react-router"


function App() {
   return (
    <>
    <Link to="/" >Home</Link> &emsp;
    <Link to="/add" >Add User</Link> &emsp;
    <Link to='/view'>View Users</Link>
    <div>
      <Outlet/>
    </div>
    </>
  )
}

export default App
