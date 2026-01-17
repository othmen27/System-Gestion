import { useState, useEffect } from 'react';

export default function MainPage () {
    const [users, setUsers] = useState([])
    useEffect(() =>{
    async function callUserApi(){
        try{
            const response = await fetch("http://localhost:3000/api/users/showUsers") 
            if (!response.ok){
                throw new Error(`HTTP error: ${response.status}`)
            }
            const data = await response.json()
            setUsers(data)
        }catch(error){
            console.error(`Error ${error}`);
        }

    }
        callUserApi()
    }, [])
    return(
        <>
        {users.map(user => (
            <div key={user.id}>
            <h2>name: {user.name}</h2>
            <h2>mail: {user.email}</h2>
            <h2>phonenumber: {user.phonenumber}</h2>
            </div>
        ))}
        </>
    )
}