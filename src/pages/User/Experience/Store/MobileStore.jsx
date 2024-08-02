/* eslint-disable react/no-unknown-property */
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setContentVisibilty } from '../../../../redux/slices/ContentVisibility'

export default function MobileStore (props) {
  const { nodes, materials } = useGLTF('/models/Mobile_store.glb')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ceiling.geometry}
        material={materials['wall/roof']}
        position={[2.412, 1.467, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[3.233, 1.043, 1.472]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_logo.geometry}
        material={materials.PaletteMaterial001}
        position={[2.398, 2.277, 0.03]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.048}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp004.geometry}
        material={materials['roof lamps']}
        position={[-1.049, 1.804, 0.417]}
        rotation={[0, 0, Math.PI]}
        scale={0.591}
      />
      <RigidBody
        colliders='trimesh' // Type of collider shape for the wall (a cuboid in this case)
        lockTranslations // Lock translations to prevent movement during physics simulation
        lockRotations // Lock rotations to prevent unwanted rotations during physics simulation
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.floor.geometry}
          material={materials['floor ']}
          position={[-0.775, 0, -0.011]}
          scale={[3.191, 3.228, 3.226]}
        />
      </RigidBody>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.strips.geometry}
        material={materials['ground strips s']}
        position={[-0.112, 0.002, -0.027]}
        scale={0.061}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desk_logo.geometry}
        material={materials.logo}
        position={[-0.352, 0.543, -0.054]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.555}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WoodenTable_03_body.geometry}
        material={materials.WoodenTable_03}
        position={[-0.15, 0.251, 0.032]}
        rotation={[0, 1.571, 0]}
        scale={[0.733, 0.763, 0.763]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glasses.geometry}
        material={materials.GLASSES}
        position={[-0.082, 1.169, 1.754]}
        rotation={[-3.116, -0.772, -3.107]}
        scale={0.703}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bandana.geometry}
        material={materials['bandana white.001']}
        position={[-0.065, 1.1, 1.777]}
        rotation={[-1.577, 0.003, -2.439]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sign_board.geometry}
        material={materials['sign box left']}
        position={[1.915, 1.673, -1.452]}
        scale={[0.116, 0.116, 0.426]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sign_image.geometry}
        material={materials['sign image']}
        position={[1.811, 1.67, -1.456]}
        rotation={[0, 0, Math.PI / 2]}
        scale={0.654}
      />
      {/******************************* VARIETY BALLS *****************************/}

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.balls.geometry}
        material={materials['ball/glove/cap baked']}
        position={[1.911, 1.139, -1.528]}
        rotation={[0.293, 1.57, 0]}
        scale={0.289}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          localStorage.setItem(
            'state',
            JSON.stringify({
              category: 'sports',
              item: 'varietyballs'
            })
          )
          navigate('/products/category/sports', {
            state: {
              category: 'sports',
              item: 'varietyballs'
            }
          })
        }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.racks.geometry}
        material={materials['RACK baked']}
        position={[1.932, 0.009, 1.569]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.896}
      />
      {/************************ BIKE *************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          localStorage.setItem(
            'state',
            JSON.stringify({
              category: 'gears',
              item: 'bike'
            })
          )
          navigate('/products/category/automotive', {
            state: {
              category: 'gears',
              item: 'bike'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bike_tyre.geometry}
          material={materials['TYRE BIKE S']}
          position={[-0.793, 0.177, 0.149]}
          rotation={[0.001, -0.003, 0]}
          scale={0.583}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bike.geometry}
          material={materials.bike}
          position={[-0.789, 0.279, 0.186]}
          rotation={[3.137, -0.891, Math.PI]}
          scale={0.157}
        />
      </group>

      {/******************************* SETUP ******************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          localStorage.setItem(
            'state',
            JSON.stringify({
              category: 'Electronics',
              item: ''
            })
          )
          navigate('/products/category/Electronics', {
            state: {
              category: 'Electronics',
              item: ''
            }
          })
        }}
      >
        <group
          position={[0.29, 0.002, -1.893]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.68}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2001.geometry}
            material={materials['comp_desk_b.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2001_1.geometry}
            material={materials['comp_desk.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2001_2.geometry}
            material={materials['comp_desk_a.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2001_3.geometry}
            material={materials['comp_desk_c.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2001_4.geometry}
            material={materials['setup desk']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cpu.geometry}
          material={materials.cpu}
          position={[0.676, 0.645, -1.802]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wifi_device.geometry}
          material={materials.wifi}
          position={[0.689, 0.862, -1.795]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.856}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.setup.geometry}
          material={materials['tv s']}
          position={[0.067, 0.583, -1.691]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.856}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strips001.geometry}
          material={materials['ground strips s']}
          position={[-0.152, 0.518, -1.838]}
          scale={0.054}
        />
      </group>

      {/******************************* RACKETS *****************************/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Racket.geometry}
        material={materials['basebat baked']}
        position={[1.903, 0.866, -1.007]}
        rotation={[0.293, Math.PI / 2, 0]}
        scale={0.189}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          localStorage.setItem(
            'state',
            JSON.stringify({
              category: 'sports',
              item: 'racket'
            })
          )
          navigate('/products/category/sports', {
            state: {
              category: 'sports',
              item: 'racket'
            }
          })
        }}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buttons002.geometry}
        material={nodes.buttons002.material}
        position={[-0.084, 0.596, 1.764]}
        rotation={[Math.PI / 2, 0, 2.387]}
        scale={0.007}
      />

      {/******************************** SMART PHONES *****************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()
          localStorage.setItem(
            'state',
            JSON.stringify({
              category: 'Electronics',
              item: 'smartphones'
            })
          )
          navigate('/products/category/electronics', {
            state: {
              category: 'electronics',
              item: 'smartphones'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mobile_green.geometry}
          material={materials['mobile 2']}
          position={[-0.188, 0.712, 0.098]}
          rotation={[-Math.PI / 2, 0.392, Math.PI / 2]}
          scale={0.754}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mobile_purple.geometry}
          material={materials['mobile 1']}
          position={[-0.188, 0.711, -0.044]}
          rotation={[-Math.PI / 2, 0.392, Math.PI / 2]}
          scale={0.754}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0005.geometry}
          material={materials['mobile stand']}
          position={[-0.188, 0.654, -0.257]}
          scale={0.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0006.geometry}
          material={materials['mobile stand']}
          position={[-0.188, 0.654, -0.122]}
          scale={0.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0007.geometry}
          material={materials['mobile stand']}
          position={[-0.188, 0.654, 0.195]}
          scale={0.001}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0008.geometry}
          material={materials['mobile stand']}
          position={[-0.188, 0.654, 0.331]}
          scale={0.001}
        />
      </group>

      {/********************************* HELMETS *************************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()
          localStorage.setItem(
            'state',
            JSON.stringify({
              category: 'automotive',
              item: 'helmet'
            })
          )
          navigate('/products/category/automotive', {
            state: {
              category: 'automotive',
              item: 'helmet'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gold_helmet.geometry}
          material={materials['gold helmet baked']}
          position={[0.421, 1.151, 1.476]}
          rotation={[Math.PI, -0.891, Math.PI]}
          scale={0.2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.helmets.geometry}
          material={materials['helmet/gloves/can']}
          position={[1.915, 1.446, 1.315]}
          rotation={[-2.919, 0, -Math.PI]}
          scale={0.225}
        />
      </group>

      {/************************ CRICKET BAT  ***************************/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bats.geometry}
        material={materials['shoes/bat/pads baked']}
        position={[1.92, 0.443, -1.393]}
        rotation={[-Math.PI / 2, 0, -1.666]}
        scale={0.008}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          localStorage.setItem(
            'state',
            JSON.stringify({
              category: 'sports',
              item: 'bat'
            })
          )
          navigate('/products/category/sports', {
            state: {
              category: 'sports',
              item: 'bat'
            }
          })
        }}
      />
      {/******************************* FOOTBALL BLACK *****************************/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Footballs.geometry}
        material={materials['balls baked.001']}
        position={[1.941, 0.854, -1.422]}
        rotation={[0, 1.571, 0]}
        scale={0.138}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          localStorage.setItem(
            'state',
            JSON.stringify({
              category: 'sports',
              item: 'football'
            })
          )
          navigate('/products/category/sports', {
            state: {
              category: 'sports',
              item: 'football'
            }
          })
        }}
      />
      {/************************ CRICKET HELMET  ***************************/}

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sport_helmet.geometry}
        material={materials['ball/glove/cap baked']}
        position={[1.926, 1.372, -0.955]}
        rotation={[0.293, 1.57, 0]}
        scale={0.289}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          localStorage.setItem(
            'state',
            JSON.stringify({
              category: 'sports',
              item: 'helmet'
            })
          )
          navigate('/products/category/sports', {
            state: {
              category: 'sports',
              item: 'helmet'
            }
          })
        }}
      />

      {/************************ CRICKET CAP  ***************************/}

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cap.geometry}
        material={materials['ball/glove/cap baked']}
        position={[1.935, 1.36, -1.483]}
        rotation={[0.293, 1.57, 0]}
        scale={0.289}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          localStorage.setItem(
            'state',
            JSON.stringify({
              category: 'sports',
              item: 'cap'
            })
          )
          navigate('/products/category/sports', {
            state: {
              category: 'sports',
              item: 'cap'
            }
          })
        }}
      />
      {/******************************* CRICKET GLOVES *****************************/}

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sport_gloves.geometry}
        material={materials['ball/glove/cap baked']}
        position={[1.909, 1.214, -0.989]}
        rotation={[0.293, 1.57, 0]}
        scale={0.289}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          localStorage.setItem(
            'state',
            JSON.stringify({
              category: 'sports',
              item: 'gloves'
            })
          )
          navigate('/products/category/sports', {
            state: {
              category: 'sports',
              item: 'gloves'
            }
          })
        }}
      />
      {/******************************* BASEBALL BAT *****************************/}

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base_bat.geometry}
        material={materials['basebat baked']}
        position={[1.913, 0.502, -1.023]}
        rotation={[0.293, Math.PI / 2, 0]}
        scale={0.189}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          localStorage.setItem(
            'state',
            JSON.stringify({
              category: 'sports',
              item: 'baseballbat'
            })
          )
          navigate('/products/category/sports', {
            state: {
              category: 'sports',
              item: 'baseballbat'
            }
          })
        }}
      />
      {/************************ CRICKET PADS  ***************************/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pads.geometry}
        material={materials['shoes/bat/pads baked']}
        position={[1.92, 0.443, -1.393]}
        rotation={[-Math.PI / 2, 0, -1.666]}
        scale={0.008}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          localStorage.setItem(
            'state',
            JSON.stringify({
              category: 'sports',
              item: 'pads'
            })
          )
          navigate('/products/category/sports', {
            state: {
              category: 'sports',
              item: 'pads'
            }
          })
        }}
      />

      {/********************************* LUBRICANTS *************************************/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cans.geometry}
        material={materials['helmet/gloves/can']}
        position={[1.948, 0.153, 1.277]}
        rotation={[-2.919, 0, -Math.PI]}
        scale={0.225}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          localStorage.setItem(
            'state',
            JSON.stringify({
              category: 'gears',
              item: 'lubricants'
            })
          )
          navigate('/products/category/gears', {
            state: {
              category: 'gears',
              item: 'lubricants'
            }
          })
        }}
      />
      {/********************************  BAGS ***********************/}

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bags.geometry}
        material={materials.PaletteMaterial001}
        position={[2.398, 2.277, 0.03]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.048}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          localStorage.setItem(
            'state',
            JSON.stringify({
              category: 'backpack',
              item: 'bags'
            })
          )
          navigate('/products/category/Leisure & Travel', {
            state: {
              category: 'Leisure & Travel',
              item: 'bags'
            }
          })
        }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_logo002.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.037, 1.101, 1.813]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BikerJacket_Leather_0002.geometry}
        material={materials['manequins baked.001']}
        position={[0.113, 0.761, 1.709]}
        rotation={[3.139, 0.625, -3.108]}
        scale={[0.008, 0.006, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.window.geometry}
        material={materials['window color']}
        position={[-1.105, 1.306, 2.748]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.012, 0.012, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.walls.geometry}
        material={materials['brick wall baked.001']}
        position={[-1.171, 1.469, -3.231]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[3.191, 1, 1.47]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.window001.geometry}
        material={materials['window color']}
        position={[-1.068, 1.291, -2.483]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.012, 0.012, 0.009]}
      />
      <group
        position={[-2.587, 1.382, -2.441]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[3.191, 1, 1.41]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials['brick wall baked.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_1.geometry}
          material={materials['brick wall baked.001']}
        />
      </group>
      <group
        position={[-2.587, 1.386, 2.695]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[3.191, 1, 1.421]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials['brick wall baked.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010_1.geometry}
          material={materials['brick wall baked.001']}
        />
      </group>
      {/******************************* WATER MELONS *****************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          dispatch(setContentVisibilty(true))
          navigate('/products/category/Food Items', {
            state: {
              category: 'Food Items',
              item: 'melons'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.watermelon002.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.101, 0.243, -1.845]}
          rotation={[0.623, 0, 0]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.watermelon001.geometry}
          material={materials.Fruit_display_atlas}
          position={[-2.98, 0.284, -1.902]}
          rotation={[0.623, 0, 0]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.watermelon.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.205, 0.292, -1.895]}
          rotation={[2.49, 0.275, -2.937]}
          scale={0.035}
        />
      </group>
      {/******************************* PEARS *****************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()
          dispatch(setContentVisibilty(true))
          navigate('/products/category/Food Items', {
            state: {
              category: 'Food Items',
              item: 'pears'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pear011.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.188, 0.528, -1.944]}
          rotation={[0.625, 0, -0.421]}
          scale={0.517}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pear010.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.277, 0.476, -1.836]}
          rotation={[0.625, 0, 0.164]}
          scale={0.523}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pear009.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.129, 0.599, -2.009]}
          rotation={[0.625, 0, 0.336]}
          scale={0.611}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pear008.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.264, 0.598, -2.01]}
          rotation={[0.625, 0, -0.424]}
          scale={0.623}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pear007.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.277, 0.516, -1.891]}
          rotation={[0.625, 0, 0.164]}
          scale={0.523}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pear006.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.25, 0.554, -1.947]}
          rotation={[0.625, 0, -0.344]}
          scale={0.606}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pear005.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.121, 0.547, -1.952]}
          rotation={[0.625, 0, -0.755]}
          scale={0.548}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pear004.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.123, 0.468, -1.842]}
          rotation={[0.625, 0, 0.769]}
          scale={0.614}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pear003.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.192, 0.471, -1.839]}
          rotation={[0.625, 0, -0.594]}
          scale={0.604}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pear002.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.185, 0.582, -1.995]}
          rotation={[0.625, 0, -0.647]}
          scale={0.552}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pear001.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.209, 0.516, -1.897]}
          rotation={[0.625, 0, -0.421]}
          scale={0.517}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pear.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.14, 0.519, -1.895]}
          rotation={[0.625, 0, -0.036]}
          scale={0.601}
        />
      </group>

      {/******************************* ORANGES *****************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          dispatch(setContentVisibilty(true))
          navigate('/products/category/Food Items', {
            state: {
              category: 'Food Items',
              item: 'oranges'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Orange011.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.031, 0.521, -1.897]}
          rotation={[-2.539, 1.447, Math.PI]}
          scale={0.718}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Orange010.geometry}
          material={materials.Fruit_display_atlas}
          position={[-2.935, 0.553, -1.95]}
          rotation={[-2.539, 1.447, -Math.PI]}
          scale={0.827}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Orange009.geometry}
          material={materials.Fruit_display_atlas}
          position={[-2.872, 0.604, -2.025]}
          rotation={[-2.539, 1.447, -Math.PI]}
          scale={0.827}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Orange008.geometry}
          material={materials.Fruit_display_atlas}
          position={[-2.869, 0.474, -1.836]}
          rotation={[-2.539, 1.447, Math.PI]}
          scale={0.793}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Orange007.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.011, 0.595, -2.012]}
          rotation={[-2.539, 1.447, -Math.PI]}
          scale={0.795}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Orange006.geometry}
          material={materials.Fruit_display_atlas}
          position={[-2.873, 0.553, -1.95]}
          rotation={[-2.539, 1.447, -Math.PI]}
          scale={0.827}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Orange005.geometry}
          material={materials.Fruit_display_atlas}
          position={[-2.957, 0.518, -1.9]}
          rotation={[-2.539, 1.447, Math.PI]}
          scale={0.88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Orange004.geometry}
          material={materials.Fruit_display_atlas}
          position={[-2.887, 0.511, -1.89]}
          rotation={[-2.539, 1.447, Math.PI]}
          scale={0.88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Orange003.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.014, 0.481, -1.846]}
          rotation={[-2.539, 1.447, Math.PI]}
          scale={0.91}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Orange002.geometry}
          material={materials.Fruit_display_atlas}
          position={[-2.934, 0.474, -1.836]}
          rotation={[-2.539, 1.447, Math.PI]}
          scale={0.88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Orange001.geometry}
          material={materials.Fruit_display_atlas}
          position={[-2.935, 0.582, -1.993]}
          rotation={[-2.539, 1.447, Math.PI]}
          scale={0.88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Orange.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.011, 0.552, -1.949]}
          rotation={[-2.539, 1.447, Math.PI]}
          scale={0.88}
        />
      </group>
      {/******************************* MELONS *****************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          dispatch(setContentVisibilty(true))
          navigate('/products/category/Food Items', {
            state: {
              category: 'Food Items',
              item: 'melons'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.melon4.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.446, 0.223, -1.857]}
          rotation={[0.623, 0, 0]}
          scale={0.047}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.melon3.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.331, 0.226, -1.855]}
          rotation={[0.623, 0, 0]}
          scale={0.047}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.melon2.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.329, 0.289, -1.948]}
          rotation={[0.623, 0, 0]}
          scale={0.047}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.melon.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.446, 0.289, -1.948]}
          rotation={[0.623, 0, 0]}
          scale={0.047}
        />
      </group>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fruit_display.geometry}
        material={materials.Fruit_display_atlas}
        position={[-3.206, 0.531, -2.026]}
        rotation={[0, 1.571, 0]}
        scale={[0.626, 0.626, 0.722]}
      />
      {/******************************* DATES *****************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          dispatch(setContentVisibilty(true))
          navigate('/products/category/Food Items', {
            state: {
              category: 'Food Items',
              item: 'dates'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dates3.geometry}
          material={materials.Fruit_display_atlas}
          position={[-2.975, 0.898, -2.05]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.033}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dates2.geometry}
          material={materials.Fruit_display_atlas}
          position={[-2.975, 0.898, -1.983]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.033}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dates1.geometry}
          material={materials.Fruit_display_atlas}
          position={[-2.975, 0.899, -1.892]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.033}
        />
      </group>
      {/******************************* PISTACHIOS *****************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          dispatch(setContentVisibilty(true))
          navigate('/products/category/Food Items', {
            state: {
              category: 'Food Items',
              item: 'pistachios'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pistachio3.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.184, 0.898, -2.052]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.033}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pistachio2.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.184, 0.898, -1.982]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.033}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pistachio.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.184, 0.899, -1.892]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.033}
        />
      </group>

      {/******************************* ALMONDS *****************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          dispatch(setContentVisibilty(true))
          navigate('/products/category/Food Items', {
            state: {
              category: 'Food Items',
              item: 'almonds'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.almond3.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.433, 0.898, -2.036]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.033}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.almond2.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.433, 0.898, -1.966]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.033}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.almond1.geometry}
          material={materials.Fruit_display_atlas}
          position={[-3.433, 0.899, -1.892]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.033}
        />
      </group>

      {/******************************* APPLES *****************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          dispatch(setContentVisibilty(true))
          navigate('/products/category/Food Items', {
            state: {
              category: 'Food Items',
              item: 'apples'
            }
          })
        }}
      >
        <group
          position={[-3.379, 0.616, -2.041]}
          rotation={[0.625, 0, 0.308]}
          scale={1.18}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Fruit_display_atlas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Petole}
          />
        </group>
        <group
          position={[-3.527, 0.614, -2.049]}
          rotation={[0.625, 0, 0.323]}
          scale={1.147}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Fruit_display_atlas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Petole}
          />
        </group>
        <group
          position={[-3.378, 0.46, -1.838]}
          rotation={[0.625, 0, 1.399]}
          scale={1.083}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Fruit_display_atlas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Petole}
          />
        </group>
        <group
          position={[-3.389, 0.569, -1.995]}
          rotation={[0.625, 0, -0.766]}
          scale={0.86}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Fruit_display_atlas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Petole}
          />
        </group>
        <group
          position={[-3.535, 0.461, -1.837]}
          rotation={[0.625, 0, -0.036]}
          scale={0.971}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Fruit_display_atlas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Petole}
          />
        </group>
        <group
          position={[-3.374, 0.502, -1.891]}
          rotation={[0.625, 0, -1.601]}
          scale={1.125}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Fruit_display_atlas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Petole}
          />
        </group>
        <group
          position={[-3.374, 0.533, -1.946]}
          rotation={[0.625, 0, 0.672]}
          scale={0.878}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Fruit_display_atlas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Petole}
          />
        </group>
        <group
          position={[-3.531, 0.573, -1.992]}
          rotation={[0.625, 0, -1.188]}
          scale={1.014}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Fruit_display_atlas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Petole}
          />
        </group>
        <group
          position={[-3.524, 0.5, -1.892]}
          rotation={[0.625, 0, -1.294]}
          scale={1.031}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Fruit_display_atlas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Petole}
          />
        </group>
        <group
          position={[-3.532, 0.537, -1.943]}
          rotation={[0.625, 0, -0.842]}
          scale={0.743}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Fruit_display_atlas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Petole}
          />
        </group>
        <group
          position={[-3.456, 0.612, -2.05]}
          rotation={[0.625, 0, -0.517]}
          scale={1.056}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Fruit_display_atlas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Petole}
          />
        </group>
        <group
          position={[-3.462, 0.459, -1.838]}
          rotation={[0.625, 0, 0.327]}
          scale={0.914}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Fruit_display_atlas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Petole}
          />
        </group>
        <group
          position={[-3.465, 0.571, -1.994]}
          rotation={[0.625, 0, -0.036]}
          scale={0.934}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Fruit_display_atlas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Petole}
          />
        </group>
        <group
          position={[-3.465, 0.499, -1.893]}
          rotation={[0.625, 0, -0.687]}
          scale={0.984}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Fruit_display_atlas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Petole}
          />
        </group>
        <group
          position={[-3.452, 0.535, -1.944]}
          rotation={[0.625, 0, -1.51]}
          scale={0.787}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Fruit_display_atlas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Petole}
          />
        </group>
      </group>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Apple_Box_Material001_0003.geometry}
        material={materials.Fruit_display_atlas}
        position={[-3.204, 0.243, -1.922]}
        rotation={[-0.947, 0, Math.PI / 2]}
        scale={[0.049, 0.091, 0.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Apple_Box_Material001_0002.geometry}
        material={materials.Fruit_display_atlas}
        position={[-2.95, 0.508, -1.959]}
        rotation={[-0.968, 0, 0]}
        scale={[0.049, 0.049, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Apple_Box_Material001_0001.geometry}
        material={materials.Fruit_display_atlas}
        position={[-3.202, 0.509, -1.955]}
        rotation={[-0.946, 0, 0]}
        scale={[0.049, 0.049, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Apple_Box_Material001_0.geometry}
        material={materials.Fruit_display_atlas}
        position={[-3.455, 0.508, -1.963]}
        rotation={[-0.946, 0, 0]}
        scale={[0.049, 0.049, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_lantern001.geometry}
        material={materials.metal_glass}
        position={[-2.777, 1.877, -2.318]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_lantern.geometry}
        material={materials.metal_glass}
        position={[-3.625, 1.86, -2.32]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      {/******************************* KURTAS *****************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          dispatch(setContentVisibilty(true))
          navigate('/products/category/fashion', {
            state: {
              item: 'kurtas'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.yellowkurta.geometry}
          material={materials.Cos_atlas}
          position={[-3.265, 1.044, 2.257]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.007, 0.004, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whitekurta.geometry}
          material={materials.Cos_atlas}
          position={[-3.704, 1.044, 2.257]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.007, 0.004, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.brownkurta.geometry}
          material={materials.Cos_atlas}
          position={[-3.479, 1.044, 2.257]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.007, 0.004, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bluekurta.geometry}
          material={materials.Cos_atlas}
          position={[-3.056, 1.044, 2.257]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.007, 0.004, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.black_kurta.geometry}
          material={materials.Cos_atlas}
          position={[-3.895, 1.044, 2.257]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.007, 0.004, 0.007]}
        />
      </group>
      {/******************************* SUN CREAM *****************************/}

      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          dispatch(setContentVisibilty(true))
          navigate('/products/category/beauty', {
            state: {
              item: 'suncream'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sunscreen005.geometry}
          material={materials.Cos_atlas}
          position={[-4.253, 0.291, 2.297]}
          rotation={[-0.073, 0.622, 2.696]}
          scale={[0.004, 0.004, 0.003]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sunscreen004.geometry}
          material={materials.Cos_atlas}
          position={[-4.282, 0.287, 2.254]}
          rotation={[-0.05, 0.632, -2.014]}
          scale={[0.014, 0.014, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sunscreen003.geometry}
          material={materials.Cos_atlas}
          position={[-4.329, 0.291, 2.297]}
          rotation={[-0.073, 0.622, 2.696]}
          scale={[0.004, 0.004, 0.003]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sunscreen002.geometry}
          material={materials.Cos_atlas}
          position={[-4.359, 0.287, 2.254]}
          rotation={[-0.05, 0.632, -2.014]}
          scale={[0.014, 0.014, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sunscreen001.geometry}
          material={materials.Cos_atlas}
          position={[-4.413, 0.269, 2.278]}
          rotation={[-1.611, -0.019, -2.044]}
          scale={[0.014, 0.014, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sunscreen.geometry}
          material={materials.Cos_atlas}
          position={[-4.416, 0.321, 2.274]}
          rotation={[-1.63, -0.028, 2.652]}
          scale={[0.004, 0.004, 0.003]}
        />
      </group>
      {/******************************* LIPSTICKS *****************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          dispatch(setContentVisibilty(true))
          navigate('/products/category/beauty', {
            state: {
              item: 'lipsticks'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.StickColor001.geometry}
          material={materials.Cos_atlas}
          position={[-2.69, 0.834, 2.277]}
          rotation={[-Math.PI, 1.279, -Math.PI]}
          scale={[1.161, 1.111, 1.161]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.StickColor.geometry}
          material={materials.Cos_atlas}
          position={[-2.646, 0.836, 2.277]}
          rotation={[-Math.PI, 1.279, -Math.PI]}
          scale={[1.161, 1.111, 1.161]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lipstick_Adrienne002.geometry}
          material={materials.Cos_atlas}
          position={[-2.69, 0.818, 2.277]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={1.161}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lipstick_Adrienne001.geometry}
          material={materials.Cos_atlas}
          position={[-2.646, 0.819, 2.277]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={1.161}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lipstick.geometry}
          material={materials.Cos_atlas}
          position={[-2.602, 0.798, 2.288]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={1.161}
        />
      </group>

      {/******************************* SHAMPOO *****************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          dispatch(setContentVisibilty(true))
          navigate('/products/category/beauty', {
            state: {
              item: 'shampoo'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shampoo3.geometry}
          material={materials.Cos_atlas}
          position={[-4.443, 1.143, 2.293]}
          rotation={[-Math.PI / 2, 0, 2.64]}
          scale={0.003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shampoo2.geometry}
          material={materials.Cos_atlas}
          position={[-4.329, 1.143, 2.293]}
          rotation={[-Math.PI / 2, 0, -2.973]}
          scale={0.003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shampoo.geometry}
          material={materials.Cos_atlas}
          position={[-4.215, 1.142, 2.294]}
          rotation={[-Math.PI / 2, 0, -2.973]}
          scale={0.003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shampcap3.geometry}
          material={materials.Cos_atlas}
          position={[-4.443, 1.195, 2.293]}
          rotation={[-Math.PI / 2, 0, 1.889]}
          scale={[0.003, 0.003, 0.004]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shampcap2.geometry}
          material={materials.Cos_atlas}
          position={[-4.329, 1.195, 2.293]}
          rotation={[-Math.PI / 2, 0, 2.559]}
          scale={[0.003, 0.003, 0.004]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shampcap.geometry}
          material={materials.Cos_atlas}
          position={[-4.218, 1.197, 2.292]}
          rotation={[-Math.PI / 2, 0, 2.559]}
          scale={[0.003, 0.003, 0.004]}
        />
      </group>

      {/******************************* SPRAY(ROSEWATER) *****************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          dispatch(setContentVisibilty(true))
          navigate('/products/category/beauty', {
            state: {
              item: 'spray'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rosewatercap.geometry}
          material={materials.Cos_atlas}
          position={[-4.272, 0.625, 2.284]}
          rotation={[Math.PI, 0.029, Math.PI / 2]}
          scale={0.003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rosewater3001.geometry}
          material={materials.Cos_atlas}
          position={[-4.396, 0.624, 2.281]}
          rotation={[Math.PI, 0.029, Math.PI / 2]}
          scale={0.003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rosewater3.geometry}
          material={materials.Cos_atlas}
          position={[-4.396, 0.589, 2.285]}
          rotation={[-Math.PI / 2, 0, 1.542]}
          scale={0.002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rosewater2001.geometry}
          material={materials.Cos_atlas}
          position={[-4.335, 0.624, 2.281]}
          rotation={[Math.PI, 0.029, Math.PI / 2]}
          scale={0.003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rosewater2.geometry}
          material={materials.Cos_atlas}
          position={[-4.336, 0.589, 2.285]}
          rotation={[-Math.PI / 2, 0, 1.542]}
          scale={0.002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rosewater.geometry}
          material={materials.Cos_atlas}
          position={[-4.272, 0.589, 2.286]}
          rotation={[-Math.PI / 2, 0, 1.542]}
          scale={0.002}
        />
      </group>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.racks002.geometry}
        material={materials['RACK baked.001']}
        position={[-4.32, 0.619, 2.307]}
        scale={0.831}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.racks001.geometry}
        material={materials['RACK baked.001']}
        position={[-2.638, 0.622, 2.307]}
        scale={0.831}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pinturas_lambert1_0001.geometry}
        material={materials.Cos_atlas}
        position={[-2.747, 0.516, 2.282]}
        rotation={[-Math.PI, 1.099, -Math.PI]}
        scale={0.009}
      />
      {/******************************* MAKEUP *****************************/}

      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          dispatch(setContentVisibilty(true))
          navigate('/products/category/beauty', {
            state: {
              item: 'makeup'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.makeupkit2.geometry}
          material={materials.Cos_atlas}
          position={[-2.749, 0.519, 2.279]}
          rotation={[-Math.PI, 1.099, -Math.PI]}
          scale={0.009}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.makeupkit.geometry}
          material={materials.Cos_atlas}
          position={[-2.583, 0.519, 2.286]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.009}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.makeupcolor.geometry}
          material={materials.Cos_atlas}
          position={[-2.579, 0.516, 2.288]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.009}
        />
      </group>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hanger5.geometry}
        material={materials.Cos_atlas}
        position={[-3.927, 1.157, 2.255]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.724}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hanger4.geometry}
        material={materials.Cos_atlas}
        position={[-3.087, 1.156, 2.255]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.724}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hanger3.geometry}
        material={materials.Cos_atlas}
        position={[-3.732, 1.157, 2.255]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.724}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hanger2.geometry}
        material={materials.Cos_atlas}
        position={[-3.507, 1.157, 2.255]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.724}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hanger.geometry}
        material={materials.Cos_atlas}
        position={[-3.292, 1.157, 2.255]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.724}
      />
      {/******************************* FOUNDATION *****************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          dispatch(setContentVisibilty(true))
          navigate('/products/category/beauty', {
            state: {
              item: 'foundation'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.foundation3.geometry}
          material={materials.Cos_atlas}
          position={[-2.73, 0.33, 2.259]}
          rotation={[-Math.PI / 2, 0, 2.703]}
          scale={0.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.foundation2.geometry}
          material={materials.Cos_atlas}
          position={[-2.604, 0.331, 2.259]}
          rotation={[-Math.PI / 2, 0, 2.703]}
          scale={0.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.foundation.geometry}
          material={materials.Cos_atlas}
          position={[-2.66, 0.33, 2.259]}
          rotation={[-Math.PI / 2, 0, 2.703]}
          scale={0.001}
        />
      </group>

      {/******************************* FACEWASH *****************************/}

      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          dispatch(setContentVisibilty(true))
          navigate('/products/category/beauty', {
            state: {
              item: 'facewash'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.facewash3.geometry}
          material={materials.Cos_atlas}
          position={[-4.337, 0.835, 2.289]}
          rotation={[-1.571, -0.01, 3.082]}
          scale={0.019}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.facewash2.geometry}
          material={materials.Cos_atlas}
          position={[-4.265, 0.847, 2.289]}
          rotation={[-1.58, -0.001, 1.684]}
          scale={0.019}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.faceswash.geometry}
          material={materials.Cos_atlas}
          position={[-4.427, 0.767, 2.289]}
          rotation={[0, -0.611, 0]}
          scale={0.019}
        />
      </group>
      {/******************************* OIL *****************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          dispatch(setContentVisibilty(true))
          navigate('/products/category/beauty', {
            state: {
              item: 'oil'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials.Cos_atlas}
          position={[-2.737, 1.147, 2.298]}
          rotation={[-Math.PI, 0.509, -Math.PI]}
          scale={[0.487, 0.444, 0.487]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials.Cos_atlas}
          position={[-2.654, 1.147, 2.298]}
          rotation={[-Math.PI, 0.509, -Math.PI]}
          scale={[0.487, 0.444, 0.487]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.Cos_atlas}
          position={[-2.578, 1.144, 2.299]}
          rotation={[-Math.PI, 0.509, -Math.PI]}
          scale={[0.487, 0.444, 0.487]}
        />
      </group>

      <group
        position={[-3.259, 0.157, 2.414]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.011}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Cos_atlas}
          position={[20.299, -14.041, 0]}
          scale={[1, 1, 0.865]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Cos_atlas}
          position={[19.899, -14.076, 5.972]}
          scale={[1, 1, 0.865]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rackwheelsa.geometry}
          material={materials.Cos_atlas}
          position={[21.228, -14.041, -11.624]}
        />
      </group>

      {/******************************** TYRE RACK *****************************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          localStorage.setItem(
            'state',
            JSON.stringify({
              category: 'automotive',
              item: 'tyrerack'
            })
          )
          navigate('/products/category/automotive', {
            state: {
              category: 'automotive',
              item: 'tyrerack'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials['TYRE Baked']}
          position={[-0.086, 0.181, 2.392]}
          rotation={[Math.PI, -1.159, -1.585]}
          scale={0.563}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials['TYRE Baked']}
          position={[0.087, 0.582, 2.392]}
          rotation={[0, 0, -0.276]}
          scale={0.563}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials['TYRE Baked']}
          position={[-0.037, 0.582, 2.392]}
          rotation={[0, 0, -0.276]}
          scale={0.563}
        />
      </group>

      {/******************************** GLOVES *****************************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          localStorage.setItem(
            'state',
            JSON.stringify({
              category: 'automotive',
              item: 'gloves'
            })
          )
          navigate('/products/category/automotive', {
            state: {
              category: 'automotive',
              item: 'gloves'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Gloves_1.geometry}
          material={materials['helmet/gloves/can']}
          position={[1.923, 1.197, 1.479]}
          rotation={[-2.919, 0, -Math.PI]}
          scale={0.225}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Gloves2.geometry}
          material={materials['helmet/gloves/can']}
          position={[1.923, 1.197, 1.03]}
          rotation={[-2.919, 0, -Math.PI]}
          scale={0.225}
        />
      </group>

      {/************************* SHOES **********************************/}
      <group
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
        onClick={event => {
          event.stopPropagation()

          localStorage.setItem(
            'state',
            JSON.stringify({
              category: 'automotive',
              item: 'shoes'
            })
          )
          navigate('/products/category/automotive', {
            state: {
              category: 'automotive',
              item: 'shoes'
            }
          })
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shoes1.geometry}
          material={materials['shoes/bat/pads baked']}
          position={[0.42, 0.094, 1.475]}
          rotation={[-Math.PI / 2, 0, -2.294]}
          scale={0.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shoes2.geometry}
          material={materials['shoes/bat/pads baked']}
          position={[1.935, 0.865, 1.491]}
          rotation={[-Math.PI / 2, 0, -1.666]}
          scale={0.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shoes3.geometry}
          material={materials['shoes/bat/pads baked']}
          position={[1.935, 0.865, 1.032]}
          rotation={[-Math.PI / 2, 0, -1.666]}
          scale={0.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shoes4.geometry}
          material={materials['shoes/bat/pads baked']}
          position={[-0.024, 0.094, 1.808]}
          rotation={[-Math.PI / 2, 0, -2.541]}
          scale={0.008}
        />
      </group>
    </group>
  )
}
useGLTF.preload('/models/Mobile_store.glb')
