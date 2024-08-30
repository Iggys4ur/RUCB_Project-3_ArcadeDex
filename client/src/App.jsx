import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"

import HomePage from "./pages/HomePage"
import AuthForm from "./pages/AuthForm"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </>
  )
}

export default App
