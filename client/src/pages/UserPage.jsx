import { useStore } from "../store"

function UserPage() {
  const { state } = useStore()

  return (
    <>
      <h1 className="self-center">Welcome {state.user.username}</h1>
      <h1>Email: {state.user.email}</h1>
    </>
  )
}

export default UserPage
