import { Html } from '@react-three/drei'
import React from 'react'

const Loader3d = () => {
  return (
    <Html
      as='div'
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div>
        <p style={{ width: '150px', height: '100px' }}>
          <img src='/loading.gif' alt='Loading' style={styles.loadingGif} />
        </p>
      </div>
    </Html>
  )
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh' // Adjust as needed
  },
  loadingGif: {
    width: '100%',
    height: 'auto' // Adjust the width of the loading GIF as needed
  }
}

export default Loader3d
