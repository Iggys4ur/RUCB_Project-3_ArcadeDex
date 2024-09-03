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
  const [friend, setFriend] = useState(initialFriend)
  const [friends, setFriends] = useState([])

  const [addFriend] = useMutation(ADD_FRIEND, {
    variables: friend,
    refetchQueries: [GET_USER_FRIENDS]
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

  const handleAddFriend = async event => {
    event.preventDefault()

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

      <div className="friend-output">
        {friends.map(friendObj => (
          <article key={friendObj._id}>
            <h1>{friendObj.username}</h1>
            <h1>{friendObj._id}</h1>
          </article>
        ))}
      </div>
    </div>
  )
}

export default UserPage
