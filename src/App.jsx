
import React, { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  //cargamos la info inicial que hay en localstorage
  const data = JSON.parse(localStorage.getItem('pacientes')) ?? [];

  //creamos un state de tipo arreglo donde se almacenaran los pacientes
  const [pacientes, setPacientes] = useState(data);
  //creamos otro state de tipo objeto
  const [paciente, setPaciente] = useState({});
  

  useEffect(() => {

    //usamos localstorage para almacenar pacientes
    //Localstorage requiere una cadena, por lo cual convertimos 
    //nuestro objeto en una cadena con el metodo stringify de JSON
    localStorage.setItem('pacientes', JSON.stringify(pacientes));

  }, [pacientes]);

  const eliminarPaciente = (id) => {
    // Para eliminar pacientes unicamente filtramos TODOS los pacientes que son diferentes
    // Al paciente que queremos eliminar
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className='container mx-auto mt-10'>
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}

        />
      </div>
    </div>
  )
}

export default App