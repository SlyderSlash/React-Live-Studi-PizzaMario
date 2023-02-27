import React from 'react'

export default function NavBar() {
  return (
    <>
    <nav className='navbar'>
        <logo className='logoDiv'>
            <img
            className='logo' 
            alt='pizzaLogo' 
            src='pizz.jpg'
            />
            <p>Reac'tiv Pizz</p>
        </logo>
        <div className='links'>
    <div><a href='/Delivery'>Delivery</a></div>
    <div><a href='/List'>Pizza List</a></div>
    <div><a href='/Pomme'>Pomme</a></div>
        </div>
    </nav>
    </>
  )
}
