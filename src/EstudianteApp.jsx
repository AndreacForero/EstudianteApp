import { useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";



//<ListaEstudiantes lista={estudiantes}/>

export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    console.log(estudiantes);

    const agregarEstudiante = (estudiante) => {
       const existeEstudiante = estudiantes.some((estudiante) => estudiante.id === agregarEstudiante.id);
        if (existeEstudiante) {
            window.alert("¡El estudiante ya existe!");
        } else {
            setEstudiantes([...estudiantes, estudiante]);
        }
        setEstudiantes('');
    }

    return (
        <>
            <FormularioEstudiante agregar={(estu) => { agregarEstudiante(estu) }} />
            <TablaEstudiante listaEstudiantes={estudiantes} />
        </>
    )
}
