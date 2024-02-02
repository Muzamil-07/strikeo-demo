/* eslint-disable react/no-unknown-property */
import {
  AdaptiveDpr,
  AdaptiveEvents,
  BakeShadows,
  Environment,
  FirstPersonControls,
  Float,
  FlyControls,
  Html,
  KeyboardControls,
  OrbitControls,
  PointerLockControls,
  Preload,
  SoftShadows,
  Text,
  useGLTF
} from '@react-three/drei'
import { EcctrlAnimation, EcctrlJoystick } from 'ecctrl'
import * as THREE from 'three'

import { Perf } from 'r3f-perf'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import Lights from './Lights'
import { CuboidCollider, Physics } from '@react-three/rapier' // Components for handling physics.
import { useMouseCapture } from './utils/useMouseCapture'
import { useKeyboard } from './utils/useKeyboard'
import { Player } from './Player'

import Loader3d from './Loader/Loader3d'
import { SolarPannels } from './Items/SolarPannels/SolarPannels'
import Barriers from './Barriers'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import {
  useGetAllCategoriesQuery,
  useGetCartQuery,
  useGetFavouritesQuery,
  useRemoveItemFromCartMutation,
  useRemoveItemFromFavouritesMutation
} from '../../../services/nodeApi'
import ShoppingCart from '../../../components/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../../../redux/slices/Cart'
import Favourites from '../../../components/Favourites'
import { setFavourites } from '../../../redux/slices/Favourite'
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom'
import { BakedStore } from './Store/BakedStore'
import Controls from '../components/Controls/Controls'
import { setContentVisibilty } from '../../../redux/slices/ContentVisibility'
import { Character } from './Character'
import Ecctrl from 'ecctrl'
import RoughPlane from './RoughPlane'
import { Joystick } from 'react-joystick-component'
import { OptimizeStore } from './Store/OptimizeStore'

// Function to get player input from keyboard and mouse
function getInput (keyboard, mouse, joystick) {
  let [x, y, z] = [0, 0, 0]
  // Checking Joystick Movements
  if (joystick && joystick.type !== 'stop') {
    // console.log('JOYSTICK:', joystick)
    if (joystick.direction === 'BACKWARD') z += 1.0 // Move backward
    if (joystick.direction === 'FORWARD') z -= 1.0 // Move forward
    if (joystick.direction === 'RIGHT') x += 6.0 // Move right
    if (joystick.direction === 'LEFT') x -= 6.0 // Move left
  }
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
        position={[0, 10, 42]}
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
        geometry={[80, 100]}
        opacity={0}
        rotation={[0, Math.PI / 2, 0]}
      />
      {/* RIGHT */}
      <Barriers
        position={[26, 10, 8]}
        transparent={true}
        geometry={[80, 50]}
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

const Scene = ({ joystickMovements }) => {
  const keyboard = useKeyboard() // Hook to get keyboard input
  const mouse = useMouseCapture() // Hook to get mouse input

  // console.log('KEYBOARD:----------------', keyboard)
  return (
    <group>
      {/* <Lights /> */}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      {/* <BakedStore scale={[12, 10, 10]} rotation-y={Math.PI / 2} /> */}
      <OptimizeStore scale={[12, 10, 10]} rotation-y={Math.PI / 2} />
      <Boundries />
      <Environment files={'gear_store_1k.hdr'} path='/' />
      {/* <Environment files={'thatch_chapel_1k.hdr'} path='/' /> */}
      <Text
        position={[0, 9.3, 3]}
        font='/fonts/bangers-v20-latin-regular.woff'
        fontSize={1}
        color='white'
      >
        Click on Products to shop!
      </Text>
      <Player
        walk={5}
        jump={5}
        input={() => getInput(keyboard, mouse, joystickMovements)}
      />
      {/* <SolarPannels scale={5} position={[0, 12, 0]} /> */}
    </group>
  )
}

const Experience = ({ setContentVisibility }) => {
  // setContentVisibility(false)
  const dispatch = useDispatch()
  // localStorage.setItem('contentvisibilty', true)
  useEffect(() => {
    dispatch(setContentVisibilty(false))
  }, [])

  const [joystickMovements, setJoystickMovements] = useState(null)

  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] },
    // Optional animation key map
    { name: 'action1', keys: ['1'] },
    { name: 'action2', keys: ['2'] },
    { name: 'action3', keys: ['3'] },
    { name: 'action4', keys: ['KeyF'] }
  ]
  const characterURL = '/Floating Character.glb'

  // Prepare and rename your character animations here
  const animationSet = {
    idle: 'Idle',
    walk: 'Walk',
    run: 'Run',
    jump: 'Jump_Start',
    jumpIdle: 'Jump_Idle',
    jumpLand: 'Jump_Land',
    fall: 'Climbing', // This is for falling from high sky
    // Currently support four additional animations
    action1: 'Wave',
    action2: 'Dance',
    action3: 'Cheer',
    action4: 'Attack(1h)' // This is special action which can be trigger while walking or running
  }
  const handleMove = e => {
    // console.log(e)
    setJoystickMovements(e)
  }
  const handleStop = e => {
    // console.log(e)
    setJoystickMovements(e)
  }
  const handleStart = e => {
    // console.log(e)
    setJoystickMovements(e)
  }
  return (
    <>
      <Header />
      {/* <EcctrlJoystick
        joystickBaseProps={{
          receiveShadow: true,
          material: new THREE.MeshStandardMaterial({ color: 'grey' })
        }}
      ></EcctrlJoystick> */}
      <div
        style={{
          // position: 'absolute',
          display: 'flex',
          height: '98vh',
          justifyContent: 'center',
          alignItems: 'end',
          zIndex: 300000
        }}
      >
        <Joystick
          size={70}
          throttle={1}
          // baseColor='red'
          // stickColor='blue'
          move={handleMove}
          stop={handleStop}
          start={handleStart}
        ></Joystick>
      </div>
      <Canvas
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed'
        }}
        camera={{
          fov: 35,
          near: 0.1,
          far: 1000,
          position: [0, 0, 35]
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<Loader3d />}>
          {/* <Perf position='top-left' /> */}
          <Physics>
            <Scene joystickMovements={joystickMovements} />
            {/* <RoughPlane /> */}
            {/* <KeyboardControls map={keyboardMap}>
              <Ecctrl
                maxVelLimit={5}
                jumpVel={4}
                position={[0, 20, 35]}
                // floatHeight={3}
                // capsuleRadius={3}
                // capsuleHalfHeight={2}
                characterInitDir={3.14159}
                camInitDir={{ x: 0, y: 3.14159, z: 0 }}
                // springK={3}
                dampingC={0.5}
                mode='PointToMove'
              >
                <EcctrlAnimation
                  characterURL={characterURL} // Must have property
                  animationSet={animationSet} // Must have property
                >
                  <Character />
                </EcctrlAnimation>
              </Ecctrl>
            </KeyboardControls> */}
          </Physics>
          <Preload all />
        </Suspense>
      </Canvas>

      {/* <Controls /> */}
      {/* <Footer /> */}
    </>
  )
}

export default Experience
