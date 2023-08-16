import React from "react";
import {ActiveLink} from "./ActiveLink";
import styles from './Navbar.module.css';

const menuItems =[
  {
    text: 'Home',
    href:'/'
  },
  {
    text: 'About',
    href:'/about'
  },
  {
    text: 'Contact',
    href:'/contact'
  },
  {
    text: 'Pricing',
    href:'/pricing'
  },

 
]

export const Navbar = () => {
  return (
    <div>
        {/* Seguido de styles digito punto . y selecciono la ultima opción menu*-container de esta forma 
        lo va ha usar como una propiedad computada donde va buscar del objeto styles la propiedad
        computada menu-container */}
        <nav className={styles['menu-container']}>
          {menuItems.map((item) => <ActiveLink key={item.text} text={item.text} href={item.href}/>)}
            {/* Otra forma de hacer lo anterior */}
            {/* {menuItems.map(({text, href}) => <ActiveLink key={href} text={text} href={href}/>)} */}
        </nav>
    </div>
  )
}

