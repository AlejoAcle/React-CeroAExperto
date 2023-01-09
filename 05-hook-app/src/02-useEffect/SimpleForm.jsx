import React, { useEffect } from 'react';
import { useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    //para mantener el estado y genera uno nuevo
    const [form, setForm] = useState({username: 'nombre', email: 'email@dominio.com'});


    const { username, email} = form;

    const onInputChange = ({target}) =>{
        const { name, value} = target;
        setForm({
            ...form,
            [ name ]:value
        })
    };

 useEffect(() =>{
  console.log('useEffect called!')
 },[]);
 useEffect(() =>{
  console.log('form changed!')
 },[form]);
 useEffect(() =>{
  console.log('email changed!')
 },[email]); 



  return (
    <>
    <h1>Simple Form</h1>
    <hr />
    <input
        type="text"
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onInput={onInputChange}
    ></input>

    <input
        type="email"
        className='form-control mt-2'
        placeholder='email@dominio.com'
        name='email'
        value={email}
        onInput={onInputChange}
    ></input>
    
    {
      (username === 'nombre') && <Message />
    }

    </>
  )
}
