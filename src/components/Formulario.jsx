import { useState, useEffect } from "react"
import Error from "./Error"

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {

  //const [variable, funcion] = useState(valorinicial)
  //Cuando react detecta un cambio en el estado RENDERIZA de nuevo
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  //El hook de useEffect se ejecuta unicamente 
  //cuando paciente cambia,
  //Es decir cuando se presione el boton enviar
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])



  //Method to generate unique id to assign in html element
  const generarId = () => {
    const id = Date.now().toString().concat(performance.now().toString().slice(0, 6))
    return id
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del Formulario
    //Si existe algun campo que contenga un elemento vacio
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay al menos un campo vacio");
      setError(true)
    } else {


      //Creamos un objeto pacientes para pasarle a la funcion
      //setPacientes proveniente de App
      const objetoPaciente = {
        id: generarId(),
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
      }

      if (paciente.id) {
        //console.log('Editando')
        objetoPaciente.id = paciente.id
        const pacientesActualizados = pacientes.map(
          pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState
        )
        setPacientes(pacientesActualizados)

        //Una vez que se ha editado el paciente hay que limpiar de nuevo el statePaciente
        setPaciente({})

      } else {
        //console.log('Nuevo Registro')
        objetoPaciente.id = generarId()        
        //Gracias al spread operator podemos agregar al array pacientes
        //el objetoPaciente        
        setPacientes([...pacientes, objetoPaciente])

      }

      //Reiniciamos los Campos
      setError(false)
      setNombre("")
      setPropietario("")
      setEmail("")
      setFecha("")
      setSintomas("")

      console.log('Todos los campos llenos');
    }





  }


  return (
    <div className="md:w-1/2 lg:w-2/5 p-2">
      <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
      <p className="mt-5 text-xl text-center font-bold">Añade Pacientes</p>
      <form
        className=" bg-sky-600 shadow-md rounded-lg py-10 px-5"
        onSubmit={handleSubmit}
      >
        {
          error ? (<Error>Todos los campos deben tener datos</Error>) : ""  //Se puede usar en lugar de "error ? true : false" 
        }
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-white uppercase font-bold">
            Nombre de la Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-white uppercase font-bold">
            Nombre del Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)} />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-white uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-white uppercase font-bold">
            Fecha de Alta
          </label>
          <input
            id="alta"
            type="date"
            placeholder="Fecha de Alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="sintomas" className="block text-white uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            cols="30"
            rows="10"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)} />

        </div>
        <div>
          <input
            type="submit"
            className=" bg-indigo-600 w-full my-2 p-3 text-white uppercase cursor-pointer rounded-md"
            value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}

          />
        </div>

      </form>
    </div>
  )
}

export default Formulario