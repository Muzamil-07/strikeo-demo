/* eslint-disable react/no-unknown-property */
import {
  AdaptiveDpr,
  AdaptiveEvents,
  Environment,
  Preload,
  SpotLight
} from '@react-three/drei'
import { useDispatch } from 'react-redux'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Suspense, useEffect, lazy, useRef } from 'react'
import { Physics } from '@react-three/rapier' // Components for handling physics.
import { useMouseCapture } from './utils/useMouseCapture'
import { useKeyboard } from './utils/useKeyboard'
import { Player } from './Player'
import ReactHowler from 'react-howler'

import Barriers from './Barriers'
import { setContentVisibilty } from '../../../redux/slices/ContentVisibility'

const MobileStore = lazy(() => import('./Store/MobileStore'))
import { isMobileDevice } from './utils/trackDevice'
import Controls from '../components/Controls/Controls'
import Navbar from '../mobile/components/Navbar/Navbar'
import Loader3d from './Loader/Loader3d'
import { LinearToneMapping, Object3D, Vector3 } from 'three'
import Lights from './Lights'
// import { TestStore } from './Store/TestStore'
// const DesktopStore = lazy(() => import('./Store/DesktopStore'))
// const TestStore = lazy(() => import('./Store/TestStore'))
// const DracoPlaza = lazy(() => import('./Store/DracoPlaza'))
// const DracoPlaza2 = lazy(() => import('./Store/DracoPlaza2'))
// const DracoPlaza3 = lazy(() => import('./Store/DracoPlaza3'))
// const DracoPlaza4 = lazy(() => import('./Store/DracoPlaza4'))
// const DracoPlaza5 = lazy(() => import('./Store/DracoPlaza5'))
// const DracoPlazaComplete = lazy(() => import('./Store/DracoPlazaComplete'))
// const AtlasStore = lazy(() => import('./Store/AtlassStore'))
// const UnOptStore = lazy(() => import('./Store/AtlassUnOptStore'))
// const PlazaNormal = lazy(() => import('./Store/PlazaNormal'))
// const FinalPlaza = lazy(() => import('./Store/FinalPlaza'))
const FinalPlazaTest = lazy(() => import('./Store/FinalPlazaTest'))

// Function to get player input from keyboard and mouse
function getInput (keyboard, mouse) {
  let [x, y, z] = [0, 0, 0]
  // Checking keyboard inputs to determine movement direction
  if (keyboard['ArrowDown']) z += 1.0 // Move backward
  if (keyboard['ArrowUp']) z -= 1.0 // Move forward
  if (keyboard['ArrowRight']) x += 6.0 // Move right
  if (keyboard['ArrowLeft']) x -= 6.0 // Move left
  if (keyboard[' ']) y += 1.0 // Jump

  // Returning an object with the movement and look direction
  return {
    move: [x, y, z],
    look: [mouse.x / window.innerWidth, mouse.y / window.innerHeight], // Mouse look direction
    running: keyboard['Shift'] // Boolean to determine if the player is running (Shift key pressed)
  }
}

const Boundries = () => {
  return (
    <>
      {/* BACK */}
      <Barriers
        position={[0, 10, 80]}
        transparent={true}
        geometry={[80, 50]}
        opacity={0}
      />
      {/* FRONT */}
      <Barriers
        position={[0, 10, -21]}
        transparent={true}
        geometry={[80, 50]}
        opacity={0}
      />
      {/* LEFT */}
      <Barriers
        position={[-27, 10, 8]}
        transparent={true}
        geometry={[150, 100]}
        opacity={0}
        rotation={[0, Math.PI / 2, 0]}
      />
      {/* RIGHT */}
      <Barriers
        position={[26, 10, 8]}
        transparent={true}
        geometry={[150, 50]}
        opacity={0}
        rotation={[0, Math.PI / 2, 0]}
      />

      {/* DESK AND BIKE */}
      <Barriers
        position={[0, 0, 15]}
        transparent={true}
        geometry={[15, 5]}
        opacity={0}
      />
      <Barriers
        position={[0, 0, -4]}
        transparent={true}
        geometry={[15, 5]}
        opacity={0}
      />
      <Barriers
        position={[-9, 0, 8]}
        transparent={true}
        geometry={[15, 5]}
        opacity={0}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Barriers
        position={[9, 0, 8]}
        transparent={true}
        geometry={[15, 5]}
        opacity={0}
        rotation={[0, Math.PI / 2, 0]}
      />

      {/* MANNEQUINS */}
      <Barriers
        position={[15, 0, 1]}
        transparent={true}
        geometry={[5, 5]}
        opacity={0}
        rotation={[0, -0.8, 0]}
      />
    </>
  )
}
const MobileBoundries = () => {
  return (
    <>
      {/* BACK */}
      <Barriers
        position={[0, 10, 70]}
        transparent={true}
        geometry={[80, 100]}
        opacity={0}
      />
      {/* FRONT */}
      <Barriers
        position={[0, 10, -21]}
        transparent={true}
        geometry={[80, 50]}
        opacity={0}
      />
      {/* LEFT */}
      <Barriers
        position={[-20, 10, 8]}
        transparent={true}
        geometry={[150, 100]}
        opacity={0}
        rotation={[0, Math.PI / 2, 0]}
      />
      {/* RIGHT */}
      <Barriers
        position={[22, 10, 8]}
        transparent={true}
        geometry={[150, 50]}
        opacity={0}
        rotation={[0, Math.PI / 2, 0]}
      />

      {/* DESK AND BIKE */}
      <Barriers
        position={[0, 0, 15]}
        transparent={true}
        geometry={[18, 5]}
        opacity={0}
      />
      <Barriers
        position={[0, 0, -4]}
        transparent={true}
        geometry={[18, 5]}
        opacity={0}
      />
      <Barriers
        position={[-9, 0, 5]}
        transparent={true}
        geometry={[18, 5]}
        opacity={0}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Barriers
        position={[9, 0, 5]}
        transparent={true}
        geometry={[18, 5]}
        opacity={0}
        rotation={[0, Math.PI / 2, 0]}
      />

      {/* MANNEQUINS */}
      <Barriers
        position={[15, 0, 1]}
        transparent={true}
        geometry={[5, 5]}
        opacity={0}
        rotation={[0, -0.8, 0]}
      />
    </>
  )
}

