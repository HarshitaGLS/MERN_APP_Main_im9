import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const UserForm = () => {
    const [form, setForm] = useState({ name: "", email: "", age: "" });
    const navigate = useNavigate()
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault()
        // alert(JSON.stringify(form))
        try{
            await fetch("http://localhost:5000/api/save",
                {
                    method:"POST",
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(form)
                }
            )
            navigate("/view")
        }
        catch(err){console.log(err)}
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
                <label htmlFor="name" style={{display:'inline-block',width:'80px'}}>Name</label>
                <input name="name" value={form.name} onChange={handleChange} /><br /><br />
                <label htmlFor="email" style={{display:'inline-block',width:'80px'}}>Email</label>
                <input name="email" value={form.email} onChange={handleChange} /><br /><br />
                <label htmlFor="age" style={{display:'inline-block',width:'80px'}}>Age</label>

                <input name="age" type="number" value={form.age} onChange={handleChange} /><br /><br />
                <button type="submit">Add User</button>
            </form>
        </>
    )
}

export default UserForm
