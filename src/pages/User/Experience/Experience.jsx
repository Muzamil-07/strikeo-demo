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
  OrbitControls,
  PointerLockControls,
  Preload,
  SoftShadows,
  Text,
  useGLTF
} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import Lights from './Lights'
import { Physics } from '@react-three/rapier' // Components for handling physics.
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

const Scene = () => {
  const keyboard = useKeyboard() // Hook to get keyboard input
  const mouse = useMouseCapture() // Hook to get mouse input

  return (
    <group>
      {/* <Lights /> */}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <BakedStore scale={[12, 10, 10]} rotation-y={Math.PI / 2} />
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
      <Player walk={5} jump={5} input={() => getInput(keyboard, mouse)} />
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

  return (
    <>
      <Header />
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
            <Scene />
          </Physics>
          <Preload all />
        </Suspense>
      </Canvas>

      <Controls />
      <Footer />
    </>
  )
}

export default Experience
