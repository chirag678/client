import React, { useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

const RotatingBoxes = () => {
  return (
    <div className="h-full w-full">
      <Canvas>
        <ambientLight />
        <spotLight position={[10, 10, 10]} />
        <Block position={[5, 5, -10]} index={1} color='teal' />
        <Block position={[-5, 5, -10]} index={2} color='teal' />
        <Block position={[0, 0, -10]} index={3} color='gray' />
        <Block position={[5, -5, -10]} index={4} color='teal' />
        <Block position={[-5, -5, -10]} index={5} color='teal' />
      </Canvas>
    </div>
  )
}

const Block = (props: ThreeElements['mesh'] | any) => {
  const mesh = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => {
    mesh.current.rotation.x += (props.index === 2 || props.index === 5 ? 0.01 : -0.01)
    mesh.current.rotation.y += (props.index === 1 ? 0.01 : -0.01)
    mesh.current.rotation.z += (props.index === 3 || props.index === 4 ? 0.01 : -0.01)
  })
  return (
    <mesh
      {...props}
      ref={mesh}
    >
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  )
}

export default RotatingBoxes