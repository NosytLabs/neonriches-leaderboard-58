
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface ThroneCoinSceneProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  interactive?: boolean;
  className?: string;
}

const ThroneCoinScene = ({
  size = 'md',
  animated = true,
  interactive = true,
  className = ''
}: ThroneCoinSceneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  
  // Get dimensions based on size prop
  const getDimensions = () => {
    switch (size) {
      case 'sm':
        return { width: 150, height: 150 };
      case 'lg':
        return { width: 400, height: 400 };
      case 'md':
      default:
        return { width: 300, height: 300 };
    }
  };
  
  // Initialize the scene
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Set up background
    scene.background = new THREE.Color(0x090909);
    
    // Create camera
    const { width, height } = getDimensions();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 7;
    cameraRef.current = camera;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Add controls if interactive
    if (interactive) {
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.minDistance = 3;
      controls.maxDistance = 15;
      controls.enablePan = false;
      controlsRef.current = controls;
    }
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    const directionalLight2 = new THREE.DirectionalLight(0xffaa00, 0.8);
    directionalLight2.position.set(-5, 5, -5);
    scene.add(directionalLight2);
    
    // Create throne
    const throneGroup = new THREE.Group();
    
    // Throne base
    const baseGeometry = new THREE.BoxGeometry(3, 0.5, 3);
    const baseMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x8B4513,
      shininess: 50
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -2;
    base.castShadow = true;
    base.receiveShadow = true;
    throneGroup.add(base);
    
    // Throne seat
    const seatGeometry = new THREE.BoxGeometry(2.5, 0.5, 2);
    const seatMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x800000,
      shininess: 100,
      specular: 0x111111
    });
    const seat = new THREE.Mesh(seatGeometry, seatMaterial);
    seat.position.y = -1.5;
    seat.castShadow = true;
    seat.receiveShadow = true;
    throneGroup.add(seat);
    
    // Throne back
    const backGeometry = new THREE.BoxGeometry(2.5, 3, 0.5);
    const backMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x800000,
      shininess: 100,
      specular: 0x111111
    });
    const back = new THREE.Mesh(backGeometry, backMaterial);
    back.position.y = -0.25;
    back.position.z = -1;
    back.castShadow = true;
    back.receiveShadow = true;
    throneGroup.add(back);
    
    // Throne left arm
    const leftArmGeometry = new THREE.BoxGeometry(0.5, 1, 2);
    const armMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x8B4513,
      shininess: 50
    });
    const leftArm = new THREE.Mesh(leftArmGeometry, armMaterial);
    leftArm.position.set(-1, -1, 0);
    leftArm.castShadow = true;
    leftArm.receiveShadow = true;
    throneGroup.add(leftArm);
    
    // Throne right arm
    const rightArm = new THREE.Mesh(leftArmGeometry, armMaterial);
    rightArm.position.set(1, -1, 0);
    rightArm.castShadow = true;
    rightArm.receiveShadow = true;
    throneGroup.add(rightArm);
    
    // Add crown on top
    const crownGroup = new THREE.Group();
    
    const crownBaseGeometry = new THREE.CylinderGeometry(0.6, 0.8, 0.5, 8);
    const crownMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xFFD700,
      shininess: 100
    });
    const crownBase = new THREE.Mesh(crownBaseGeometry, crownMaterial);
    crownBase.position.y = 0.25;
    crownGroup.add(crownBase);
    
    // Crown points
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const pointGeometry = new THREE.ConeGeometry(0.2, 0.5, 6);
      const point = new THREE.Mesh(pointGeometry, crownMaterial);
      point.position.x = Math.cos(angle) * 0.5;
      point.position.z = Math.sin(angle) * 0.5;
      point.position.y = 0.75;
      crownGroup.add(point);
    }
    
    crownGroup.position.y = 1.5;
    throneGroup.add(crownGroup);
    
    // Add coins around the throne
    const coinGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.05, 24);
    const goldMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xFFD700, 
      shininess: 100 
    });
    
    for (let i = 0; i < 20; i++) {
      const coin = new THREE.Mesh(coinGeometry, goldMaterial);
      const angle = Math.random() * Math.PI * 2;
      const radius = 2.5 + Math.random() * 2;
      coin.position.x = Math.cos(angle) * radius;
      coin.position.z = Math.sin(angle) * radius;
      coin.position.y = -2 + Math.random() * 0.5;
      coin.rotation.x = Math.PI / 2;
      coin.rotation.z = Math.random() * Math.PI;
      scene.add(coin);
    }
    
    // Add the throne to the scene
    scene.add(throneGroup);
    
    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      
      if (animated) {
        throneGroup.rotation.y += 0.005;
        crownGroup.rotation.y -= 0.008;
      }
      
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup on unmount
    return () => {
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      rendererRef.current?.dispose();
      controlsRef.current?.dispose();
    };
  }, [size, animated, interactive]);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current || !containerRef.current) return;
      
      const { width, height } = getDimensions();
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [size]);
  
  return (
    <div ref={containerRef} className={`throne-scene ${className}`}></div>
  );
};

export default ThroneCoinScene;
