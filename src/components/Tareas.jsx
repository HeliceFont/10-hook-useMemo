import { useMemo, useState } from "react"


export const Tareas = () => {
    const[tareas, setTareas] =useState([])
    const [contador, setcontador] = useState(1235)
    const guardarTareas =e =>{
        e.preventDefault();

        let tareas_actualizadas = [...tareas, e.target.descripcion.value]
        setTareas(tarea => [...tarea, e.target.descripcion.value])
        console.log(tareas_actualizadas)
    }
    // id que le indicamos que borre
    const borrarTarea = id =>{
        // Filtrar las tareas para eliminar las que no quiero
        let nuevas_tareas= tareas.filter((tarea, indice) => indice !== id)
        
        setTareas(nuevas_tareas)
        // Set State Guardar el nuevo listado de tareas en el estado
    }
    const sumarAlContador = e =>{
        setcontador((contador + 1))
    }
    const contadoresPasados =(acumulacion)=>{
        for(let i = 0; i<=acumulacion; i++){
        console.log("Ejecutando acumulación de contadores del pasado...");
        }
        // return(
        //     'Dar Like a ésta App!! ♥️ ${acumulacion}'
      
            
        // )
    }

    const memoContadores = useMemo(()=> {
        contadoresPasados(contador)
    }, [contador])

  return (
    <div>
        <div className="tareas-container">
            <h1>Mis Tareas:</h1>
            
            <form onSubmit={guardarTareas} >
                <input type="text" name="descripcion" placeholder="Describe la tarea" />
                <input type="submit" value="Guardar" />
            </form>
            
            
        </div>
        <section className="lista-tareas">
            <h2>Lista de Tareas:</h2>
            
            <ul>
                {
                    tareas.map((tarea, indice) =>{
                        // Si vamos a meterlo en varias lineas recomendable meterlo entre parétesis
                        return (
                            <li key={indice}>
                                {tarea}
                                &nbsp;
                                <button onClick={()=>borrarTarea(indice)}>✓ </button>
                            </li>
                        ) 
                    })
                }
            </ul>
            <h2>Dar Like a ésta App!! ♥️ {contador} {memoContadores}</h2>
            <button onClick={sumarAlContador}>👍</button>
        </section>
    </div>
  )
}
