// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Stars, OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
// import { Howl } from "howler";

// // Optional ambient sound
// const sound = new Howl({
//     src: ["/assets/sounds/space-ambient.mp3"], // Add a space sound file
//     loop: true,
//     volume: 0.3,
// });
// sound.play();

// const Planet = ({ position, color, size, speed }) => {
//     const mesh = useRef();
//     useFrame(({ clock }) => {
//         mesh.current.rotation.y = clock.getElapsedTime() * speed;
//     });
//     return (
//         <Sphere ref={mesh} args={[size, 32, 32]} position={position}>
//             <MeshDistortMaterial color={color} distort={0.3} speed={speed} />
//         </Sphere>
//     );
// };

// export default function GalaxyScene() {
//     return (
//         <Canvas
//             className="absolute inset-0 z-0"
//             camera={{ position: [0, 0, 20], fov: 75 }}
//         >
//             {/* Background stars */}
//             <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

//             {/* Example planets */}
//             <Planet position={[-5, 0, -10]} color="#ff8c00" size={1.5} speed={0.2} />
//             <Planet position={[7, 2, -15]} color="#1e90ff" size={2} speed={0.1} />
//             <Planet position={[0, -3, -12]} color="#ff1493" size={1.2} speed={0.15} />

//             {/* Camera Controls (optional, for development) */}
//             <OrbitControls enableZoom={false} enablePan={false} />
//         </Canvas>
//     );
// }

// import React, { useRef, useEffect } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { Stars, Sphere, MeshDistortMaterial } from "@react-three/drei";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Planet = ({ position, color, size, speed }) => {
//     const mesh = useRef();
//     useFrame(({ clock }) => {
//         mesh.current.rotation.y = clock.getElapsedTime() * speed;
//     });
//     return (
//         <Sphere ref={mesh} args={[size, 32, 32]} position={position}>
//             <MeshDistortMaterial color={color} distort={0.3} speed={speed} />
//         </Sphere>
//     );
// };

// const CameraController = () => {
//     const { camera } = useThree();

//     useEffect(() => {
//         // Animate camera z-position as user scrolls
//         gsap.to(camera.position, {
//             z: -50,
//             scrollTrigger: {
//                 trigger: "#scroll-container",
//                 start: "top top",
//                 end: "bottom bottom",
//                 scrub: true,
//             },
//         });
//     }, [camera]);

//     return null;
// };

// export default function GalaxyScene() {
//     return (
//         <>
//             <Canvas
//                 className="absolute inset-0 z-0"
//                 camera={{ position: [0, 0, 20], fov: 75 }}
//             >
//                 <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
//                 <Planet position={[-5, 0, -10]} color="#ff8c00" size={1.5} speed={0.2} />
//                 <Planet position={[7, 2, -15]} color="#1e90ff" size={2} speed={0.1} />
//                 <Planet position={[0, -3, -25]} color="#ff1493" size={1.2} speed={0.15} />
//                 <CameraController />
//             </Canvas>

//             {/* Scroll container for triggering scroll events */}
//             <div id="scroll-container" className="absolute inset-0 h-[400vh]"></div>
//         </>
//     );
// }

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Sphere, MeshDistortMaterial } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Howl } from "howler";

gsap.registerPlugin(ScrollTrigger);

const sounds = [
    new Howl({ src: ["/assets/sounds/space-ambient1.mp3"], loop: true, volume: 0.3 }),
    new Howl({ src: ["/assets/sounds/space-ambient2.mp3"], loop: true, volume: 0.3 }),
    new Howl({ src: ["/assets/sounds/space-ambient3.mp3"], loop: true, volume: 0.3 }),
];
// useEffect(() => {
// const triggers = [
//   { id: "#section1", soundIndex: 0 },
//   { id: "#section2", soundIndex: 1 },
//   { id: "#section3", soundIndex: 2 },
// ];

// triggers.forEach(({ id, soundIndex }) => {
//   ScrollTrigger.create({
//     trigger: id,
//     start: "top center",
//     end: "bottom center",
//     onEnter: () => sounds[soundIndex].play(),
//     onLeaveBack: () => sounds[soundIndex].stop(),
//   });
// });
//   }, []);
const Planet = ({ position, color, size, speed }) => {
    const mesh = useRef();
    useFrame(({ clock }) => {
        mesh.current.rotation.y = clock.getElapsedTime() * speed;
    });
    return (
        <Sphere ref={mesh} args={[size, 32, 32]} position={position}>
            <MeshDistortMaterial color={color} distort={0.3} speed={speed} />
        </Sphere>
    );
};

const CameraController = () => {
    const { camera } = useThree();

    useEffect(() => {
        // Move camera based on scroll
        gsap.to(camera.position, {
            z: -50,
            scrollTrigger: {
                trigger: "#scroll-container",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        });
        const triggers = [
            { id: "#section1", soundIndex: 0 },
            { id: "#section2", soundIndex: 1 },
            { id: "#section3", soundIndex: 2 },
        ];
        triggers.forEach(({ id, soundIndex }) => {
            ScrollTrigger.create({
                trigger: id,
                start: "top center",
                end: "bottom center",
                onEnter: () => sounds[soundIndex].play(),
                onLeaveBack: () => sounds[soundIndex].stop(),
            });
        });
    }, [camera]);

    return null;
};

export default function GalaxyScene() {
    return (
        <>
            <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 20], fov: 75 }}>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

                {/* Section 1 planet */}
                <Planet position={[-5, 0, -10]} color="#ff8c00" size={1.5} speed={0.2} />

                {/* Section 2 planet */}
                <Planet position={[7, 2, -25]} color="#1e90ff" size={2} speed={0.1} />

                {/* Section 3 planet */}
                <Planet position={[0, -3, -40]} color="#ff1493" size={1.2} speed={0.15} />

                <CameraController />
            </Canvas>

            {/* Scroll container */}
            <div id="scroll-container" className="absolute inset-0 h-[400vh]">
                {/* Add empty divs as scroll triggers for each section if needed */}
                <div id="section1" className="h-screen"></div>
                <div id="section2" className="h-screen"></div>
                <div id="section3" className="h-screen"></div>
                <div id="section4" className="h-screen"></div>
            </div>
        </>
    );
}
