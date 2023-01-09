//Desestructuración o asignación desestructurante


const persona = {
    nombre:'Tony',
    edad:'45',
    clave:'Ironman'
};

//extrae lo que quiero de ese objeto
const  useContext = ({nombre, clave, edad, rango = 'capitán'}) =>{ persona;
return{
    nombreClave:clave,
    años:edad
}
};

const {nombreClave,años} = useContext(persona);

console.log(nombreClave, años)