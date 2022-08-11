import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { useSpring, animated, config } from '@react-spring/three'
import { Html } from '@react-three/drei'


const CardShuffle = () => {
  const [active, setActive] = useState(2);

  useEffect(() => {
    // change active every second
    const interval = setInterval(() => {
      setActive(active => (active % 3) + 1)
    }
      , 3000)
    return () => clearInterval(interval)
  }, [active])


  return (
    <div className='w-full h-full flex items-center justify-center'>
      <Canvas className=''>
        <ambientLight />
        <spotLight position={[10, 10, 10]} />
        <Card index={1} active={active} setActive={setActive} />
        <Card index={2} active={active} setActive={setActive} />
        <Card index={3} active={active} setActive={setActive} />
      </Canvas>
    </div>
  )
}

const Card = (props: ThreeElements['mesh'] | any) => {
  const { index, active, setActive } = props;
  const mesh = useRef<THREE.Mesh>(null!)
  const { position } = useSpring({
    position: ((index === active) ? [0, 0, -8] : (index === (active) % 3 + 1) ? [12, 0, -12] : [-12, 0, -12]),
    config: config.default
  });

  return (
    <animated.mesh
      {...props}
      position={position}
      ref={mesh}
      onClick={() => setActive(index)}
    >
      <Html className='w-full' position={[0, 0, 0]} transform>
        <button onClick={() => setActive(index)}>
          {
            index === 1 ? (
              <Slide heading={"Leverage without the risk"} para={"Power perpetuals provide leverage-like exposure by default, thus eliminating liquidation risk"} img={"https://cdn.iconscout.com/icon/premium/png-256-thumb/liquidity-2-1177839.png"} />
            ) :
              index === 2 ? (
                <Slide heading={"Deep liquidity"} para={"Enjoy consolidated liquidity of the options market into a single instrument"} img={"https://cdn.iconscout.com/icon/premium/png-256-thumb/liquidity-2-1177839.png"} />
              ) :
                (
                  <Slide heading={"Real yield"} para={"If you short a power perp, you will receive an amount every hour based on the premium yield"} img={"https://cdn.iconscout.com/icon/premium/png-256-thumb/liquidity-2-1177839.png"} />
                )
          }
        </button>
      </Html>
    </animated.mesh>
  )
}

const Slide = ({ heading, para, img }: { heading: string, para: string, img: string }) => {
  return (
    <div className="flex flex-col gap-y-6 w-96 h-64 p-4 rounded-2xl bg-neutral-900">
      <h1 className="text-primary text-3xl">{heading}</h1>
      <div className="grid grid-cols-3 gap-x-2">
        <div className="flex flex-col text-left gap-y-4 col-span-2">
          <p className="text-zinc-300">
            {para}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="w-full" src={img} />
        </div>
      </div>
    </div>
  )
}

export default CardShuffle