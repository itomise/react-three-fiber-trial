import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { css, jsx } from '@emotion/core'


const theme = css`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`
const theme1 = {
  width: '100vw',
  height: '100vh',
  backgroundColor: '#ffffff'
}

const Thing = () => {
  const ref = useRef()

  useFrame( ({ clock }) => {
    ref.current.position.x += Math.cos(clock.getElapsedTime()) * 3
    ref.current.position.y += Math.sin(clock.getElapsedTime()) * 3
    ref.current.position.z += Math.cos(clock.getElapsedTime()) * 3
    ref.current.rotation.y += 0.01
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry attach='geometry' args={[300, 30, 30]} />
      <meshStandardMaterial attach='material' color='#ff0000' />
    </mesh>
  )
}

const Work = () => {
  return (
    <div css={theme} style={theme1}>
      <Canvas camera={{ position: [0, 0, 1000] }}>
        <ambientLight
          color="ffffff"
        />
        <pointLight
          color='#ffffff'
          intensity={1}
          position={[0, 2000, 1000]}
        />
        <Thing />
      </Canvas>
    </div>
  )
}

export default Work