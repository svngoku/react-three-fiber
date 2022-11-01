import { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { HexColorPicker } from "react-colorful"
import { proxy, useSnapshot } from "valtio"

// Using a Valtio state model to bridge reactivity between
// the canvas and the dom, both can write to it and/or react to it.
const state = proxy({
  current: null,
  items: {
    laces: "#ffffff",
    mesh: "#ffffff",
    caps: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff",
  },
})

function Model(props) {
  const { nodes, materials } = useGLTF("/1.glb")
  return (
    <group {...props} dispose={null}>
      <group position={[-2.139541, 0.1, -2.536948]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["0______011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[1.270318, 0.1, -3.286821]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["1______011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[4.424695, 0.1, -8.415809]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["2______011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[5.824391, 0.225, -4.465038]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["3______011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[3.099999, 0.1, -1.862108]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["4______011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[3.474924, 0.1, -1.437222]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["5______011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[3.574896, 0.1, -0.112328]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["6______011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[3.12496, 0.1, 0.917314]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["7______011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[3.099999, 0.1, 1.767097]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["8______011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[3.474924, 0.1, 2.366882]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["9______011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[3.549907, 0.1, 3.666783]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["10_____011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[3.174952, 0.1, 4.666746]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["11_____011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[3.099999, 0.1, 6.666278]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["12_____011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[-2.039539, 0.1, 0.917314]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["13_____011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[5.74935, 0.35, -3.303688]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes["14_____011_1"].geometry} material={materials.Glass___Clear_Fa} material-color="#ffffff" />
          <mesh geometry={nodes["14_____011_2"].geometry} material={materials.Wood___Pine_Grai} material-color="#ffffff" />
        </group>
      </group>
      <group position={[-0.19957, -0.075, -0.622668]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["15_____011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[-0.197303, 0.034391, -0.435486]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes["16_____011_1"].geometry} material={materials.Glass___Clear_Fa} material-color="#ffffff" />
          <mesh geometry={nodes["16_____011_2"].geometry} material={materials.Wood___Pine_Grai} material-color="#ffffff" />
        </group>
      </group>
      <group position={[-5.499402, -0.250001, -0.780908]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes["18_____011_1"].geometry} material={materials.Glass___Clear_Fa} material-color="#ffffff" />
          <mesh geometry={nodes["18_____011_2"].geometry} material={materials.Wood___Pine_Grai} material-color="#ffffff" />
        </group>
      </group>
      <group position={[2.186797, -0.125, -4.036697]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["19_____011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[2.213431, -0.065611, -4.008081]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes["20_____011_1"].geometry} material={materials.Glass___Clear_Fa} material-color="#ffffff" />
          <mesh geometry={nodes["20_____011_2"].geometry} material={materials.Wood___Pine_Grai} material-color="#ffffff" />
        </group>
      </group>
      <group position={[3.04772, -0.065611, -3.329801]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes["21_____011_1"].geometry} material={materials.Glass___Clear_Fa} material-color="#ffffff" />
          <mesh geometry={nodes["21_____011_2"].geometry} material={materials.Wood___Pine_Grai} material-color="#ffffff" />
        </group>
      </group>
      <group position={[4.449697, 0.1, -2.586993]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["22_____011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[-0.914379, -0.133333, 6.266304]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["23_____011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[2.699998, 0.1, 7.515916]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["24_____011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[-3.429125, -0.250001, 6.066306]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes["25_____011_1"].geometry} material={materials["fallback Material"]} material-color="#ffffff" />
          <mesh geometry={nodes["25_____011_2"].geometry} material={materials["fallback Material"]} material-color="#ffffff" />
          <mesh geometry={nodes["25_____011_3"].geometry} material={materials["fallback Material"]} material-color="#ffffff" />
        </group>
      </group>
      <group position={[1.935583, -0.250001, 6.066306]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes["26_____011_1"].geometry} material={materials["fallback Material"]} material-color="#ffffff" />
          <mesh geometry={nodes["26_____011_2"].geometry} material={materials["fallback Material"]} material-color="#ffffff" />
        </group>
      </group>
      <group position={[-5.658711, -0.330232, 1.757626]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["27_____011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[3.049995, -0.292858, -4.314039]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["28_____011"].geometry} material={materials.Paint___Light_Gr} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[1.494634, -1.520059, -0.324249]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes["29_____011"].geometry} material={materials["fallback Material"]} scale={0.01} material-color="#ffffff" />
      </group>
      <group position={[-5.489396, -1.4, 3.24599]} rotation={[0, -Math.PI / 2, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes.FixedWindow001_1.geometry} material={materials["fallback Material"]} material-color="#ffffff" />
          <mesh geometry={nodes.FixedWindow001_2.geometry} material={materials["fallback Material"]} material-color="#ffffff" />
          <mesh geometry={nodes.FixedWindow001_3.geometry} material={materials["fallback Material"]} material-color="#ffffff" />
          <mesh geometry={nodes.FixedWindow001_4.geometry} material={materials["fallback Material"]} material-color="#ffffff" />
          <mesh geometry={nodes.FixedWindow001_5.geometry} material={materials["fallback Material"]} material-color="#ffffff" />
        </group>
      </group>
    </group>
  )
  useGLTF.preload("/1.glb")
}

function Picker() {
  const snap = useSnapshot(state)
  return (
    <div style={{ display: snap.current ? "block" : "none" }}>
      <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
      <h1>{snap.current}</h1>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 100 }} size={[`2000px`, `3000px`]}>
        <Model />
        <Environment preset="city" />
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enable Zoom={false} enablePan={false} enableDamping />
      </Canvas>
    </>
  )
}
