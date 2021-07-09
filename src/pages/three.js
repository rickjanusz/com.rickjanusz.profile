import React from 'react'
// import { Link } from 'gatsby'
import SEO from '../components/SEO'

import { Canvas } from 'react-three-fiber'

import Model from '../components/model'
import Controls from '../components/controls'
// import * as THREE from 'three'

import helmet from '../components/DamagedHelmet.glb'

export default function ThreePage() {
  return (
    <div>
      <SEO title="Three Rick Janusz" />
      <h1>
        <span>Three Me</span>
        <Canvas
          style={{ height: 700, zIndex: 200 }}
          camera={{ position: [0, 0, 1] }}
        >
          <ambientLight intensity={1} />
          <Model url={helmet} />
          <Controls
            // autoRotate
            enablePan={false}
            enableZoom={false}
            enableDamping
            dampingFactor={0.2}
            // rotateSpeed={10}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </h1>
    </div>
  )
}
