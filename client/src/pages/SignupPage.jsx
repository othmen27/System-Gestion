import { useState } from 'react';
import axios from 'axios';
export default function SignupPage () {
    const [name, setName] = useState('');
    const [mail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('')
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const response = await axios.post(`http://localhost:3000/api/users/addUser`,{
                name: name,
                email: mail,
                password: password,
                phonenumber:number,})
        } catch(error){
            console.log(error);
            
    }
}
    return(
        <form onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <label htmlFor="name">Name
            <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)}/>
            </label><br />
            <label htmlFor="mail">Email
            <input type="text" name="mail" id="mail" value={mail} onChange={e => setEmail(e.target.value)}/>
            </label><br />
            <label htmlFor="password">Password
                <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </label><br />
            <label htmlFor="number">Number
                <input type="text" name="number" id="number" value={number} onChange={e => setNumber(e.target.value)}/>
            </label><br />
            <button type="submit">Submit</button>
        </form>
    )
    
}