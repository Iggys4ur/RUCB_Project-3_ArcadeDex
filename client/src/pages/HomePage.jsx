import { NavLink } from "react-router-dom"
import { useStore } from "../store"

function HomePage() {
  const { state } = useStore()

  return (
    <>
      <h1>Homepage</h1>
    </>
  )
}

export default HomePage
