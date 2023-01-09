import React from 'react';
import { useEffect } from 'react';

export const Message = () => {

    useEffect(() => {

    const onMouseMove = ({x,y}) =>{
        const coords = { x, y };
        console.log(coords);
    }

      window.addEventListener('mousemove',onMouseMove);
      
    
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      }
    }, [])
    


  return (
    <div>

        <h3>Usuario ya existente</h3>

    </div>
  )
}
