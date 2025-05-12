import { Suspense } from "react"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Env from './Env'
import '../../index.css'

export default function Environment() {
    
  return (
    <div className="bg-black w-full h-screen">
        <Canvas camera={{position:[2,2,2]}}>
            <ambientLight intensity={5}/>
            <directionalLight position={[0,-10,5]} intensity={0.5}/>
            <Suspense fallback={null}>
                <Env position={[0,0,0]} scale={0.25} />
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={0.7} enableZoom={false}/>
        </Canvas>
    </div>
  )
}

