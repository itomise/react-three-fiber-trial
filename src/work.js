import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { css, jsx } from '@emotion/core'
import { TimelineMax } from 'gsap'
import { Utils } from './utils'
import * as THREE from 'three'
import { shader } from './shader'


const theme = css`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`
const theme1 = {
  width: '100vw',
  height: '100vh',
  backgroundColor: `${Utils.rgbTo16(105, 185, 210)}`
}

// noise sphere 的な物
const Thing = () => {
  const ref = useRef()
  useEffect( () => {
    const tl = new TimelineMax();
    tl.to( ref.current.position, 1, {
      y:-40,
      yoyo:true,
      repeat: -1
    })
  }, [])
  const _uniform = {
    u_time: { type: 'f', value: 1.0 },
    u_resolution: { type: 'v2', value: new THREE.Vector2() },
    u_mouse: { type: 'v2', value: new THREE.Vector2() },
  }
  const [uniform, setUniform] = useState(_uniform)

  useFrame( ({ clock }) => {
    // ref.current.position.x += Math.cos(clock.getElapsedTime()) * 3
    // ref.current.position.y += Math.sin(clock.getElapsedTime()) * 3
    // ref.current.position.z += Math.cos(clock.getElapsedTime()) * 3
    // ref.current.rotation.y += 0.01
    ref.current.width += Math.cos(clock.getElapsedTime()) * 3
    setUniform(clock.getElapsedTime() * 0.01)
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry attach='geometry' args={[300, 30, 30]} />
      <shaderMaterial
        attach='material'
        color={Utils.rgbTo16(239, 123, 81)}
        uniform={uniform}
        vertexShader={shader.vertexShader}
        fragmentShader={shader.fragmentShader}
        blending={THREE.NormalBlending}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
const TweenCircle = () => {
  const ref = useRef()
  useEffect( () => {
    const tl = new TimelineMax();
    tl.to( ref.current.position, 1, {
      y:-40,
      yoyo:true,
      repeat: -1
    })
  }, [])
  const _uniform = {
    u_time: { type: 'f', value: 1.0 },
    u_resolution: { type: 'v2', value: new THREE.Vector2() },
    u_mouse: { type: 'v2', value: new THREE.Vector2() },
  }
  const [uniform, setUniform] = useState(_uniform)

  useEffect(() => {
    ref.current.position.z = -10
  }, [])

  useFrame( ({ clock }) => {
    // ref.current.position.x += Math.cos(clock.getElapsedTime()) * 3
    // ref.current.position.y += Math.sin(clock.getElapsedTime()) * 3
    // ref.current.position.z += Math.cos(clock.getElapsedTime()) * 3
    ref.current.rotation.y += 0.01
    ref.current.width += Math.cos(clock.getElapsedTime()) * 3
    setUniform(clock.getElapsedTime() * 0.01)
  })

  return (
    <mesh ref={ref}>
      <boxGeometry attach='geometry' position={{x: 100}} args={[100, 100, 100]} />
      <meshNormalMaterial
        attach='material'
      />
    </mesh>
  )
}

const Work = () => {

  return (
    <div css={theme} style={theme1}>
      <Canvas camera={{ position: [0, 0, 1000] }}>
        <ambientLight
          color='#ffffff'
          intensity={0.4}
          position={[0, 200, 100]}
        />
        <hemisphereLight
          color={Utils.rgbTo16(225, 232, 236)}
          intensity={1.9}
          position={[10, 20, 100]}
        />
        {/* <Thing /> */}
        <TweenCircle />
      </Canvas>
    </div>
  )
}

export default Work