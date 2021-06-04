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
        <BoxComponent name="lord queef">
          <div className={styles.flexImage}>
            <img src="images/Android.png" alt="Testing Images"></img>
          </div>
          <div className={styles.flexText}>Gym App</div>
        </BoxComponent>
      </a>

      <a href="projects/goap-implementation">
        <BoxComponent name="lord queef">
          <div className={styles.flexImage}>
            <img src="images/goap.png" alt="Testing Images"></img>
          </div>
          <div className={styles.flexText}>GOAP</div>
        </BoxComponent>
      </a>

      <a href="projects/masters-project">
        <BoxComponent name="lord queef">
          <div className={styles.flexImage}>
            <img src="images/machinelearning.jpg"></img>
          </div>
          <div className={styles.flexText}>Machine Learning Agent</div>
        </BoxComponent>
      </a>
    </div>
  )
}

export default MainScreenBoxes
