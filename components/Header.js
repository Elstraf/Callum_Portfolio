import React from 'react'
import styles from './header.module.css'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

function HeaderLink({ name, link }) {
  return (
    <div className={styles.headerLink}>
      <a href={link}>{name}</a>
    </div>
  )
}

function HeaderIcon({ children, link }) {
  return (
    <div className={styles.headerIcon}>
      <a href={link}>{children}</a>
    </div>
  )
}

const Header = () => {
  return (
    <div className={styles.header}>
      <div>ELSTRAF</div>
      <div className={styles.headerContent}>
        <HeaderLink name="Home" link="../" />
        <HeaderLink name="Projects" link="projects\first-project" />
        <HeaderLink name="About Me" link="../" />
      </div>
      <div className={styles.headerContent}>
        <HeaderIcon link="https://github.com/elstraf/">
          <FaGithub />
        </HeaderIcon>
        <HeaderIcon link="https://www.linkedin.com/in/callum-powley-0bb575106/">
          <FaLinkedin />
        </HeaderIcon>
      </div>
    </div>
  )
}

export default Header
