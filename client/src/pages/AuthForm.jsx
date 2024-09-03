import { useState } from "react"
import { useMutation } from "@apollo/client"
import { useNavigate } from "react-router-dom"

import { LOGIN_USER, REGISTER_USER } from '../graphql/mutations'
import { useStore } from "../store"

const initialFormData = {
  username: '',
  email: '',
  password: '',
  isLogin: true
}

function AuthForm() {
  const [formData, setFormData] = useState(initialFormData)
  const { setState } = useStore()

  const [loginUser] = useMutation(LOGIN_USER, {
    variables: formData
  })

  const [registerUser] = useMutation(REGISTER_USER, {
    variables: formData
  })

  const navigate = useNavigate()

  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      let res;

      if (formData.isLogin) {
        res = await loginUser()
        await setState(oldState => ({
          ...oldState,
          user: res.data.loginUser.user
        }))
      } else {
        res = await registerUser()
        await setState(oldState => ({
          ...oldState,
          user: res.data.registerUser.user
        }))
      }

      navigate('/user')
    } catch (error) {
      console.log(error)
      setFormData({
        ...formData,
      })
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} type="text" name="username" placeholder="Enter a Username" />
      <input onChange={handleInputChange} type="email" name="email" placeholder="Enter an email" />
      <input onChange={handleInputChange} type="password" name="password" placeholder="Enter a password" />
      <button>Submit</button>
    </form>
  )
}

export default AuthForm
