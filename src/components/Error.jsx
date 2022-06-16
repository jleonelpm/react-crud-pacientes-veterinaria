/* const Error = ({mensaje}) => {
    return (
        <div className=" bg-red-600 text-white text-center font-semibold p-2 rounded-md">
            <p >
                {mensaje}
            </p>
        </div>
    )
} */

//En lugar de usar props de manera tradicional se puede emplear a través de la palabra children
const Error = ({children}) => {
    return (
        <div className=" bg-red-600 text-white text-center font-semibold p-2 rounded-md">
            <p >
                {children}
            </p>
        </div>
    )
}

export default Error