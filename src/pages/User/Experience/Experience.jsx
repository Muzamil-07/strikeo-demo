/* eslint-disable react/no-unknown-property */
import {
  AdaptiveDpr,
  BakeShadows,
  Environment,
  FirstPersonControls,
  FlyControls,
  Html,
  OrbitControls,
  PointerLockControls,
  Preload,
  SoftShadows,
  useGLTF
} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import Lights from './Lights'
import { TableWithLogo } from './Items/Table'
import { Bike } from './Items/Automotive/Bike'
import { Rack } from './Items/Rack'
import { MannequinWithHelmet } from './Items/Mannequins/MannequinWithHelmet'
import { BlueHelmet } from './Items/Helmets/BlueHelmet'
import { GreenHelmet } from './Items/Helmets/GreenHelmet'
import { ShopSignBoard } from './ShopSignBoard'
import { Physics } from '@react-three/rapier' // Components for handling physics.
import { useMouseCapture } from './utils/useMouseCapture'
import { useKeyboard } from './utils/useKeyboard'
import { Player } from './Player'
import { BlueBag } from './Items/Bags/BlueBag'
import Loader from '../../../components/Loader'
import { BlackBag } from './Items/Bags/BlackBag'
import { TestModels } from './Test'
import { BlackShoes } from './Items/Shoes/BlackShoes'
import Loader3d from './Loader/Loader3d'
import { Setup } from './Items/Computer/Setup'
import { FootballBlack } from './Items/Sports/FootBallBlack'
import { BasketBall } from './Items/Sports/BasketBall'
import { VarietyBalls } from './Items/Sports/VarietyBalls'
import { VollyBall } from './Items/Sports/VollyBall'
import { Ruggby } from './Items/Sports/Ruggby'
import { Bowling } from './Items/Sports/Bowling'
import { BaseBallBat } from './Items/Sports/BaseBallBat'
import { Racket } from './Items/Sports/Racket'
import { FootBallGold } from './Items/Sports/FootBallGold'
import { TyreRack } from './Items/Automotive/TyreRack'
import { RedGloves } from './Items/Gloves/RedGloves'
import { Spray } from './Items/Lubricants/Spray'
import { CleanerTin } from './Items/Tins/CleanerTin'
import { Samsung } from './Items/SmartPhones/Samsung'
import { Laptop } from './Items/Computer/Laptop'
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
import { TextureRoom } from './Rooms/TextureRoom'
import { ClosedRoom } from './Rooms/ClosedRoom'
import { OptBike } from './Items/Automotive/OptBike'
import { SmallRack } from './Items/SmallRack'
import { Pads } from './Items/Sports/Pads'
import { Bat } from './Items/Sports/Bat'
import { CricketGloves } from './Items/Sports/Gloves'
import { CricketHelmet } from './Items/Sports/Helmet'
import { Cap } from './Items/Sports/Cap'
import { SimpleMannequinWithBandana } from './Items/Mannequins/SimpleMannequinWithBandana'
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom'
import { Store } from './Store/Store'

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

