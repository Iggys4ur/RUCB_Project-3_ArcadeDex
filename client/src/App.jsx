import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"

import HomePage from "./pages/HomePage"
import AuthForm from "./pages/AuthForm"
import UserPage from "./pages/UserPage"
import { useStore } from "./store"

function App() {
  const { state } = useStore()
  return (
    <>
      {state.loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </>
  )
}

export default App
