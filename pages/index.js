import Head from 'next/head'
import Header from '../components/Header'
import FrontPageAnimation from '../components/FrontPageAnimation'
import MainScreenBoxes from '../components/MainScreenBoxes'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <style jsx global>
        {`
          body {
            background: none;
          }
        `}
      </style>
      <Header />
      <FrontPageAnimation />
      <MainScreenBoxes />
    </>
  )
}
