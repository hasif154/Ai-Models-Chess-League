"use client";
/// <reference types="@react-three/fiber" />

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, ContactShadows } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";
import { Chess } from "chess.js";

interface Scene3dProps {
    fen: string;
    lastMove?: string;
    whitePieceStyle?: "maple" | "cherry";
    currentTurn?: "w" | "b"; // Current player's turn
}

// Map piece positions
function fenToBoard(fen: string) {
    const chess = new Chess(fen);
    return chess.board();
}

export default function Scene3d({ fen, lastMove, whitePieceStyle = "maple", currentTurn = "w" }: Scene3dProps) {
    const board = useMemo(() => fenToBoard(fen), [fen]);

    return (
        <div className="w-full h-full">
            <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: false }}>
                {/* Static camera - fixed position */}
                <PerspectiveCamera makeDefault position={[0, 7, 14]} fov={38} />
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2.2}
                    minPolarAngle={Math.PI / 6}
                    autoRotate={false}
                    enableDamping
                    dampingFactor={0.05}
                    target={[0, 0, 0]}
                />

                {/* Pure black background */}
                <color attach="background" args={["#0a0a0a"]} />

                {/* Soft ambient lighting */}
                <ambientLight intensity={0.5} />

                {/* Main front-top light for even illumination */}
                <directionalLight
                    position={[8, 15, 12]}
                    intensity={1.8}
                    castShadow
                    shadow-mapSize={[2048, 2048]}
                    shadow-bias={-0.0001}
                />

                {/* Soft fill from left */}
                <directionalLight
                    position={[-10, 10, 5]}
                    intensity={0.6}
                    color="#f8f8ff"
                />

                {/* Back rim light for depth */}
                <pointLight position={[0, 8, -15]} intensity={40} color="#ffffff" />

                <Suspense fallback={null}>
                    <ChessBoard />
                    <ChessPieces board={board} whitePieceStyle={whitePieceStyle} />
                </Suspense>

                <ContactShadows
                    position={[0, -0.01, 0]}
                    opacity={0.35}
                    scale={14}
                    blur={2.5}
                    far={4}
                    resolution={1024}
                    color="#000000"
                />
            </Canvas>
        </div>
    );
}


function ChessBoard() {
    // Elegant dark and light chess board colors
    const darkSquareColor = "#1B1A1B";  // Dark charcoal
    const lightSquareColor = "#E5E0D7"; // Soft ivory
    const borderColor = "#B7A688";       // Border frame
    const cornerColor = "#6D4C32";       // Border corners

    const squares = useMemo(() => {
        const result = [];
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const isDark = (row + col) % 2 === 1;
                const x = col - 3.5;
                const z = row - 3.5;
                result.push(
                    <mesh
                        key={`${row}-${col}`}
                        position={[x, 0.06, z]}
                        receiveShadow
                    >
                        <boxGeometry args={[1, 0.12, 1]} />
                        <meshStandardMaterial
                            color={isDark ? darkSquareColor : lightSquareColor}
                            roughness={0.55}
                            metalness={0.02}
                        />
                    </mesh>
                );
            }
        }
        return result;
    }, []);

    // Corner positions
    const corners = [
        [-4.2, -4.2], [-4.2, 4.2], [4.2, -4.2], [4.2, 4.2]
    ];

    return (
        <group>
            {squares}

            {/* Main border frame */}
            <mesh position={[0, -0.02, 0]} receiveShadow>
                <boxGeometry args={[8.6, 0.2, 8.6]} />
                <meshStandardMaterial
                    color={borderColor}
                    roughness={0.65}
                    metalness={0.02}
                />
            </mesh>

            {/* Corner accents */}
            {corners.map(([x, z], i) => (
                <mesh key={i} position={[x, 0.02, z]} receiveShadow>
                    <boxGeometry args={[0.6, 0.18, 0.6]} />
                    <meshStandardMaterial
                        color={cornerColor}
                        roughness={0.5}
                        metalness={0.05}
                    />
                </mesh>
            ))}

            {/* Thin dark line at board edge */}
            <mesh position={[0, 0.005, 0]}>
                <boxGeometry args={[8.02, 0.01, 8.02]} />
                <meshStandardMaterial color="#2a2a2a" roughness={0.9} />
            </mesh>
        </group>
    );
}

interface ChessPiecesProps {
    board: ReturnType<typeof fenToBoard>;
    whitePieceStyle: "maple" | "cherry";
}

function ChessPieces({ board, whitePieceStyle }: ChessPiecesProps) {
    const pieces: any[] = [];

    board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            if (cell) {
                const x = colIndex - 3.5;
                const z = rowIndex - 3.5;
                pieces.push(
                    <ChessPiece
                        key={`${cell.type}-${cell.color}-${rowIndex}-${colIndex}`}
                        type={cell.type}
                        color={cell.color}
                        targetPosition={[x, 0.12, z]}
                        whitePieceStyle={whitePieceStyle}
                    />
                );
            }
        });
    });

    return <>{pieces}</>;
}

interface ChessPieceProps {
    type: string;
    color: string;
    targetPosition: [number, number, number];
    whitePieceStyle: "maple" | "cherry";
}

