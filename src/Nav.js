import React from 'react'
import '../src/App.css'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
  return (
    <div className = "navbar">
      <div className='header'><h1>Lynette's Dishes</h1></div>
      <div className = 'nav'>
        <ul>
          <li><Link to = '/'>Home</Link></li>
          <li><Link to = '/menu'>Menu</Link></li>
          <li><Link to = '/contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
  }
}
export default Nav;