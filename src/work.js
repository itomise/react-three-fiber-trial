import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { css, jsx } from '@emotion/core'
import { Utils } from './utils'


const theme = css`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`
const theme1 = {
  width: '100vw',
  height: '100vh',
  backgroundColor: Utils.rgbTo16(249, 233, 209)
}

const Thing = () => {
  const ref = useRef()

  useFrame( ({ clock }) => {
    ref.current.position.x += Math.cos(clock.getElapsedTime()) * 4
    ref.current.position.y += Math.sin(clock.getElapsedTime()) * 4
    ref.current.position.z += Math.cos(clock.getElapsedTime()) * 4
    ref.current.rotation.y += 0.01
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry attach='geometry' args={[300, 30, 30]} />
      <meshStandardMaterial attach='material' color={Utils.rgbTo16(233, 164, 49)} />
    </mesh>
  )
}

const Work = () => {
  return (
    <div css={theme} style={theme1}>
      <Canvas camera={{ position: [0, 0, 1000] }}>
        <ambientLight
          color={Utils.rgbTo16(255, 255, 255)}
          intensity={1}
        />
        <pointLight
          color='#ffffff'
          intensity={0.2}
          position={[10000, 2000, 2000]}
        />
        <hemisphereLight
          color='#ffffff'
          intensity={0.8}
        />
        <Thing />
      </Canvas>
    </div>
  )
}

export default Work