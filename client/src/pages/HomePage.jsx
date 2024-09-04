import { NavLink } from "react-router-dom"
import { useStore } from "../store"

function HomePage() {
  const { state } = useStore()

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl m-12">Welcome to the ArcadeDex!</h1>
    </div>
  )
}

export default HomePage
