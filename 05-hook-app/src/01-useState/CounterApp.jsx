import React from 'react';
import { useState } from 'react';

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
    })
     
    //desestructuro el objeto
    const {counter1,counter2,counter3} = counter;

  return (
    <div>

        <h1>Counter1: {counter1}</h1>
        <h1>Counter2: {counter2}</h1>
        <h1>Counter3: {counter3}</h1>


        <hr />
        
        <button className='btn'
                onClick={
                    () =>setCounter({
                        //lo mantengo tal cual y añado lo que cambio, la acción del botón de añadir uno.
                        ...counter,
                            counter1: counter1 + 1,

                            })
                }>+1</button>
        

    </div>
 )
}
