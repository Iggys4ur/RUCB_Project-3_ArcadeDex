import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="bg-red-900 text-white flex justify-between">
      <h1 className="text-5xl m-3 p-2">ArcadeDex</h1>

      <NavLink to="/auth">
        <h4 className="text-2xl m-4 p-2">Login</h4>
      </NavLink>
    </header>
  )
}

export default Header
