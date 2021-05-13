import React from 'react'
import styles from './flex.module.css'

function BoxComponent({ children, name }) {
  return <div className={styles.flexItem}>{children}</div>
}

const MainScreenBoxes = () => {
  return (
    <div className={styles.flexContainer}>
      <BoxComponent name="lord queef">MEMES</BoxComponent>
    </div>
  )
}

export default MainScreenBoxes
