import { Html } from '@react-three/drei'
import React from 'react'
import styles from './loader3d.module.css'

const Loader3d = () => {
  return (
    <Html
      as='div'
      className={styles.loader}
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div className={styles.hexagon} aria-label='Animated hexagonal ripples'>
        <div className={styles.hexagon__group}>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
        </div>
        <div className={styles.hexagon__group}>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
        </div>
        <div className={styles.hexagon__group}>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
        </div>
        <div className={styles.hexagon__group}>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
        </div>
        <div className={styles.hexagon__group}>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
        </div>
        <div className={styles.hexagon__group}>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
          <div className={styles.hexagon__sector}></div>
        </div>
      </div>
      <p aria-label='Loading'>Loading</p>
    </Html>
  )
}

export default Loader3d
