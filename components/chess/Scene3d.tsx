"use client";
/// <reference types="@react-three/fiber" />

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, ContactShadows, Environment, Float } from "@react-three/drei";
import { useState, useMemo, useRef, useEffect } from "react";
import * as THREE from "three";
import { Chess, Square } from "chess.js";

interface Scene3dProps {
    fen: string;
    lastMove?: string;
}

const SQUARE_SIZE = 1;
const BOARD_SIZE = 8;

export default function Scene3d({ fen, lastMove }: Scene3dProps) {
    const board = useMemo(() => {
        const c = new Chess(fen);
        return c.board();
    }, [fen]);

    return (
        <div className="w-full h-full">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 8, 8]} fov={45} />
                <OrbitControls
                    enablePan={false}
                    maxPolarAngle={Math.PI / 2.1}
                    minDistance={8}
                    maxDistance={15}
                    autoRotate={false}
                />

                <color attach="background" args={["#050505"]} />
                <fog attach="fog" args={["#050505", 10, 20]} />

                <ambientLight intensity={0.2} />
                <spotLight
                    position={[10, 15, 10]}
                    angle={0.3}
                    penumbra={1}
                    intensity={200}
                    castShadow
                    shadow-mapSize={[1024, 1024]}
                />
                <pointLight position={[-10, 5, -10]} intensity={50} color="#333" />

                <Board />

                {board.flat().map((cell: any, i: number) => {
                    if (!cell) return null;
                    const x = (i % 8) - 3.5;
                    const z = Math.floor(i / 8) - 3.5;
                    return (
                        <Piece
                            key={`${cell.type}-${cell.color}-${i}`}
                            type={cell.type}
                            color={cell.color}
                            position={[x, 0, z]}
                        />
                    );
                })}

                <ContactShadows
                    opacity={0.4}
                    scale={20}
                    blur={2}
                    far={4.5}
                    resolution={256}
                    color="#000000"
                />
                <Environment preset="night" />
            </Canvas>
        </div>
    );
}

function Board() {
    const squares = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const isDark = (i + j) % 2 === 1;
            squares.push(
                <mesh
                    key={`${i}-${j}`}
                    position={[i - 3.5, -0.05, j - 3.5]}
                    receiveShadow
                >
                    <boxGeometry args={[1, 0.1, 1]} />
                    <meshStandardMaterial
                        color={isDark ? "#111" : "#222"}
                        roughness={0.5}
                        metalness={0.2}
                    />
                </mesh>
            );
        }
    }

    return (
        <group>
            {squares}
            <mesh position={[0, -0.2, 0]} receiveShadow>
                <boxGeometry args={[9, 0.2, 9]} />
                <meshStandardMaterial color="#050505" roughness={1} />
            </mesh>
        </group>
    );
}

function Piece({ type, color, position }: { type: string; color: string; position: [number, number, number] }) {
    const meshRef = useRef<THREE.Group>(null);
    const targetPos = useMemo(() => new THREE.Vector3(...position), [position]);
    const currentPos = useRef(new THREE.Vector3(...position));

    const isWhite = color === "w";
    const colorHex = isWhite ? "#ededed" : "#333333";
    const metalness = isWhite ? 0.2 : 0.8;
    const roughness = isWhite ? 0.3 : 0.1;

    const material = useMemo(() => new THREE.MeshStandardMaterial({
        color: colorHex,
        metalness,
        roughness
    }), [colorHex, metalness, roughness]);

    useFrame((state, delta) => {
        if (meshRef.current) {
            currentPos.current.lerp(targetPos, 0.1);
            meshRef.current.position.copy(currentPos.current);
            // Subtle float effect relative to base position
            meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.005;
        }
    });

    const getGeometry = () => {
        switch (type) {
            case "p":
                return (
                    <mesh castShadow material={material}>
                        <cylinderGeometry args={[0.25, 0.3, 0.5, 20]} />
                    </mesh>
                );
            case "r":
                return (
                    <mesh castShadow material={material}>
                        <boxGeometry args={[0.45, 0.7, 0.45]} />
                    </mesh>
                );
            case "n":
                return (
                    <group>
                        <mesh position={[0, -0.1, 0]} castShadow material={material}>
                            <cylinderGeometry args={[0.15, 0.35, 0.4, 8]} />
                        </mesh>
                        <mesh position={[0, 0.2, 0.05]} rotation={[Math.PI / 4, 0, 0]} castShadow material={material}>
                            <boxGeometry args={[0.25, 0.35, 0.25]} />
                        </mesh>
                    </group>
                );
            case "b":
                return (
                    <group>
                        <mesh position={[0, -0.1, 0]} castShadow material={material}>
                            <cylinderGeometry args={[0.1, 0.3, 0.6, 20]} />
                        </mesh>
                        <mesh position={[0, 0.3, 0]} castShadow material={material}>
                            <sphereGeometry args={[0.18]} />
                        </mesh>
                    </group>
                );
            case "q":
                return (
                    <group>
                        <mesh position={[0, 0, 0]} castShadow material={material}>
                            <cylinderGeometry args={[0.15, 0.3, 0.8, 20]} />
                        </mesh>
                        <mesh position={[0, 0.45, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow material={material}>
                            <torusGeometry args={[0.12, 0.04, 8, 20]} />
                        </mesh>
                    </group>
                );
            case "k":
                return (
                    <group>
                        <mesh position={[0, 0, 0]} castShadow material={material}>
                            <cylinderGeometry args={[0.15, 0.3, 0.8, 20]} />
                        </mesh>
                        <mesh position={[0, 0.5, 0]} castShadow material={material}>
                            <boxGeometry args={[0.15, 0.3, 0.15]} />
                        </mesh>
                        <mesh position={[0, 0.55, 0]} castShadow material={material}>
                            <boxGeometry args={[0.35, 0.1, 0.15]} />
                        </mesh>
                    </group>
                );
            default:
                return (
                    <mesh castShadow material={material}>
                        <sphereGeometry args={[0.3]} />
                    </mesh>
                );
        }
    };

    return (
        <group ref={meshRef}>
            <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
                <group position={[0, 0.3, 0]}>
                    {getGeometry()}
                </group>
            </Float>
        </group>
    );
}
