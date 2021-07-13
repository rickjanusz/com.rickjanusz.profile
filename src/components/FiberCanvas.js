// import React from 'react'
// import { Canvas } from 'react-three-fiber'

// import helmet from '../components/DamagedHelmet.glb'
// import Controls from '../components/controls'
// import Model from './model'

// const FiberCanvas = () => {
//   const isBrowser = typeof document !== 'undefined'

//   return (
//     <>
//       {isBrowser && (
//         <Canvas camera={{ position: [0, 0, 1] }}>
//           <ambientLight intensity={1} />
//           {/* <Model /> */}
//           {/* <Model url={helmet} /> */}
//           <Model url={helmet} />
//           <Controls
//             autoRotate
//             enablePan={false}
//             enableZoom={false}
//             enableDamping
//             dampingFactor={0.3}
//             rotateSpeed={1}
//             // maxPolarAngle={Math.PI / 2}
//             // minPolarAngle={Math.PI / 2}
//           />
//         </Canvas>
//       )}
//     </>
//   )
// }

// export default FiberCanvas
