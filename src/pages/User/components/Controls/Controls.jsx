import React, { useEffect, useState } from 'react'
import styles from './controls.module.css'
import { CiDesktopMouse2 } from 'react-icons/ci'

const Controls = () => {
  const [showBlink, setShowBlink] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowBlink(false)
    }, 10000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div
      className={showBlink ? styles.blink : ''}
      style={{ userSelect: 'none' }}
    >
      {/* USE ARROW KEYS TO MOVE */}
      <div
        style={{ zIndex: 10000 }}
        className='fixed bottom-[13%]  left-0 px-12 bg-transparent text-white'
      >
        <div style={{ width: '150px', marginInline: 'auto' }}>
          <img
            src={'/arrowkeys.png'}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <p className='text-center mb-2 font-bold'>Use arrow keys to move.</p>
        <p className='text-center mb-2 font-bold'>
          Press Esc to lock camera rotation
        </p>
        <p
          className='text-center'
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}
        >
          <span
            style={{
              fontWeight: 'bold',
              marginTop: '-2px',
              marginRight: '5px'
            }}
          >
            <CiDesktopMouse2
              color='white'
              size={30}
              style={{ fontWeight: 'bold' }}
            />
          </span>
          Double click and drag on the screen to look around.
        </p>

        {/* DOUBLE CLICK USING MOUSE TO CHANGE CAMERA DIRECTION */}
        <div className='mt-2'></div>
      </div>
    </div>
  )
}

export default Controls
