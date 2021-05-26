import React from 'react'
import styles from './flex.module.css'

function BoxComponent({ children, name, image }) {
  return <div className={styles.flexItem}>{children}</div>
}

const MainScreenBoxes = () => {
  return (
    <div className={styles.flexContainer}>
      <a href="http://google.com">
        <BoxComponent name="lord queef" image="\Images\test.jpg">
          TEST
        </BoxComponent>
      </a>
      <BoxComponent name="lord queef" image="\Images\test.jpg">
        TEST
        <img src="components\Images\test.jpg" alt="Testing Images"></img>
      </BoxComponent>
    </div>
  )
}

export default MainScreenBoxes
