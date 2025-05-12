import { useGLTF } from '@react-three/drei'

export default function Env(props) {
  const { nodes, materials } = useGLTF('/env.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-19.839, 0, -19.062]}>
        <mesh geometry={nodes.Object_7.geometry} material={materials['Bark_Mat.036']} position={[35.998, 0, 24.054]} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Cluster_Mat.036']} position={[35.998, 0, 24.054]} />
      </group>
      <group position={[-8.535, 0, -21.867]}>
        <group rotation={[-Math.PI, 0.518, -Math.PI]}>
          <mesh geometry={nodes.Object_13.geometry} material={materials['Bark_Mat.037']} position={[-18.053, 0, -5.934]} />
          <mesh geometry={nodes.Object_15.geometry} material={materials['Cluster_Mat.037']} position={[-18.053, 0, -5.934]} />
        </group>
      </group>
      <group position={[25.612, 0, -30.148]}>
        <group rotation={[-Math.PI, 0.518, -Math.PI]}>
          <mesh geometry={nodes.Object_19.geometry} material={materials['Bark_Mat.038']} />
          <mesh geometry={nodes.Object_21.geometry} material={materials['Cluster_Mat.038']} />
        </group>
      </group>
      <group position={[25.612, 0, -30.148]}>
        <group rotation={[-Math.PI, 0.518, -Math.PI]}>
          <mesh geometry={nodes.Object_25.geometry} material={materials['Bark_Mat.039']} />
          <mesh geometry={nodes.Object_27.geometry} material={materials['Cluster_Mat.039']} />
        </group>
      </group>
      <group position={[24.4, 0, 38.052]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 0, -5999.999]} scale={100}>
            <mesh geometry={nodes.Object_117.geometry} material={materials['Bark_Mat.022']} position={[-21.179, 0, 9.525]} />
            <mesh geometry={nodes.Object_119.geometry} material={materials['Cluster_Mat.022']} position={[-21.179, 0, 9.525]} />
          </group>
        </group>
      </group>
      <group position={[11.131, 0, 50.895]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 0, 0]}>
            <group position={[0, 0, -9000]} scale={100}>
              <mesh geometry={nodes.Object_126.geometry} material={materials['Bark_Mat.029']} position={[0.207, 0, 31.123]} rotation={[0, -1.531, 0]} />
              <mesh geometry={nodes.Object_128.geometry} material={materials['Cluster_Mat.029']} position={[0.207, 0, 31.123]} rotation={[0, -1.531, 0]} />
            </group>
          </group>
        </group>
      </group>
      <group position={[41.091, 0, 37.289]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 0, 0]}>
            <group position={[0, 0, -6000]} scale={100}>
              <mesh geometry={nodes.Object_135.geometry} material={materials['Bark_Mat.030']} position={[-46.064, 0, 12.928]} rotation={[0, -1.454, 0]} />
              <mesh geometry={nodes.Object_137.geometry} material={materials['Cluster_Mat.030']} position={[-46.064, 0, 12.928]} rotation={[0, -1.454, 0]} />
            </group>
          </group>
        </group>
      </group>
      <mesh geometry={nodes.Object_31.geometry} material={materials['Material.005']} position={[1.334, 0.02, 17.848]} rotation={[0, 0.087, 0]} scale={1.41} />
      <mesh geometry={nodes.Object_34.geometry} material={materials['Material.005']} position={[11, 0.006, 7]} scale={1.5} />
      <mesh geometry={nodes.Object_37.geometry} material={materials['Material.005']} position={[-14.23, 0, 7.569]} scale={1.82} />
      <mesh geometry={nodes.Object_40.geometry} material={materials['Material.005']} position={[6.007, 0, -0.175]} rotation={[-Math.PI, 0.698, -Math.PI]} scale={1.8} />
      <mesh geometry={nodes.Object_43.geometry} material={materials['Material.005']} position={[5.913, 0, 11.645]} rotation={[0, -Math.PI / 4, 0]} scale={1.716} />
      <mesh geometry={nodes.Object_46.geometry} material={materials['Material.006']} position={[0, 0.031, 0.315]} rotation={[1.419, 0, 0]} />
      <mesh geometry={nodes.Object_49.geometry} material={materials['Material.006']} position={[8.522, 0, 2.283]} rotation={[Math.PI / 2, -0.12, Math.PI / 2]} />
      <mesh geometry={nodes.Object_52.geometry} material={materials['Material.006']} position={[-4.333, 0.031, 0.315]} rotation={[1.396, 0, 0]} />
      <mesh geometry={nodes.Object_55.geometry} material={materials['Material.006']} position={[-8.63, -0.071, 6.456]} rotation={[1.446, 0, 0]} />
      <mesh geometry={nodes.Object_58.geometry} material={materials['Material.006']} position={[6.167, 0, 1.252]} rotation={[-Math.PI, Math.PI / 4, -Math.PI]} scale={1.331} />
      <mesh geometry={nodes.Object_61.geometry} material={materials['Material.006']} position={[8.767, 0.011, 6.052]} rotation={[-Math.PI, 0.262, -Math.PI]} scale={1.2} />
      <mesh geometry={nodes.Object_64.geometry} material={materials['Material.006']} position={[-15.108, 0, 3.037]} rotation={[-Math.PI, -0.698, -Math.PI]} scale={1.1} />
      <mesh geometry={nodes.Object_67.geometry} material={materials['Material.006']} position={[0, -0.003, 4]} scale={1.2} />
      <mesh geometry={nodes.Object_73.geometry} material={materials['Material.006']} position={[8.141, 0.019, -0.168]} />
      <mesh geometry={nodes.Object_76.geometry} material={materials['Material.006']} position={[10.127, 0, 18.926]} />
      <mesh geometry={nodes.Object_79.geometry} material={materials['Material.006']} position={[-0.389, 0, -0.14]} />
      <mesh geometry={nodes.Object_82.geometry} material={materials['Material.006']} position={[-10.263, 0, 1.371]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Object_85.geometry} material={materials['Material.006']} position={[18.631, 0, -10.442]} />
      <mesh geometry={nodes.Object_88.geometry} material={materials['Material.006']} position={[25.501, 0, -2.268]} rotation={[0, -Math.PI / 3, 0]} />
      <mesh geometry={nodes.Object_91.geometry} material={materials['Material.006']} position={[9, 0, 12.8]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.Object_94.geometry} material={materials['Material.006']} position={[-3, 0, 6]} rotation={[0, Math.PI / 2, 0]} scale={0.7} />
      <mesh geometry={nodes.Object_97.geometry} material={materials['Material.006']} position={[13, 0, 1]} scale={0.7} />
      <group position={[23.907, 0, 0.95]} rotation={[-Math.PI, -Math.PI / 6, -Math.PI]}>
        <mesh geometry={nodes.Object_100.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_102.geometry} material={materials['Material.005']} />
      </group>
      <group position={[17.907, 0, 7.95]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes.Object_105.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_107.geometry} material={materials['Material.005']} />
      </group>
      <mesh geometry={nodes.Object_110.geometry} material={materials['Material.007']} scale={50} />
      <mesh geometry={nodes.Object_70.geometry} material={materials['Material.006']} />
    </group>
  )
}

useGLTF.preload('/env.gltf')
