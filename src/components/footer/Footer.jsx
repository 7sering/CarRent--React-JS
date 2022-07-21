import React from 'react'
import styles from './Footer.module.css'
import Logo from '../../images/logo.png'
export const Footer = () => {
  return (
    <div className={styles.footer}>
            <div className={styles.container}>
                <img src={Logo} alt="Logo"/>
                <button>Share a care</button>
            </div>
    </div>
  )
}
