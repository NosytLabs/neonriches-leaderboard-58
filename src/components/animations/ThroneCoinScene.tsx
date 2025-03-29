
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface ThroneCoinSceneProps {
  className?: string;
}

const ThroneCoinScene: React.FC<ThroneCoinSceneProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Initialize scene
    const scene = new THREE.Scene();
    
    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 10;
    camera.position.y = 3;
    
    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    
    const dirLight1 = new THREE.DirectionalLight(0xffff80, 2);
    dirLight1.position.set(5, 10, 7.5);
    scene.add(dirLight1);
    
    const dirLight2 = new THREE.DirectionalLight(0x8080ff, 1.5);
    dirLight2.position.set(-5, 5, -7.5);
    scene.add(dirLight2);
    
    // Add a spotlight for the throne
    const spotlight = new THREE.SpotLight(0xd4af37, 2);
    spotlight.position.set(0, 10, 5);
    spotlight.angle = Math.PI / 6;
    spotlight.penumbra = 0.5;
    spotlight.decay = 2;
    spotlight.distance = 50;
    scene.add(spotlight);
    
    // Create the throne
    const createThrone = () => {
      // Throne group
      const throneGroup = new THREE.Group();
      
      // Throne base
      const baseGeometry = new THREE.BoxGeometry(5, 1, 4);
      const baseMaterial = new THREE.MeshPhongMaterial({ color: 0x7851a9 });
      const base = new THREE.Mesh(baseGeometry, baseMaterial);
      base.position.y = 0.5;
      throneGroup.add(base);
      
      // Throne seat
      const seatGeometry = new THREE.BoxGeometry(4, 1, 3);
      const seatMaterial = new THREE.MeshPhongMaterial({ color: 0x9b2335 });
      const seat = new THREE.Mesh(seatGeometry, seatMaterial);
      seat.position.y = 1.5;
      throneGroup.add(seat);
      
      // Throne back
      const backGeometry = new THREE.BoxGeometry(4, 4, 1);
      const backMaterial = new THREE.MeshPhongMaterial({ color: 0x9b2335 });
      const back = new THREE.Mesh(backGeometry, backMaterial);
      back.position.y = 3.5;
      back.position.z = -1;
      throneGroup.add(back);
      
      // Throne armrests
      const armGeometry = new THREE.BoxGeometry(0.6, 1, 3);
      const armMaterial = new THREE.MeshPhongMaterial({ color: 0x7851a9 });
      
      const leftArm = new THREE.Mesh(armGeometry, armMaterial);
      leftArm.position.set(-2.3, 2, 0);
      throneGroup.add(leftArm);
      
      const rightArm = new THREE.Mesh(armGeometry, armMaterial);
      rightArm.position.set(2.3, 2, 0);
      throneGroup.add(rightArm);
      
      // Crown on top
      const crownGroup = new THREE.Group();
      
      // Crown base
      const crownBaseGeometry = new THREE.CylinderGeometry(0.8, 1, 0.5, 8);
      const crownBaseMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xd4af37,
        metalness: 0.7,
        roughness: 0.3,
      });
      const crownBase = new THREE.Mesh(crownBaseGeometry, crownBaseMaterial);
      crownBase.position.y = 6;
      crownGroup.add(crownBase);
      
      // Crown points
      const createCrownPoint = (angle: number) => {
        const pointGeometry = new THREE.ConeGeometry(0.2, 0.7, 8);
        const pointMaterial = new THREE.MeshPhongMaterial({ 
          color: 0xd4af37,
          metalness: 0.7,
          roughness: 0.3,
        });
        const point = new THREE.Mesh(pointGeometry, pointMaterial);
        const radius = 0.8;
        point.position.x = Math.cos(angle) * radius;
        point.position.z = Math.sin(angle) * radius;
        point.position.y = 6.5;
        crownGroup.add(point);
      };
      
      // Create crown points
      for (let i = 0; i < 8; i++) {
        createCrownPoint((i / 8) * Math.PI * 2);
      }
      
      throneGroup.add(crownGroup);
      
      // Add decorative elements
      const addOrb = (x: number, y: number, z: number, color: number) => {
        const geometry = new THREE.SphereGeometry(0.3, 16, 16);
        const material = new THREE.MeshPhongMaterial({ 
          color,
          metalness: 0.7,
          roughness: 0.3,
        });
        const orb = new THREE.Mesh(geometry, material);
        orb.position.set(x, y, z);
        throneGroup.add(orb);
      };
      
      // Add decorative orbs
      addOrb(-1.5, 5.6, 0, 0xd4af37);
      addOrb(1.5, 5.6, 0, 0xd4af37);
      addOrb(0, 5.6, 0, 0x9b2335);
      
      return throneGroup;
    };
    
    // Create and add the throne
    const throne = createThrone();
    scene.add(throne);
    
    // Create floating coins
    const coins: THREE.Group[] = [];
    const createCoin = () => {
      const coinGroup = new THREE.Group();
      
      // Coin body
      const coinGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 32);
      const coinMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xd4af37,
        metalness: 0.7,
        roughness: 0.3,
      });
      const coin = new THREE.Mesh(coinGeometry, coinMaterial);
      coinGroup.add(coin);
      
      // Coin edge details
      const edgeGeometry = new THREE.TorusGeometry(0.5, 0.05, 16, 32);
      const edgeMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xf5cc5d,
        metalness: 0.7,
        roughness: 0.3,
      });
      const edge = new THREE.Mesh(edgeGeometry, edgeMaterial);
      edge.rotation.x = Math.PI / 2;
      coinGroup.add(edge);
      
      return coinGroup;
    };
    
    // Add coins around the throne
    const coinPositions = [
      { x: -3, y: 1, z: 0 },
      { x: 3, y: 1, z: 0 },
      { x: -2.5, y: 0.5, z: 2 },
      { x: 2.5, y: 0.5, z: 2 },
      { x: -2, y: 3, z: -1 },
      { x: 2, y: 3, z: -1 },
    ];
    
    coinPositions.forEach(position => {
      const coin = createCoin();
      coin.position.set(position.x, position.y, position.z);
      coin.rotation.x = Math.PI / 2;
      coin.userData = {
        rotationSpeed: Math.random() * 0.02 + 0.01,
        floatSpeed: Math.random() * 0.01 + 0.005,
        floatDirection: Math.random() > 0.5 ? 1 : -1,
        originalY: position.y,
        floatAmount: 0.3
      };
      scene.add(coin);
      coins.push(coin);
    });
    
    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.rotateSpeed = 0.5;
    controls.minPolarAngle = Math.PI / 4;
    controls.maxPolarAngle = Math.PI / 2.5;
    
    // Animation function
    let frameId: number | null = null;
    
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      if (throne) {
        throne.rotation.y += 0.002;
      }
      
      // Animate coins
      coins.forEach(coin => {
        if (coin.userData) {
          coin.rotation.y += coin.userData.rotationSpeed;
          
          // Floating animation
          const newY = coin.userData.originalY + 
            Math.sin(Date.now() * coin.userData.floatSpeed) * 
            coin.userData.floatAmount * 
            coin.userData.floatDirection;
          
          coin.position.y = newY;
        }
      });
      
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !renderer) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
      
      if (renderer && containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Clean up scene resources
      scene.clear();
      renderer.dispose();
    };
  }, []);
  
  return <div ref={containerRef} className={className} />;
};

export default ThroneCoinScene;
