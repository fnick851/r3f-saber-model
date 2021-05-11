import React, { Suspense } from "react"
import "./App.css"
import { Canvas, useLoader } from "@react-three/fiber"
import { Html, OrbitControls, useProgress } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function Scene() {
  const gltf = useLoader(GLTFLoader, "./model/scene.gltf")

  return (
    <primitive
      object={gltf.scene}
      scale={[0.005, 0.005, 0.005]}
      position={[0, -2.5, 0]}
    />
  )
}

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <h1>{progress}%</h1>
    </Html>
  )
}

function App() {
  return (
    <div className="canvas-container">
      <Canvas>
        <Suspense fallback={<Loader />}>
          <Scene />
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
      <p className="copyright-text">
        © This work is based on "Alter Saber - Fate/Stay Night: Heaven's Feel"
        (https://sketchfab.com/3d-models/alter-saber-fatestay-night-heavens-feel-c5223abd18d346a7833b732ae064058c)
        by Allan Mitsuse (https://sketchfab.com/allanmit) licensed under
        SKETCHFAB Editorial (https://sketchfab.com/licenses)
      </p>
    </div>
  )
}

export { App }
