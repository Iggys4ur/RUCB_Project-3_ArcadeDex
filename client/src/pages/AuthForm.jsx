import { useState, useEffect } from "react"
import { useMutation } from "@apollo/client"
import { Link, useNavigate, useLocation } from "react-router-dom"

import { LOGIN_USER, REGISTER_USER } from '../graphql/mutations'
import { useStore } from "../store"

const initialFormData = {
  username: '',
  email: '',
  password: '',
  isLogin: false
}

function AuthForm() {
  const [formData, setFormData] = useState(initialFormData)
  const [showForm, setShowForm] = useState(false)
  const { setState } = useStore()

  const [loginUser] = useMutation(LOGIN_USER, {
    variables: formData
  })

  const [registerUser] = useMutation(REGISTER_USER, {
    variables: formData
  })

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.search.includes('linked')) {
      setShowForm(true)
    }
  }, [])

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
      {showForm ? (
        <>
          <input onChange={handleInputChange} type="text" name="username" placeholder="Enter a Username" />
          <input onChange={handleInputChange} type="email" name="email" placeholder="Enter an email" />
          <input onChange={handleInputChange} type="password" name="password" placeholder="Enter a password" />
        </>
      ) : <Link to="http://localhost:3001/auth/steam">Link to Steam</Link>}

      <button>Submit</button>
    </form>
  )
}

export default AuthForm
