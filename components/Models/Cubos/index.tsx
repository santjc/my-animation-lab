/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 cubos.glb -t -T
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
    object_11: THREE.Mesh
    object_11_1: THREE.Mesh
    object_15: THREE.Mesh
    object_15_1: THREE.Mesh
    object_16: THREE.Mesh
    object_16_1: THREE.Mesh
    object_18: THREE.Mesh
    object_18_1: THREE.Mesh
    object_19: THREE.Mesh
    object_19_1: THREE.Mesh
    object_2: THREE.Mesh
    object_2_1: THREE.Mesh
    object_6: THREE.Mesh
    object_6_1: THREE.Mesh
    object_8: THREE.Mesh
    object_8_1: THREE.Mesh
    object_9: THREE.Mesh
    object_9_1: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
    Plastic: THREE.MeshStandardMaterial
    ['Plastic (1)']: THREE.MeshStandardMaterial
  }
}

export default function Cubos(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/cubos-transformed.glb') as GLTFResult
  return (
    <group {...props} scale={0.1} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.object_11.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.object_11_1.geometry} material={materials['Plastic (1)']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.object_15.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.object_15_1.geometry} material={materials['Plastic (1)']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.object_16.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.object_16_1.geometry} material={materials['Plastic (1)']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.object_18.geometry} material={materials['Plastic (1)']} />
        <mesh geometry={nodes.object_18_1.geometry} material={materials.Plastic} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.object_19.geometry} material={materials['Plastic (1)']} />
        <mesh geometry={nodes.object_19_1.geometry} material={materials.Plastic} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.object_2.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.object_2_1.geometry} material={materials['Plastic (1)']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.object_6.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.object_6_1.geometry} material={materials['Plastic (1)']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.object_8.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.object_8_1.geometry} material={materials['Plastic (1)']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.object_9.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.object_9_1.geometry} material={materials['Plastic (1)']} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cubos-transformed.glb')
