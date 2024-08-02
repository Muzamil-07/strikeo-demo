import React, { useEffect, useState, useRef } from 'react'
import styles from './controls.module.css'
import { CiDesktopMouse2 } from 'react-icons/ci'
import { isMobileDevice } from '../../Experience/utils/trackDevice'
import { IoGameController } from 'react-icons/io5'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import CategoriesDrawer  from '../../../User/NewCategories/NestedList'

const Controls = () => {
  const [showBlink, setShowBlink] = useState(true)
  const [modelToggle, setModelToggle] = useState(false)
  const modelRef = useRef(null)
  const modelToggleButtonRef = useRef(null)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowBlink(false)
    }, 10000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const handleModleToggle = event => {
    event.stopPropagation()
    setModelToggle(!modelToggle)
  }

  return (
    <div
      className={showBlink ? styles.blink : ''}
      style={{ userSelect: 'none' }}
    >
      {/* USE ARROW KEYS TO MOVE */}
      {!isMobileDevice() && showBlink && (
        <div
          style={{ zIndex: 10000 }}
          className='fixed bottom-[13%]  left-0 px-12 bg-transparent text-white'
        >
          {/* Content related to arrow keys or other instructions */}
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
        </div>
      )}

      {isMobileDevice() && showBlink && (
        <div
          style={{
            position: 'absolute',
            zIndex: 300000,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(39, 39, 39, 0.792)',
            borderRadius: '10%',
            paddingInline: '1rem',
            paddingBlock: '1rem'
          }}
        >
          <div style={{ width: '100px', marginInline: 'auto' }}>
            <img
              src={'/horizontalDrag.gif'}
              style={{ width: '50%', height: 'auto', marginInline: 'auto' }}
              />
          </div>
          <p className='text-center mb-2 font-bold text-white text-sm'>
            Drag Horizontally to change the camera view.
          </p>
          <div
            style={{
              width: '100px',
              marginInline: 'auto',
              marginTop: '1rem'
            }}
          >
            <img
              src={'/verticalDrag.gif'}
              style={{ width: '50%', height: 'auto', marginInline: 'auto' }}
              />
          </div>
          <p className='text-center mb-2 font-bold text-white text-sm'>
            Drag Vertically to move around in the store.
          </p>
        </div>
      )}

      {/* MODEL */}
      {modelToggle && (
        <div
          ref={modelRef}
          style={{
            position: 'absolute',
            zIndex: 300000,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(39, 39, 39, 0.792)',
            borderRadius: '10%',
            paddingInline: '1rem',
            paddingBlock: '1rem'
          }}
        >
          <div
            className='text-right'
            onPointerEnter={() => {
              document.body.style.cursor = 'pointer'
            }}
            onPointerLeave={() => {
              document.body.style.cursor = 'default'
            }}
            onClick={handleModleToggle}
          >
            <IoIosCloseCircleOutline
              color='white'
              size={25}
              fontWeight={'bold'}
            />
          </div>
          {isMobileDevice() && (
            <>
              <div style={{ width: '100px', marginInline: 'auto' }}>
                <img
                  src={'/horizontalDrag.gif'}
                  style={{ width: '50%', height: 'auto', marginInline: 'auto' }}
                />
              </div>
              <p className='text-center mb-2 font-bold text-white text-sm'>
                Drag Horizontally to change the camera view.
              </p>
              <div
                style={{
                  width: '100px',
                  marginInline: 'auto',
                  marginTop: '1rem'
                }}
              >
                <img
                  src={'/verticalDrag.gif'}
                  style={{ width: '50%', height: 'auto', marginInline: 'auto' }}
                />
              </div>
              <p className='text-center mb-2 font-bold text-white text-sm'>
                Drag Vertically to move around in the store.
              </p>
            </>
          )}

          {!isMobileDevice() && (
            <>
              <div style={{ width: '150px', marginInline: 'auto' }}>
                <img
                  src={'/arrowkeys.png'}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>

              <p className='text-center mb-2 font-bold text-white'>
                Use arrow keys to move.
              </p>
              <p className='text-center mb-2 font-bold text-white'>
                Press Esc to lock camera rotation
              </p>
              <p
                className='text-center'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  color: 'white'
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
            </>
          )}
        </div>
      )}

      {/* MODEL TOGGLE BUTTON */}
      <div
        ref={modelToggleButtonRef}
        className='model'
        style={{
          position: 'absolute',
          zIndex: 300000,
          top: '50%',
          right: '5%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(39, 39, 39, 0.992)',
          borderRadius: '50%',
          padding: '0.5rem'
        }}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={handleModleToggle}
      >
        <IoGameController color='white' size={30} />
      </div>
      <CategoriesDrawer/>
    </div>
  )
}

export default Controls
