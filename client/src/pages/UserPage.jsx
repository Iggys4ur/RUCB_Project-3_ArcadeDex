import { useMutation, useQuery } from "@apollo/client"
import { useStore } from "../store"
import { ADD_FRIEND, DELETE_FRIEND } from "../graphql/mutations"
import { useState } from "react"
import { GET_USER_FRIENDS } from "../graphql/queries"

const initialFriend = {
  username: ''
}

function UserPage() {
  const { state } = useStore()
  const [unfriend, setUnFriend] = useState({
    username: ''
  })
  const [friend, setFriend] = useState(initialFriend)
  const [friends, setFriends] = useState([])

  const [addFriend] = useMutation(ADD_FRIEND, {
    variables: friend,
    refetchQueries: [GET_USER_FRIENDS],
    awaitRefetchQueries: true
  })

  const [deleteFriend] = useMutation(DELETE_FRIEND, {
    variables: unfriend,
    refetchQueries: [GET_USER_FRIENDS],
    awaitRefetchQueries: true
  })

  useQuery(GET_USER_FRIENDS, {
    onCompleted(data) {
      setFriends(data.getUserFriends.map(fObj => ({
        ...fObj,
        edit: false
      })))
    },
  })

  const handleInputChange = event => {
    setFriend({
      [event.target.name]: event.target.value,
    })
  }

  const handleDeleteFriend = async event => {
    setUnFriend({
      username: event.target.id,
    })

    try {
      await deleteFriend()

    } catch (error) {
      console.log(error)
    }
  }

  const handleAddFriend = async event => {

    try {
      await addFriend()

      setFriend({
        ...initialFriend
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col">
      <h1 className="self-center text-3xl p-16">Welcome, {state.user.username}</h1>
      <h1>Email: {state.user.email}</h1>
      <form onSubmit={handleAddFriend}>
        <input onChange={handleInputChange} type="text" name="username" value={friend.username} placeholder="Do you want to add someone?" />
      </form>

      <div className="friend-output grid">
        {friends.map(friendObj => (
          <article key={friendObj._id} className="flex flex-col bg-black text-white size-64 rounded-2xl">
            <h1 className="self-center my-4 text-lg">{friendObj.username}</h1>
            <h1>AKA: {friendObj.steamAccount.personaName}</h1>
            <img src={friendObj.steamAccount.avatarLink} className="size-24" />
            <button onDoubleClick={handleDeleteFriend} id={friendObj.username} className="bg-red-950 p-2 mx-14 rounded-2xl">Unadd User</button>
          </article>
        ))}
      </div>
    </div>
  )
}

export default UserPage
