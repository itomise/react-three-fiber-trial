import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { css, jsx } from '@emotion/core'
import { TimelineMax } from 'gsap'


const theme = css`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`
const theme1 = {
  width: '100vw',
  height: '100vh',
  backgroundColor: '#000'
}

const Thing = () => {
  const ref = useRef()

  useFrame( ({ clock }) => {
    // ref.current.position.x += Math.cos(clock.getElapsedTime()) * 3
    // ref.current.position.y += Math.sin(clock.getElapsedTime()) * 3
    // ref.current.position.z += Math.cos(clock.getElapsedTime()) * 3
    // ref.current.rotation.y += 0.01
    const tl = new TimelineMax();
    tl.to( ref.current.position, 3, {

      y:-40,
      repeatDelay: 2,
      yoyo:true,
      repeat: Infinity
    })

  })

  return (
    <mesh ref={ref}>
      <sphereGeometry attach='geometry' args={[300, 30, 30]} />
      <meshStandardMaterial attach='material' color='#ffffff' />
    </mesh>
  )
}

const Work = () => {
  return (
    <div css={theme} style={theme1}>
      <Canvas camera={{ position: [0, 0, 1000] }}>
        <ambientLight
          color='#ffffff'
          intensity={0.9}
          position={[0, 200, 100]}
        />
        <Thing />
      </Canvas>
    </div>
  )
}

export default Work