import React from 'react'
import styles from '../styles/Navbar.module.css'

export function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <img src="icons/the-tree.svg" alt="The Tree" />
      <div className={styles.navbar}>
        <div>
          <button type="button">Início</button>
          <button type="button">Meus jogos</button>
          <button type="button">Procurar jogos</button>
        </div>

        <div className={styles.signButton}>
          <button type="button">Login</button>
          <button type="button">SignUp</button>
        </div>
      </div>
    </div>
  )
}