const Scene = () => {
  const keyboard = useKeyboard() // Hook to get keyboard input
  const mouse = useMouseCapture() // Hook to get mouse input

  // useFollowCam(cameraSetups)
  return (
    <group>
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      {isMobileDevice() ? (
        <MobileStore scale={[18, 10, 10]} rotation-y={Math.PI / 2} />
      ) : (
        // <DesktopStore scale={[12, 10, 10]} rotation-y={Math.PI / 2} />
        // <TestStore scale={[10, 10, 10]} rotation-y={Math.PI / 2} />
        // <DracoPlaza5 scale={[10, 10, 10]} rotation-y={Math.PI} />
        // <AtlasStore scale={[10, 10, 10]} rotation-y={Math.PI} />
        <FinalPlazaTest scale={[10, 10, 10]} rotation-y={Math.PI} />
      )}
      {/* {isMobileDevice() ? <MobileBoundries /> : <Boundries />} */}

      {/* <Environment files={'gear_store_1k.hdr'} path='/' /> */}
      {/* <Environment
        files={'thatch_chapel_1k.hdr'}
        path='/'
        background={true}
        blur={0.2}
      /> */}
      <Environment
        files={'metro_noord_2k.hdr'}
        path='/'
        background={true}
        blur={0.2}
      />
      {/* <Environment
        files={
          'above_the_clouds_sunny_evening_1K_cdbe8ff6-4b58-4f38-9553-29c67700133a (1).hdr'
        }
        path='/'
        background={true}
        blur={0.2}
      /> */}
      {/* <SpotLight
        color={'white'}
        position={[0, 25, 10]}
        distance={60}
        angle={Math.PI}
        attenuation={35}
        anglePower={5} // Diffuse-cone anglePower (default: 5)
      /> */}

      {/* <Lights /> */}
      <Player walk={5} jump={5} input={() => getInput(keyboard, mouse)} />
      {/* <SolarPannels scale={5} position={[0, 12, 0]} /> */}
    </group>
  )
}

const Experience = ({ setLoad }) => {
  // setContentVisibility(false)
  const dispatch = useDispatch()
  // localStorage.setItem('contentvisibilty', true)
  useEffect(() => {
    dispatch(setContentVisibilty(false))
  }, [])

  useEffect(() => {
    // const cursor = document.querySelector('.cursor')

    // document.addEventListener('mousemove', e => {
    //   cursor.setAttribute(
    //     'style',
    //     'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;'
    //   )
    // })

    // document.addEventListener('click', () => {
    //   cursor.classList.add('expand')

    //   setTimeout(() => {
    //     cursor.classList.remove('expand')
    //   }, 500)
    // })

    const coords = { x: 0, y: 0 }
    const circles = document.querySelectorAll('.circle')

    const colors = [
      '#ffb56b',
      '#fdaf69',
      '#f89d63',
      '#f59761',
      '#ef865e',
      '#ec805d',
      '#e36e5c',
      '#df685c',
      '#d5585c',
      '#d1525c',
      '#c5415d',
      '#c03b5d',
      '#b22c5e',
      '#ac265e',
      '#9c155f',
      '#950f5f',
      '#830060',
      '#7c0060',
      '#680060',
      '#60005f',
      '#48005f',
      '#3d005e'
    ]

    circles.forEach(function (circle, index) {
      circle.x = 0
      circle.y = 0
      circle.style.backgroundColor = colors[index % colors.length]
    })

    window.addEventListener('mousemove', function (e) {
      coords.x = e.clientX
      coords.y = e.clientY
    })

    function animateCircles () {
      let x = coords.x
      let y = coords.y

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + 'px'
        circle.style.top = y - 12 + 'px'

        circle.style.scale = (circles.length - index) / circles.length

        circle.x = x
        circle.y = y

        const nextCircle = circles[index + 1] || circles[0]
        x += (nextCircle.x - x) * 0.3
        y += (nextCircle.y - y) * 0.3
      })

      requestAnimationFrame(animateCircles)
    }

    animateCircles()
  }, [])
  return (
    <>
      <Navbar bgLight />
      <ReactHowler
        src='/music/shopping-mall-theme.mpeg'
        playing={true}
        loop={true}
      />
      {/* <div className='cursor'></div> */}
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <div class='circle'></div>
      <Canvas
        id='storeCanvas'
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          cursor: 'url(/pointer.png), auto'
          // cursor:
          //   'url(https://img.icons8.com/?size=50&id=PvxjhbARk0sD&format=png&color=000000/), auto'
        }}
        camera={{
          fov: 35,
          // near: 0.1,
          // far: 1000,
          position: [0, 0, 35]
        }}
        dpr={[1, 2]}
        // gl={{ toneMapping: LinearToneMapping }}
      >
        {/* <Perf position='top-left' /> */}
        <Suspense fallback={<Loader3d load={setLoad} />}>
          <Physics>
            <Scene />
          </Physics>
          <Preload all />
        </Suspense>
      </Canvas>
      <Controls />
    </>
  )
}

export default Experience
