import React from 'react'
import styles from './header.module.css'
import { FaGithub, FaTwitter } from 'react-icons/fa'

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
      <div />
      <div className={styles.headerContent}>
        <HeaderLink name="Home" link="../" />
        <HeaderLink name="Projects" link="../" />
        <HeaderLink name="About Me" link="../" />
      </div>
      <div className={styles.headerContent}>
        <HeaderIcon link="../">
          <FaGithub />
        </HeaderIcon>
        <HeaderIcon link="../">
          <FaGithub />
        </HeaderIcon>
      </div>
    </div>
  )
}

export default Header
