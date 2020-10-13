import React from 'react'
import '../src/App.css'

class Menu extends React.Component {
  render() {
  return (
    <div className = "menu">
      <div className = 'main'>
        menu;
      </div>
      <div className = 'food'>
        <figure>
          <img src = 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt="food"></img>
          <figcaption>VEgetable lot, Ksh.1500</figcaption>
        </figure>
        <figure>
          <img src = 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt="food"></img>
          <figcaption>Vegetable salad, Ksh.1050</figcaption>
        </figure>
        <figure>
          <img src = 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt="food"></img>
          <figcaption>Grilled steak with vegetables, Ksh.1950</figcaption>
        </figure>
      </div>
    </div>
  )
  }
}
export default Menu;