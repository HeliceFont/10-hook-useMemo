/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';

// El componente se renderiza en el momento de carga y no vuelve a renderizarse hasta que no se efectúen cambios
// Página determina la página de la API que usamos para mostrar especificamos las paginas 
// Y las actualizamos en los botónes del denderizado
export const Empleados = React.memo(({ pagina, mensaje }) => {
    // Estado Empleados array
    const [empleados, setEmpleados] = useState([])
    
    // UseEffect para mostrar por consola las veces que se renderiza Empleados
    useEffect(() => {
        console.log("Se ha vuelto a renderizar empleados!!!");
    }, [empleados])
    
    // Petición asyn await fetch, requerimiento de la data de la API para mostrarla
    // (p) simboliza la página. que no le llamamos pagina porque ya tenemos nombrada pagina, en la desectructuración de objetos del componente
    // +p 
    const conseguirEmpleados = async (p) =>{
        const url="https://reqres.in/api/users?page="+p;

        //peticion
        const peticion =await fetch(url)

        // Los : son para renombrar variables 
        const {data: empleados} = await peticion.json()

        setEmpleados(empleados)

        console.log("Se ejecutó la petición Ajax!!!")
    }
    // cargar pagina cuando Página sea requerida
    // no surgen un efecto hasta que cambia un estado 
    useEffect(()=>{
        conseguirEmpleados(pagina)
    },[pagina])
    mensaje();

    return (
        <div>
            <h1>Empleados:</h1>
            
            <ul className='empleados'>
                {
                    // Mapeo del objeto para mostrar los parámetros que te interesen del objeto
                    // función empleado en singular para dirigirnos a un objeto único con una Key o identidad ID
                    // renderiza el objeto en una lista
                    empleados.map(empleado=>{
                        return <li key={empleado.id}>{empleado.first_name + " "+ empleado.last_name}</li>
                })
                }
            </ul>
        </div>
    )
});
