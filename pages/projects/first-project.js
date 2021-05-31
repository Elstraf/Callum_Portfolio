import Header from '../../components/Header'
import styles from '../../components/blogpost.module.css'
import React from 'react'

export default function FirstProject() {
  return (
    <>
      <Header />

      <h1>
        <center>
          <b>Demonstrationm of the working App</b>
        </center>
      </h1>

      <h2>Description of the app</h2>
      <iframe width="420" height="315" src="https://www.youtube.com/embed/9uneoumqnKE"></iframe>
      <p>
        This is the app that I developed for my masters android app module.The app allows users to sign into a database
        look at workouts that they can use, send images that all the other users can see and book times to use the gym.
      </p>

      <h2>Key Features</h2>
      <p>
        <ul>
          <li> Login System </li>
          <li> Workout Programs </li>
          <li> Sending Images to a database </li>
          <li> Calendar Booking </li>
        </ul>
      </p>
    </>
  )
}
