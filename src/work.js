import * as THREE from 'three' // eslint-disable-line
import * as CANNON from 'cannon'
import React, { useEffect, useState } from 'react' // eslint-disable-line
import { Canvas, useFrame } from 'react-three-fiber' // eslint-disable-line
import { css, jsx } from '@emotion/core' // eslint-disable-line
import { useCannon, Provider } from './useCannon'
import { Color } from 'three' // eslint-disable-line

const theme = css`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`
const theme1 = {
  width: '100vw',
  height: '100vh',
  backgroundColor: '#272727'
}

const Plane = ({ position }) => {
  const ref = useCannon({ mass: 0 }, body => {
    body.addShape(new CANNON.Plane())
    body.position.set(...position)
  })
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach='geometry' args={[1000, 1000]} />
      <meshPhongMaterial attach='material' color='#ECDCB0' />
    </mesh>
  )
}

const Box = ({ position, args, color }) => {
  const ref = useCannon({ mass: 10000 }, body => {
    body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)))
    body.position.set(...[Math.random() * 6, Math.random() * 6, Math.random() * 6])
  })
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry attach='geometry' args={args} />
      <meshStandardMaterial attach='material' color={color} />
    </mesh>
  )
}

const Work = () => {
  return (
    <div css={theme} style={theme1}>
      <Canvas camera={{ position: [0, 5, 20] }}>
        <ambientLight intensity={0.2} />
        <hemisphereLight
          intensity={0.8}
          position={[30, 50, 50]}
          angle={0.2}
          penumbra={1}
          castShadow
        />
        <Provider>
          <Plane position={[0, 0, -10]} />
          <Box position={[1, 10, 1]} args={[2, 10, 2]} color={'#220C10'} />
          <Box position={[1, 0, 1]} args={[1, 1, 5]} color={'#506C64'} />
          <Box position={[7, -1, 5]} args={[3, 5, 3]} color={'#77CBB9'} />
          <Box position={[0, 0, 6]} args={[9, 1, 5]} color={'#75B8C8'} />
          <Box position={[-1, 1, 8]} args={[2, 3, 2]} color={'#CDD3D5'} />
          <Box position={[0, 2, 3]} args={[5, 5, 4]} color={'#220C10'} />
          <Box position={[2, -1, 13]} args={[1, 1, 5]} color={'#506C64'} />
          <Box position={[1, 0, 1]} args={[1, 1, 5]} color={'#506C64'} />
          <Box position={[7, -1, 5]} args={[3, 5, 3]} color={'#77CBB9'} />
          <Box position={[0, 0, 6]} args={[9, 1, 5]} color={'#75B8C8'} />
          <Box position={[-1, 1, 8]} args={[2, 3, 2]} color={'#CDD3D5'} />
          <Box position={[0, 2, 3]} args={[5, 5, 4]} color={'#220C10'} />
          <Box position={[2, -1, 13]} args={[1, 1, 5]} color={'#506C64'} />
          <Box position={[-1, 1, 8]} args={[2, 3, 2]} color={'#CDD3D5'} />
          <Box position={[0, 2, 3]} args={[5, 5, 4]} color={'#220C10'} />
          <Box position={[2, -1, 13]} args={[1, 1, 5]} color={'#506C64'} />
          <Box position={[1, 0, 1]} args={[1, 1, 5]} color={'#506C64'} />
          <Box position={[7, -1, 5]} args={[3, 5, 3]} color={'#77CBB9'} />
          <Box position={[0, 0, 6]} args={[9, 1, 5]} color={'#75B8C8'} />
          <Box position={[-1, 1, 8]} args={[2, 3, 2]} color={'#CDD3D5'} />
          <Box position={[0, 2, 3]} args={[5, 5, 4]} color={'#220C10'} />
          <Box position={[2, -1, 13]} args={[1, 1, 5]} color={'#506C64'} />
        </Provider>
      </Canvas>
    </div>
  )
}

export default Work