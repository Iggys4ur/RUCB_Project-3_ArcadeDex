import { useState } from "react"

function AuthForm() {
  return (
    <form>
      <input type="text" name="username" placeholder="Enter a Username" />
      <input type="email" name="email" placeholder="Enter an email" />
      <input type="password" name="password" placeholder="Enter a password" />
    </form>
  )
}