function ChessPiece({ type, color, targetPosition, whitePieceStyle }: ChessPieceProps) {
    const meshRef = useRef<THREE.Group>(null);
    const currentPos = useRef(new THREE.Vector3(...targetPosition));
    const target = useMemo(() => new THREE.Vector3(...targetPosition), [targetPosition]);

    const isWhite = color === "w";

    // White piece colors based on style option
    const whitePieceColors = {
        maple: "#E7D9B7",  // Maple Light
        cherry: "#CBB88B"  // Cherry Warm
    };

    // Piece materials - static lighting
    const material = useMemo(() => {
        if (isWhite) {
            return new THREE.MeshStandardMaterial({
                color: whitePieceColors[whitePieceStyle],
                roughness: 0.25,
                metalness: 0.02,
            });
        } else {
            // Dark pieces
            return new THREE.MeshStandardMaterial({
                color: "#1F1E1D",
                roughness: 0.2,
                metalness: 0.1,
            });
        }
    }, [isWhite, whitePieceStyle]);

    useFrame(() => {
        if (meshRef.current) {
            currentPos.current.lerp(target, 0.12);
            meshRef.current.position.copy(currentPos.current);
        }
    });

    const getPieceGeometry = () => {
        const t = type.toLowerCase();
        switch (t) {
            case "p": // Pawn
                return (
                    <group>
                        <mesh castShadow receiveShadow position={[0, 0.05, 0]} material={material}>
                            <cylinderGeometry args={[0.28, 0.32, 0.08, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.15, 0]} material={material}>
                            <cylinderGeometry args={[0.18, 0.26, 0.14, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.26, 0]} material={material}>
                            <cylinderGeometry args={[0.12, 0.16, 0.1, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.38, 0]} material={material}>
                            <sphereGeometry args={[0.14, 32, 32]} />
                        </mesh>
                    </group>
                );

            case "r": // Rook
                return (
                    <group>
                        <mesh castShadow receiveShadow position={[0, 0.05, 0]} material={material}>
                            <cylinderGeometry args={[0.3, 0.34, 0.08, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.28, 0]} material={material}>
                            <cylinderGeometry args={[0.22, 0.28, 0.4, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.52, 0]} material={material}>
                            <cylinderGeometry args={[0.26, 0.22, 0.08, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.62, 0]} material={material}>
                            <cylinderGeometry args={[0.24, 0.26, 0.12, 6]} />
                        </mesh>
                    </group>
                );

            case "n": // Knight
                return (
                    <group>
                        <mesh castShadow receiveShadow position={[0, 0.05, 0]} material={material}>
                            <cylinderGeometry args={[0.3, 0.34, 0.08, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.2, 0]} material={material}>
                            <cylinderGeometry args={[0.16, 0.26, 0.24, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.42, 0.03]} rotation={[-0.3, 0, 0]} material={material}>
                            <cylinderGeometry args={[0.1, 0.14, 0.3, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.6, 0.1]} rotation={[-0.5, 0, 0]} material={material}>
                            <boxGeometry args={[0.16, 0.28, 0.24]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.58, 0.28]} rotation={[0.1, 0, 0]} material={material}>
                            <boxGeometry args={[0.12, 0.15, 0.18]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.74, 0.05]} rotation={[-0.2, 0, 0]} material={material}>
                            <coneGeometry args={[0.05, 0.1, 16]} />
                        </mesh>
                    </group>
                );

            case "b": // Bishop
                return (
                    <group>
                        <mesh castShadow receiveShadow position={[0, 0.05, 0]} material={material}>
                            <cylinderGeometry args={[0.3, 0.34, 0.08, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.26, 0]} material={material}>
                            <cylinderGeometry args={[0.1, 0.26, 0.36, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.52, 0]} material={material}>
                            <sphereGeometry args={[0.16, 32, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.58, 0.08]} rotation={[0.3, 0, 0]} material={material}>
                            <boxGeometry args={[0.04, 0.12, 0.02]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.7, 0]} material={material}>
                            <sphereGeometry args={[0.05, 16, 16]} />
                        </mesh>
                    </group>
                );

            case "q": // Queen
                return (
                    <group>
                        <mesh castShadow receiveShadow position={[0, 0.05, 0]} material={material}>
                            <cylinderGeometry args={[0.32, 0.36, 0.08, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.35, 0]} material={material}>
                            <cylinderGeometry args={[0.1, 0.3, 0.54, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.66, 0]} material={material}>
                            <sphereGeometry args={[0.18, 32, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.82, 0]} material={material}>
                            <cylinderGeometry args={[0.14, 0.1, 0.1, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.92, 0]} material={material}>
                            <sphereGeometry args={[0.08, 24, 24]} />
                        </mesh>
                    </group>
                );

            case "k": // King
                return (
                    <group>
                        <mesh castShadow receiveShadow position={[0, 0.05, 0]} material={material}>
                            <cylinderGeometry args={[0.32, 0.36, 0.08, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.35, 0]} material={material}>
                            <cylinderGeometry args={[0.12, 0.3, 0.54, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.66, 0]} material={material}>
                            <sphereGeometry args={[0.18, 32, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.8, 0]} material={material}>
                            <cylinderGeometry args={[0.12, 0.15, 0.08, 32]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 0.96, 0]} material={material}>
                            <boxGeometry args={[0.05, 0.24, 0.05]} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[0, 1.0, 0]} material={material}>
                            <boxGeometry args={[0.18, 0.05, 0.05]} />
                        </mesh>
                    </group>
                );

            default:
                return (
                    <mesh castShadow receiveShadow material={material}>
                        <sphereGeometry args={[0.2, 32, 32]} />
                    </mesh>
                );
        }
    };

    return (
        <group ref={meshRef}>
            {getPieceGeometry()}
        </group>
    );
}
