import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
    const {form, onInputChange,username, email, password, onResetForm} = useForm ({
        username: '',
        email: '',
        password:''
    })

    // const {username, email, password} = form;

   



  return (
    <>
    <h1>Form with Custom Hook</h1>
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

    <input
        type="password"
        className='form-control mt-2'
        placeholder='Contraseña'
        name='password'
        value={password}
        onInput={onInputChange}
    ></input>

        <button className='btn btn-primary mt-2' onClick={onResetForm}>Reset</button>

    </>
  )
}

