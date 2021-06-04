import Header from '../../components/Header'
import styles from '../../components/blogpost.module.css'

export default function mastersProjects() {
  return (
    <>
      <Header />
      <div className={styles.blogContent}>
        <h1>Can a Game Agent in a RTS learn to control units with Machine Learning? </h1>

        <h2>Project Overview</h2>
        <p>
          This project was done in like wiht my MA course at uni. The project was done as my final assesment. The main
          goals of the projects was:
          <li>To investigate previous research that has been done based on learning in a RTS</li>
          <li>To implement Machine Learning algorithmns into my scenario</li>
          <li>To explore the possibilities of using different algorthms to help further my outcome</li>
        </p>

        <h2>My Experiment</h2>
        <p>
          The agent will be using an edited version of the DeepMind minigame, in which the agent will be controlling a
          Reaper to kill Zerglings. Q-Learning is what the agent will be using for this project, the agent will only be
          able to pick from 2 different states these are attack and retreat. This was to make it a lot simpler on myself
          in the long run.
        </p>

        <h2>Video of the project</h2>
        <iframe width="420" height="315" src="https://www.youtube.com/embed/XkIJLB6TWcc"></iframe>

        <h3>
          <a href="../files/MastersProjectReport_s6083592_Callum_Powley.pdf">Masters Thesis Download</a>
        </h3>

        <h3>
          <a href="https://github.com/Elstraf/Masters-Project-">Source Code</a>
        </h3>
      </div>
    </>
  )
}
