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

  const toggleAuthState = (newValue) => {
    setFormData({
      ...formData,
      isLogin: newValue
    })
  }

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
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2 my-4">
      {showForm ? (
        <>
          <input onChange={handleInputChange} type="text" name="username" placeholder="Enter a Username" />
          <input onChange={handleInputChange} type="email" name="email" placeholder="Enter an email" />
          <input onChange={handleInputChange} type="password" name="password" placeholder="Enter a password" />
        </>
      ) : <Link className="p-2 justify-self-center bg-slate-900 text-white text-3xl rounded-lg" to="http://localhost:3001/auth/steam">Link to Steam</Link>}

      {formData.isLogin ? (
        <p className="text-center">Need an Account? <span className="text-red-600" onClick={() => toggleAuthState(false)}>Click Here</span></p>
      ) : (
        <p className="text-center">Already Registered? <span className="text-red-600" onClick={() => toggleAuthState(true)}>Click Here</span></p>
      )}

      <button>Submit</button>
    </form>
  )
}

export default AuthForm
