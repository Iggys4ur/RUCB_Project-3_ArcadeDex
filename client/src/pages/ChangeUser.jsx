import { useMutation } from "@apollo/client";
import { redirect } from "react-router-dom";
import { EDIT_USERNAME } from "../graphql/mutations";
import { GET_USER } from "../graphql/queries";
import { useState } from "react";

function ChangeUser() {
  const [newName, setNewName] = useState('enter a name');

  const [editUsername] = useMutation(EDIT_USERNAME, {
    variables: newName,
    refetchQueries: [GET_USER],
    awaitRefetchQueries: true
  })

  const handleInputChange = event => {
    setNewName({
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async event => {
    try {
      await editUsername()

      redirect('/user')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form>
        <input onChange={handleInputChange} onSubmit={handleSubmit} type="text" name="username" placeholder="Enter a Name" />
      </form>
    </>
  )
}

export default ChangeUser
