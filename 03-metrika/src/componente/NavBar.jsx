import React from "react"
import "../Styles/NavBar.css"


export const NavBar = () => {
  return (
    <nav className="navbar bg-white px-4 d-flex justify-content-between align-items-center">
      <h1 className="m-0 logo">Metrika</h1>

      <div className="d-flex gap-3">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-google"></i>
        <i className="bi bi-linkedin"></i>
        <i className="bi bi-behance"></i>
      </div>
    </nav>
  )
}
