import { NavLink } from "react-router-dom"
import { useStore } from "../store"

function HomePage() {
  const { state } = useStore()
  console.log(state.user.username)

  return (
    <>
      <h1>Homepage</h1>
    </>
  )
}

export default HomePage
