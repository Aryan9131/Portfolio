import React from 'react'
import { MeshStandardMaterial, TextureLoader } from "three";

import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useRef } from "react"
import { useProgress, Html, ScrollControls, useGLTF, useAnimations, useScroll } from "@react-three/drei"
import { Box } from "@mui/material"
import { useFrame } from "@react-three/fiber"
import './SkillPage.css'
useGLTF.preload("/robot_playground.glb")

export const Model = ({scrollProgress}) => {
    console.log('scrollProgress get --> '+scrollProgress);
    const group = useRef(null)
    const { nodes, materials, animations, scene } = useGLTF("/robot_playground.glb")
    const { actions } = useAnimations(animations, scene)
    const scroll = useScroll()
    
      
    useEffect(() => {
        console.log("scroll.offset ->"+scroll.offset)
        
        if (actions["Experiment"]) {
            actions["Experiment"].play().paused = true
        }
    }, [actions, scene])

    useFrame(() => {
        // console.log("scroll.offset useFrame ->"+scroll.offset)

        if (actions["Experiment"]) {
            actions["Experiment"].time = actions["Experiment"].getClip().duration * scroll.offset
        }
    })

    return (
        <group ref={group} position={[-0.1, -2, 0.1]} scale={[1.5, 1.5, 1.5]}>
            <primitive object={scene}/>
        </group>
    )
}
