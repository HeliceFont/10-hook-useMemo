import {  useCallback, useEffect, useState } from "react"
import { Empleados } from "./Empleados"


export const Gestion = () => {
    // Variable/estado nombre que mostramos en el estado por defecto vacía para que sea rellenada por el usuario
    const [nombre, setNombre] = useState("");

    // Variable/estado página estado por defecto página 1
    const [ pagina, setPagina]= useState(1)
    
    // Evento asignar gestor 
    const asignarGestor = e =>{
        // registra el valor y el target del input
        setNombre(e.target.value)
    }
    // Efectúa un console.log cuando se renderizan nombre y página(gestión)
    useEffect(()=>{
      
      console.log("Vista Gestión actualizada!!!!!")

    },[nombre, pagina]);
    // Ejemplo useCallback
    const mostrarMensaje = useCallback(() =>{
          console.log("Mostrar Mensaje desde el componente empleados(Hook useCallback !!)");
    // Pasamos unas dependencias las cuales solo se actualicen cuando tenga que ver con una dependencia
    }, [pagina])
  return (
    <div>
        {/* Imprimimos la variable nombre cuando surja algun cambio en el evento del input
        En este caso está vacío por lo tanto en la vista sólo veríamos Gerente:
        Aunque si en su valor por defecto,const [nombre, setNombre] = useState("No hay ningún Gerente asignado"); 
        ponemos "No hay ningún Gerente asignado" hasta que no se efectúe un cambio, aparecerá impreso el mensaje  */}
        <h1>Gerente:{nombre}</h1>
        <input type="text" 
                // captamos el evento que se produce en el input y lo mostramos por pantalla
                onChange={asignarGestor} 
                placeholder="Introduce tu Nombre de gestor"
        />

        <h2>Listado de empleados:</h2>
        {/* Muestra el valor y target registrados en el input con la variable nombre */}
        <p>Los usuarios son gestionados por: {nombre} vienen de JSONplaceholder</p>
        {/* Asignamos una porp a Empleados pagina={pagina} 
        y otra prop para el mensaje del ejercicio con el Hook useCallback mensaje={mostrarMensaje} */}
        <Empleados pagina={pagina} mensaje={mostrarMensaje}/>
        {/* indicamos el estado de cada página en cada botón, para indicarle a la pagina que accedemos */}
        <button onClick={()=>setPagina(1)}>Página 1</button>
        <button onClick={()=>setPagina(2)}>Página 2</button>
    </div>
  )
}
