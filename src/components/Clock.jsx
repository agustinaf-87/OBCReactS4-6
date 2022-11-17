import React, {useEffect, useState}from 'react';

const Clock = () => {

    //primero seteo el estado privado del 
    //componente

    const estadoDefault ={
        fecha: new Date(),
        edad: 0,
        nombre: "Agustina",
        apellidos: "Fernández"
    }

    const [usuario, setUsuario] = useState(estadoDefault);

    //setear el set interval con useEffect()

    useEffect(() => {
        const intervalEdad = setInterval(()=>{
            
            actualizarUsuario();

        },1000); 
        return () => {
            clearInterval(intervalEdad)
        };
    },);

    const actualizarUsuario = ()=>{
        return setUsuario ({
            fecha: usuario.fecha,
            edad: usuario.edad +1,
            nombre: usuario.nombre,
            apellidos: usuario.apellidos,
        })
    }

    return (
        <div>
            <h2>
                Hora Actual: 
                {usuario.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {usuario.nombre} {usuario.apellidos}
            </h3>
            <h1>
                Edad: {usuario.edad}
            </h1>
        </div>
    );
}

export default Clock;
