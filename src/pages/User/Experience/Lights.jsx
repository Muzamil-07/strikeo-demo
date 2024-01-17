/* eslint-disable react/no-unknown-property */
import { useHelper } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useLayoutEffect, useMemo, useRef } from 'react'
import {
  DirectionalLightHelper,
  PointLightHelper,
  SpotLightHelper
} from 'three'

const settings = {
  directionalLight: {
    intensity: 2
  },
  pointLight: {
    intensity: 0.7,
    // color: 'rgb(198, 194, 141)',
    // color: 'rgb(255, 251, 197)',
    color: 'white',
    castShadow: false
  }
}
const SpotLights = () => {
  const spotLight1 = useRef(null)
  const spotLight2 = useRef(null)
  const spotLight3 = useRef(null)
  const spotLight4 = useRef(null)
  // useHelper(spotLight1, SpotLightHelper, 4, 'yellow')
  // useHelper(spotLight2, SpotLightHelper, 4, 'red')
  // useHelper(spotLight3, SpotLightHelper, 4, 'red')
  // useHelper(spotLight4, SpotLightHelper, 4, 'red')

  useLayoutEffect(() => {
    // spotLight1.current.target.position.set(0, 1, -125)
    // spotLight1.current.target.updateMatrixWorld()
    // spotLight3.current.target.position.set(4, -10, -40)
    // spotLight3.current.target.updateMatrixWorld()
    // spotLight4.current.target.position.set(-8, -12, -40)
    // spotLight4.current.target.updateMatrixWorld()
  }, [])

  return (
    <>
      <spotLight
        ref={spotLight2}
        color='#FFDB90'
        position={[0, 25, 15]}
        angle={0.6}
        intensity={4}
        distance={90}
        penumbra={1}
      />
    </>
  )
}
const PointLights = () => {
  const pointLight1 = useRef(null)
  const pointLight2 = useRef(null)
  const pointLight3 = useRef(null)
  const pointLight4 = useRef(null)
  const pointLight5 = useRef(null)
  const pointLight6 = useRef(null)
  const pointLight7 = useRef(null)
  const pointLight8 = useRef(null)
  const pointLight9 = useRef(null)
  // useHelper(pointLight1, PointLightHelper, 2, 'red')
  useHelper(pointLight2, PointLightHelper, 2, 'yellow')
  // useHelper(pointLight3, PointLightHelper, 2, 'green')
  // useHelper(pointLight4, PointLightHelper, 2, 'orange')
  useHelper(pointLight5, PointLightHelper, 2, 'blue')
  // useHelper(pointLight6, PointLightHelper, 2, 'cyan')
  // useHelper(pointLight7, PointLightHelper, 2, 'blue')
  // useHelper(pointLight8, PointLightHelper, 2, 'cyan')
  // useHelper(pointLight9, PointLightHelper, 2, 'green')

  return (
    <>
      {/* FRONT LIGHTS */}
      <pointLight
        castShadow={settings.pointLight.castShadow}
        ref={pointLight5}
        // position={[-27.5, 16, -17.5]}
        position={[-17, 18, 8]}
        color={'#FFDB90'}
        distance={55}
        intensity={3}
      />

      {/* <pointLight
        castShadow={settings.pointLight.castShadow}
        ref={pointLight3}
        position={[-10, 16, -15]}
        color={'#FFDB90'}
        distance={26}
        intensity={3}
      /> */}

      <pointLight
        castShadow={settings.pointLight.castShadow}
        ref={pointLight2}
        // position={[27, 16, -17.5]}
        position={[17, 18, 8]}
        color={'#FFDB90'}
        distance={55}
        intensity={3}
      />

      {/* <pointLight
        castShadow={settings.pointLight.castShadow}
        ref={pointLight4}
        position={[10, 16, -15]}
        color={'#FFDB90'}
        distance={26}
        intensity={3}
      /> */}

      {/* SIDE LIGHTS */}
      {/* <pointLight
        ref={pointLight1}
        position={[-23, 13, -1.5]}
        color='#FFDB90'
        intensity={10}
        distance={24}
      />

      <pointLight
        ref={pointLight6}
        position={[16.5, 13, 1.5]}
        color='#FFDB90'
        intensity={8}
        distance={26}
      /> */}

      {/* BACK LIGHTS */}
      {/* <pointLight
        ref={pointLight7}
        position={[-23, 17, 22]}
        color='#FFDB90'
        intensity={8}
        distance={30}
      />

      <pointLight
        ref={pointLight8}
        position={[22.5, 17, 22]}
        color='#FFDB90'
        intensity={8}
        distance={30}
      />
      <pointLight
        ref={pointLight9}
        position={[0, 17, 22]}
        color='#FFDB90'
        intensity={8}
        distance={30}
      /> */}
    </>
  )
}

const DirectionalLights = () => {
  const dirLight1 = useRef(null)
  const dirLight2 = useRef(null)
  const dirLight3 = useRef(null)
  const dirLight4 = useRef(null)
  const dirLight5 = useRef(null)

  useHelper(dirLight1, DirectionalLightHelper, 3, 'blue')
  useHelper(dirLight2, DirectionalLightHelper, 3, 'yellow')
  useHelper(dirLight3, DirectionalLightHelper, 3, 'green')
  useHelper(dirLight4, DirectionalLightHelper, 3, 'orange')
  useHelper(dirLight5, DirectionalLightHelper, 3, 'cyan')

  useLayoutEffect(() => {
    dirLight2.current.target.position.set(0, 0, -70)
    dirLight2.current.target.updateMatrixWorld()
  }, [])
  return (
    <>
      {/* <directionalLight
  ref={dirLight1}
  position={[0, 40, 0]}
  color='white'
  intensity={settings.directionalLight.intensity}
/> */}
      {/* <directionalLight
        ref={dirLight2}
        position={[0, 10, 0]}
        color='#FFDB90'
        intensity={0.5}
      /> */}
      {/* <directionalLight
        ref={dirLight3}
        position={[-7, 7, 7]}
        color='white'
        intensity={settings.directionalLight.intensity}
      />
      <directionalLight
        ref={dirLight4}
        position={[7, 7, -7]}
        color='white'
        intensity={settings.directionalLight.intensity}
      />
      <directionalLight
        ref={dirLight5}
        position={[-7, 7, -7]}
        color='white'
        intensity={settings.directionalLight.intensity}
      /> */}
    </>
  )
}
const Lights = () => {
  return (
    <>
      <PointLights />
      {/* <SpotLights /> */}
      {/* <DirectionalLights /> */}
    </>
  )
}

export default Lights
