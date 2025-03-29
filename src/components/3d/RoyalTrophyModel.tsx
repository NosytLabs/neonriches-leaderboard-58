
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

interface RoyalTrophyModelProps {
  width?: number;
  height?: number;
  rank?: number;
  className?: string;
  autoRotate?: boolean;
}

const RoyalTrophyModel: React.FC<RoyalTrophyModelProps> = ({
  width = 300,
  height = 300,
  rank = 1,
  className = '',
  autoRotate = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const trophyRef = useRef<THREE.Group | null>(null);
  
  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Set background
    scene.background = new THREE.Color(0x0A0A0A);
    
    // Add fog for depth
    scene.fog = new THREE.Fog(0x0A0A0A, 10, 30);
    
    // Initialize camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5);
    cameraRef.current = camera;
    
    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    // Update: replaced deprecated outputEncoding with outputColorSpace
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 1.5;
    controls.minDistance = 3;
    controls.maxDistance = 10;
    controlsRef.current = controls;
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0xD4AF37, 1, 10);
    pointLight.position.set(0, 2, 2);
    scene.add(pointLight);
    
    // Create the trophy group
    const trophyGroup = new THREE.Group();
    trophyRef.current = trophyGroup;
    scene.add(trophyGroup);
    
    // Create trophy base
    const baseGeometry = new THREE.CylinderGeometry(1.2, 1.5, 0.5, 32);
    const baseMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x3D3D3D,
      metalness: 0.7,
      roughness: 0.2,
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -2;
    base.castShadow = true;
    base.receiveShadow = true;
    trophyGroup.add(base);
    
    // Create middle column
    const columnGeometry = new THREE.CylinderGeometry(0.3, 0.3, 2, 32);
    const columnMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xD4AF37,
      metalness: 0.8,
      roughness: 0.1,
    });
    const column = new THREE.Mesh(columnGeometry, columnMaterial);
    column.position.y = -0.75;
    column.castShadow = true;
    trophyGroup.add(column);
    
    // Create cup
    const cupBottomGeometry = new THREE.CylinderGeometry(0.7, 0.3, 0.5, 32);
    const cupTopGeometry = new THREE.CylinderGeometry(1, 0.7, 1.5, 32);
    const cupMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xD4AF37,
      metalness: 0.9,
      roughness: 0.1,
      envMapIntensity: 1,
    });
    
    const cupBottom = new THREE.Mesh(cupBottomGeometry, cupMaterial);
    cupBottom.position.y = 0.25;
    cupBottom.castShadow = true;
    trophyGroup.add(cupBottom);
    
    const cupTop = new THREE.Mesh(cupTopGeometry, cupMaterial);
    cupTop.position.y = 1.25;
    cupTop.castShadow = true;
    trophyGroup.add(cupTop);
    
    // Attempt to load a font and add rank text
    const fontLoader = new FontLoader();
    fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
      const rankGeometry = new TextGeometry(`#${rank}`, {
        font: font,
        size: 0.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5
      });
      
      rankGeometry.computeBoundingBox();
      
      // Center the text
      if (rankGeometry.boundingBox) {
        const centerOffset = -0.5 * (rankGeometry.boundingBox.max.x - rankGeometry.boundingBox.min.x);
        const rankMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xD4AF37,
          metalness: 0.9,
          roughness: 0.1,
        });
        
        const rankText = new THREE.Mesh(rankGeometry, rankMaterial);
        rankText.position.set(centerOffset, -1.8, 0.6);
        rankText.castShadow = true;
        trophyGroup.add(rankText);
      }
    });
    
    // Add particles for a sparkling effect
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const positionsArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      positionsArray[i3] = (Math.random() - 0.5) * 5;
      positionsArray[i3 + 1] = Math.random() * 5 - 2;
      positionsArray[i3 + 2] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionsArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xD4AF37,
      size: 0.07,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      if (particles) {
        // Animate particles
        const positions = particles.geometry.attributes.position;
        const positionsArr = positions.array as Float32Array;
        
        for (let i = 0; i < particlesCount; i++) {
          const i3 = i * 3;
          positionsArr[i3 + 1] -= 0.01; // Falling effect
          
          // Reset particle position if it falls below the scene
          if (positionsArr[i3 + 1] < -3) {
            positionsArr[i3] = (Math.random() - 0.5) * 5;
            positionsArr[i3 + 1] = 3;
            positionsArr[i3 + 2] = (Math.random() - 0.5) * 5;
          }
        }
        positions.needsUpdate = true;
      }
      
      if (trophyRef.current) {
        // Add subtle floating animation to the trophy
        trophyRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.05;
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    
    animate();
    
    // Window resize handler
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      
      // Dispose of all geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose();
          
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
    };
  }, [width, height, rank, autoRotate]);
  
  return <div ref={containerRef} className={className} />;
};

export default RoyalTrophyModel;
