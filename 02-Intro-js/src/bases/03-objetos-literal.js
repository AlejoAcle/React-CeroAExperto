const persona = {
    nombre:'Tony',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'New York',
        zip:0001,
    }
};

console.table({persona});

const persona2 = {...persona};
persona2.nombre = `Peter`;

console.log(persona2)

