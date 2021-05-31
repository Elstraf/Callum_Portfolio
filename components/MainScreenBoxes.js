import React from 'react'
import styles from './flex.module.css'

function BoxComponent({ children, name, image }) {
  return <div className={styles.flexItem}>{children}</div>
}

const MainScreenBoxes = () => {
  return (
    <div className={styles.flexContainer}>
      <a id="All_Projects"></a>
      <a href="projects\first-project">
        <BoxComponent name="lord queef" image="\Images\test.jpg">
          TEST
        </BoxComponent>
      </a>

      <a href="projects/goap-implementation">
        <BoxComponent name="lord queef">
          TEST
          <img src="images/test.png" width="100" height="100" alt="Testing Images"></img>
        </BoxComponent>
      </a>
    </div>
  )
}

export default MainScreenBoxes
