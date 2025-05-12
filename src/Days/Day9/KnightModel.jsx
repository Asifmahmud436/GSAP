import { Suspense } from "react"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Knight from './Knight'
import '../../index.css'

function KnightModel() {
    
  return (
    <div className="bg-black">
        <Canvas className="border-2">
            <ambientLight intensity={5}/>
            <directionalLight position={[0,1,1]} intensity={5}/>
            <Suspense fallback={null}>
                <Knight scale={1.75} position={[0,-1.5,0]} />
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={0.7} enableZoom={false}/>
        </Canvas>
    </div>
  )
}

export default KnightModel