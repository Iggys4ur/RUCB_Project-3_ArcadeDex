import { Routes, Route } from "react-router-dom"
import axios from "axios"

import Header from "./components/Header"

import home from "./pages/home"
import AuthForm from "./pages/AuthForm"
import UserPage from "./pages/UserPage"
import { useStore } from "./store"
import Protect from "./components/Protect"

function App() {
  const { state } = useStore()
  const res = async () => {
    const response = await axios({
      url: '/'
    })
    return response.data
  }

  return (
    <>
      {state.loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}

      <Header />

      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/auth" element={(
          <Protect requireAuth={false}>
            <AuthForm />
          </Protect>
        )} />
        <Route path="/user" element={(
          <Protect requireAuth={true}>
            <UserPage />
          </Protect>
        )} />
      </Routes>
    </>
  )
}

export default App