const Racks = () => {
  return (
    <>
      <Rack scale={9} position={[3, 0, -6]} rotation-y={Math.PI / 2} />
      <Rack scale={9} position={[14, 0, -6]} rotation-y={Math.PI / 2} />
      <Rack scale={9} position={[-31.5, 0, -6]} rotation-y={Math.PI / 2} />
      {/* <Rack scale={9} position={[-42, 0, -6]} rotation-y={Math.PI / 2} /> */}
      <SmallRack
        scale={9}
        position={[-29.6, 0, -25.6]}
        rotation-y={Math.PI / 2}
      />
    </>
  )
}
const SignBoards = () => {
  return (
    <>
      <ShopSignBoard
        scale={8}
        position={[-2, 2, -8]}
        rotation-y={Math.PI / 2}
      />
      <ShopSignBoard
        scale={8}
        position={[31.4, 2, -8]}
        rotation-y={Math.PI / 2}
      />
    </>
  )
}
const Helmets = () => {
  return (
    <>
      <BlueHelmet
        scale={8}
        position={[13, 15.7, -25.3]}
        rotation-y={Math.PI / 2}
      />
      <GreenHelmet
        scale={8}
        position={[18, 15.7, -25.3]}
        rotation-y={Math.PI / 2}
      />
      <BlueHelmet
        scale={8}
        position={[24, 15.7, -25.3]}
        rotation-y={Math.PI / 2}
      />
      <GreenHelmet
        scale={8}
        position={[29, 15.7, -25.3]}
        rotation-y={Math.PI / 2}
      />
    </>
  )
}
const Mannequins = () => {
  return (
    <>
      <MannequinWithHelmet
        scale={9.5}
        position={[14.5, 0, -2]}
        rotation-y={Math.PI / 2}
      />
      <SimpleMannequinWithBandana
        scale={9.5}
        position={[17.5, 0, 2]}
        rotation-y={Math.PI / 2}
      />
    </>
  )
}
const Gloves = () => {
  return (
    <>
      <RedGloves scale={0.22} position={[13.5, 12.5, -25]} rotation-y={0} />
      <RedGloves
        scale={0.22}
        position={[12, 12.5, -25]}
        rotation-y={-Math.PI}
      />

      <RedGloves scale={0.22} position={[18.5, 12.5, -25]} rotation-y={0} />
      <RedGloves
        scale={0.22}
        position={[17, 12.5, -25]}
        rotation-y={-Math.PI}
      />
      <RedGloves scale={0.22} position={[24.5, 12.5, -25]} rotation-y={0} />
      <RedGloves
        scale={0.22}
        position={[23, 12.5, -25]}
        rotation-y={-Math.PI}
      />
      <RedGloves scale={0.22} position={[29.5, 12.5, -25]} rotation-y={0} />
      <RedGloves
        scale={0.22}
        position={[28, 12.5, -25]}
        rotation-y={-Math.PI}
      />
    </>
  )
}
const Shoes = () => {
  return (
    <>
      <BlackShoes
        scale={8}
        position={[13, 8.5, -25.3]}
        rotation-y={Math.PI / 2}
      />
      <BlackShoes
        scale={8}
        position={[18, 8.5, -25.3]}
        rotation-y={Math.PI / 2}
      />
      <BlackShoes
        scale={8}
        position={[24, 8.5, -25.3]}
        rotation-y={Math.PI / 2}
      />
      <BlackShoes
        scale={8}
        position={[29, 8.5, -25.3]}
        rotation-y={Math.PI / 2}
      />
    </>
  )
}
const Bags = () => {
  return (
    <>
      <BlueBag scale={45} position={[24.3, 6.2, -25]} rotation={[0, 0, 0]} />
      <BlackBag scale={45} position={[29, 6.2, -25]} rotation={[0, 0, 0]} />
      <BlueBag scale={45} position={[13.3, 6.2, -25]} rotation={[0, 0, 0]} />
      <BlackBag scale={45} position={[18, 6.2, -25]} rotation={[0, 0, 0]} />
    </>
  )
}
const CleaningItems = () => {
  return (
    <>
      <Spray scale={12} position={[12.5, 1, -24]} />
      <CleanerTin scale={18} position={[14, 1, -24]} />
      <Spray scale={12} position={[17, 1, -24]} />
      <CleanerTin scale={18} position={[18.5, 1, -24]} />
      <Spray scale={12} position={[23, 1, -24]} />
      <CleanerTin scale={18} position={[24.5, 1, -24]} />
      <Spray scale={12} position={[28, 1, -24]} />
      <CleanerTin scale={18} position={[29.5, 1, -24]} />
    </>
  )
}
const SportsItem = () => {
  return (
    <>
      <VarietyBalls scale={1.1} position={[-21.8, 12.7, -25]} />
      <BasketBall scale={1.2} position={[-21.3, 9.7, -25]} />
      <VollyBall scale={1.4} position={[-16.3, 9.7, -25]} />
      <BasketBall scale={1.2} position={[-32, 5, -25]} />
      <VollyBall scale={1.4} position={[-27, 5, -25]} />
      <Ruggby scale={1.4} position={[-27, 9.7, -25]} />
      <Bowling scale={1.4} position={[-32, 9.7, -25]} />
      <BaseBallBat scale={1.3} position={[-25, 19.8, -28]} rotation-z={-0.3} />
      <BaseBallBat
        scale={1.3}
        position={[-26.5, 19.8, -28]}
        rotation-z={-0.3}
      />
      <Racket scale={1.3} position={[-33, 18.8, -28.5]} rotation-z={-0.3} />
      <Racket scale={1.3} position={[-33, 18.8, -28.5]} rotation-z={0.3} />
      <FootballBlack scale={1.12} position={[-21.3, 5, -25]} />
      <FootBallGold scale={1.12} position={[-16.3, 5, -25]} />
      <FootballBlack scale={1.12} position={[-27, 13.3, -25]} />
      <Ruggby scale={1.4} position={[-32, 13.3, -25]} />

      <Pads scale={5} position={[-31, 2.6, -24]} />
      <Pads scale={5} position={[-26, 2.6, -24]} />

      <Bat
        scale={11}
        position={[-14.2, 1.5, -24.3]}
        rotation={[0, 0, Math.PI / 2]}
      />
      <CricketGloves scale={8} position={[-16, 13.5, -24.3]} />
      <CricketHelmet
        scale={8}
        position={[-16, 15.5, -24.3]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Cap scale={8} position={[-21.5, 15.5, -24.5]} rotation={[0, 0.8, 0]} />
    </>
  )
}
const Boundries = () => {
  return (
    <>
      <Barriers
        position={[0, 10, 32]}
        transparent={true}
        geometry={[80, 50]}
        opacity={0}
      />
      <Barriers
        position={[0, 10, -21]}
        transparent={true}
        geometry={[80, 50]}
        opacity={0}
      />
      <Barriers
        position={[-29, 10, 8]}
        transparent={true}
        geometry={[80, 100]}
        opacity={0}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Barriers
        position={[30, 10, 8]}
        transparent={true}
        geometry={[80, 50]}
        opacity={0}
        rotation={[0, Math.PI / 2, 0]}
      />
    </>
  )
}

const Scene = () => {
  const keyboard = useKeyboard() // Hook to get keyboard input
  const mouse = useMouseCapture() // Hook to get mouse input

  return (
    <group>
      <Lights />
      {/* <Room scale={12} rotation-y={Math.PI / 2} /> */}
      {/* <ClosedRoom scale={[10, 10, 10.5]} rotation-y={Math.PI / 2} />
      <Boundries />

      <group position={[2, 0, 5]}>
        <Racks />
        <Gloves />
        <Shoes />
        <Bags />
        <CleaningItems />
        <SportsItem />
        <SignBoards />
        <Helmets />
      </group> */}

      {/* <Samsung scale={11} position={[4, 10.5, 1]} />
      <Samsung scale={11} position={[-4, 10.5, 1]} />
      <OptBike scale={7.5} position={[0, 0, 8]} rotation-y={Math.PI / 2} />
      <TyreRack scale={6} position={[26, 0, 0]} />
      <Mannequins />

      <TableWithLogo position={[0, 0, 0]} scale={10} rotation-y={Math.PI / 2} />

      <Setup scale={9} position={[-28, 0, -2]} rotation-y={Math.PI / 2} />
      <AdaptiveDpr pixelated /> */}

      {/* <Bike scale={7.5} position={[0, 0, 8]} rotation-y={Math.PI / 2} /> */}
      <Store scale={[10, 10, 10.5]} rotation-y={Math.PI / 2} />
      <Boundries />
      {/* <Environment files={'autumn_forest_04_1k.exr'} path='/' /> */}

      <Player walk={4} jump={5} input={() => getInput(keyboard, mouse)} />
      {/* <TestModels scale={5} rotation-x={Math.PI / 2} position={[15, 10, 0]} /> */}
      {/* <SolarPannels scale={5} position={[0, 12, 0]} /> */}
    </group>
  )
}

const Experience = () => {
  return (
    <>
      {/* <Header /> */}
      <Canvas
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed'
        }}
        camera={{
          fov: 65,
          near: 0.1,
          far: 1000
        }}
        shadows
      >
        <SoftShadows size={8} samples={40} focus={1} />
        <BakeShadows />
        <Suspense fallback={<Loader3d />}>
          <Perf position='top-left' />
          <Physics>
            <Scene />
          </Physics>
          <Preload all />
        </Suspense>
      </Canvas>

      {/* <Footer /> */}
    </>
  )
}

export default Experience
