//Los props se puede pasar de diversas maneras
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  //Lo que estamos haciendo aqui es asignar a una variable objeto los valores de paciente
  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {  
    const respuesta = confirm('¿Deseas eliminar este paciente?')

    //En caso afirmativo se elimina el paciente
    if (respuesta) {
      eliminarPaciente(id)
    }

  }



  return (
    <div className="m-3 bg-indigo-300 shadow-md px-5 py-5 rounded-xl">
        <p className=" font-bold mb-3 text-gray-700 uppercase">Mascota:
        <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase">Nombre:
        <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase">Email:
        <span className="font-normal normal-case">{email}</span>
        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase">Alta:
        <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase">Sintomas:
        <span className="font-normal normal-case">{sintomas}</span>
        </p>    
        <div>
          <button
          type="button"
          className=" m-5 py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
          onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>
          <button
          type="button"
          className=" py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
          onClick={handleEliminar}
          >
            Eliminar
          </button>          
        </div>                            

    </div>
  )
}

export default Paciente

