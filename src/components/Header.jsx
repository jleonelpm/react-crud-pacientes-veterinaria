
import logo from "../logo.png"
 const Header = () => {
  return (
    <div>
      <img src={logo} alt="Logo" />

      <h1 className="font-black text-center text-5xl md:w-2/3 mx-auto">
        Sistema Veterinario <br />
      </h1>

    </div>
  )
}

export default Header