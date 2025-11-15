import React, { useState } from 'react'

const UserForm = () => {
    const [form, setForm] = useState({ name: "", email: "", age: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(JSON.stringify(form))
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
