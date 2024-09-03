import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"

import HomePage from "./pages/HomePage"
import AuthForm from "./pages/AuthForm"
import UserPage from "./pages/UserPage"
import { useStore } from "./store"
import Protect from "./components/Protect"

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
