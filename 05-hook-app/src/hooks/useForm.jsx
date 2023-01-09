import React from 'react'
import { useState } from 'react';
export const useForm = (initialForm = {}) => {
  
    //para mantener el estado y genera uno nuevo
    const [form, setForm] = useState(initialForm);


    const onInputChange = ({target}) =>{
        const { name, value} = target;
        setForm({
            ...form,
            [ name ]:value
        })
    };
  
    const onResetForm = () =>{
        setForm(initialForm);
    }
  
    return{
        ...form,
        form,
        onInputChange,
        onResetForm
    }
}
