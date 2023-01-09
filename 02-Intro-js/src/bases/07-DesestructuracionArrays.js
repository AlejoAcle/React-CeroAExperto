//Desestructuracion ARRAYs


const personajes = ['Batman', 'Joker', 'Pingüino'];
const[,p2] = personajes;

console.log(p2);

const retornaArray = () =>{
    return['ABC', 123];
}

const [letras, numeros] =retornaArray();
console.log(letras,numeros);

const useState = (valor) =>{
    return[valor, () =>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState('Batman');

console.log(nombre);
setNombre();