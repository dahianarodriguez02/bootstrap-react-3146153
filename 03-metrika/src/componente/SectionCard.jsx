import React from 'react'
import "../Styles/SeccionCards.css"

export const SectionCard = () => {
  return (
    <div className="container mt-4">
      <div className="grid">

        <div className="item green">
          <i className="bi bi-journal-bookmark icon"></i>
          <h5>About Us</h5>
        </div>

        <div className="item green">
          <i className="bi bi-people-fill icon"></i>
          <h5>Our Team</h5>
        </div>

        <div className="item blue big">
          <i className="bi bi-card-image icon big-icon"></i>
          <h5>Our Works</h5>
        </div>

        <div className="item pink">
          <i className="bi bi-geo-alt-fill icon"></i>
          <h5>Contacts</h5>
        </div>

        <div className="item red wide">
          <i className="bi bi-download icon"></i>
          <h5>Resume</h5>
        </div>

        <div className="item orange">
          <i className="bi bi-pencil-fill icon"></i>
          <h5>Blog</h5>
        </div>

        <div className="item gold">
          <i className="bi bi-envelope icon"></i>
          <h5>Feedback</h5>
        </div>

      </div>
    </div>
  )
}