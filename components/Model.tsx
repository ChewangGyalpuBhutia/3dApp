import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        Octopus: THREE.Mesh;
    };
    materials: {
        Octopus: THREE.MeshStandardMaterial;
    };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF(require('../assets/Model/octopus.glb')) as GLTFResult;

    console.log('Nodes:', nodes);
    console.log('Materials:', materials);

    if (!nodes || !materials) {
        console.error('Failed to load nodes or materials');
        return null;
    }

    // Change the color of the octopus material to black
    materials.Octopus.color = new THREE.Color(0x000000);

    return (
        <group {...props} dispose={null}>
            {nodes.Octopus && (
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Octopus.geometry}
                    material={materials.Octopus}
                />
            )}
        </group>
    );
}

useGLTF.preload(require('../assets/Model/octopus.glb'));