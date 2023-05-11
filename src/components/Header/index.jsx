import React from 'react'
import './styles.scss'

const Header = () => {
  return (
    <section className="header-container">
      <ul className="header-menu">
        <li>intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id="header-text"> Art Objects</h1>

    </section>
  )
}

export default Header