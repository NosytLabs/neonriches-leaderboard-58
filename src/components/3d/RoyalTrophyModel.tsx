
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

interface RoyalTrophyModelProps {
  username?: string;
  placement?: number;
  spinSpeed?: number;
  size?: 'small' | 'medium' | 'large';
  glowColor?: string;
  showText?: boolean;
}

const RoyalTrophyModel: React.FC<RoyalTrophyModelProps> = ({
  username = 'CHAMPION',
  placement = 1,
  spinSpeed = 0.5,
  size = 'medium',
  glowColor = '#FFD700',
  showText = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const initializedRef = useRef(false);
  
  const [isLoaded, setIsLoaded] = useState(false);
  
  const getDimensions = () => {
    switch (size) {
      case 'small': return { width: 200, height: 200 };
      case 'large': return { width: 500, height: 500 };
      case 'medium':
      default: return { width: 300, height: 300 };
    }
  };
  
  useEffect(() => {
    if (!containerRef.current || initializedRef.current) return;
    
    initializedRef.current = true;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.Fog(0x000000, 10, 30);
    sceneRef.current = scene;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const dimensions = getDimensions();
    renderer.setSize(dimensions.width, dimensions.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    // For Three.js compatibility in different versions
    if ('sRGBEncoding' in THREE) {
      renderer.outputEncoding = THREE.sRGBEncoding;
    } else if ('outputColorSpace' in renderer) {
      renderer.outputColorSpace = THREE.SRGBColorSpace;
    }
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      dimensions.width / dimensions.height,
      0.1,
      1000
    );
    camera.position.z = 10;
    cameraRef.current = camera;
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(5, 5, 10);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 0.2;
    spotLight.decay = 2;
    spotLight.distance = 100;
    scene.add(spotLight);
    
    const spotLight2 = new THREE.SpotLight(0xffffff, 0.8);
    spotLight2.position.set(-5, 5, 5);
    spotLight2.angle = Math.PI / 6;
    spotLight2.penumbra = 0.2;
    spotLight2.decay = 2;
    spotLight2.distance = 100;
    scene.add(spotLight2);
    
    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = spinSpeed * 4;
    
    // Trophy material
    const trophyMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4AF37, // Gold color
      metalness: 1,
      roughness: 0.25,
      emissive: 0x221100,
      emissiveIntensity: 0.2
    });
    
    // Trophy base
    const baseGeometry = new THREE.CylinderGeometry(2, 2.5, 0.5, 32);
    const base = new THREE.Mesh(baseGeometry, trophyMaterial);
    base.position.y = -5;
    scene.add(base);
    
    // Trophy stem
    const stemGeometry = new THREE.CylinderGeometry(0.5, 0.5, 4, 32);
    const stem = new THREE.Mesh(stemGeometry, trophyMaterial);
    stem.position.y = -2.5;
    scene.add(stem);
    
    // Trophy cup
    const cupBottomGeometry = new THREE.CylinderGeometry(1.5, 0.5, 1, 32);
    const cupBottom = new THREE.Mesh(cupBottomGeometry, trophyMaterial);
    cupBottom.position.y = 0;
    scene.add(cupBottom);
    
    const cupTopGeometry = new THREE.CylinderGeometry(2, 1.5, 3, 32);
    const cupTop = new THREE.Mesh(cupTopGeometry, trophyMaterial);
    cupTop.position.y = 2;
    scene.add(cupTop);
    
    // Trophy handles
    const handleGeometry = new THREE.TorusGeometry(1, 0.2, 16, 32, Math.PI);
    const leftHandle = new THREE.Mesh(handleGeometry, trophyMaterial);
    leftHandle.rotation.z = Math.PI / 2;
    leftHandle.position.set(-2, 2, 0);
    scene.add(leftHandle);
    
    const rightHandle = new THREE.Mesh(handleGeometry, trophyMaterial);
    rightHandle.rotation.z = -Math.PI / 2;
    rightHandle.position.set(2, 2, 0);
    scene.add(rightHandle);
    
    // Crown on top
    const crownGeometry = new THREE.ConeGeometry(0.3, 0.8, 32);
    const crownMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFA500,
      metalness: 0.8,
      roughness: 0.2
    });
    
    // Create crown spikes
    const crownGroup = new THREE.Group();
    for (let i = 0; i < 5; i++) {
      const spike = new THREE.Mesh(crownGeometry, crownMaterial);
      spike.position.set(
        1.5 * Math.sin((i / 5) * Math.PI * 2),
        4,
        1.5 * Math.cos((i / 5) * Math.PI * 2)
      );
      spike.lookAt(new THREE.Vector3(0, 6, 0));
      crownGroup.add(spike);
    }
    scene.add(crownGroup);
    
    // Glow effect
    const glowGeometry = new THREE.SphereGeometry(5, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(glowColor),
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);
    
    // Particle system for sparkles
    const particles = new THREE.BufferGeometry();
    const particleCount = 200;
    const positionArray = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Add safety check to ensure array property exists
      if (typeof positionArray === 'object' && positionArray.length >= (i + 1) * 3) {
        positionArray[i * 3] = (Math.random() - 0.5) * 10;
        positionArray[i * 3 + 1] = (Math.random() - 0.5) * 10;
        positionArray[i * 3 + 2] = (Math.random() - 0.5) * 10;
      }
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 0.05,
      transparent: true,
      opacity: 0.7
    });
    
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);
    
    // Text for username and placement
    if (showText) {
      const fontLoader = new FontLoader();
      
      fontLoader.load(
        'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json',
        (font) => {
          // Username text
          const usernameGeometry = new TextGeometry(username, {
            font: font,
            size: 0.5,
            height: 0.1,
            curveSegments: 5,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 3
          });
          
          usernameGeometry.computeBoundingBox();
          const textWidth = usernameGeometry.boundingBox ? 
            usernameGeometry.boundingBox.max.x - usernameGeometry.boundingBox.min.x : 0;
          
          const usernameMaterial = new THREE.MeshStandardMaterial({
            color: 0xFFA500,
            metalness: 0.8,
            roughness: 0.2
          });
          
          const usernameText = new THREE.Mesh(usernameGeometry, usernameMaterial);
          usernameText.position.set(-textWidth / 2, -6, 0);
          scene.add(usernameText);
          
          // Placement text
          const placementGeometry = new TextGeometry(`#${placement}`, {
            font: font,
            size: 0.8,
            height: 0.2,
            curveSegments: 5,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 3
          });
          
          placementGeometry.computeBoundingBox();
          const placementWidth = placementGeometry.boundingBox ?
            placementGeometry.boundingBox.max.x - placementGeometry.boundingBox.min.x : 0;
          
          const placementMaterial = new THREE.MeshStandardMaterial({
            color: 0xFFA500,
            metalness: 0.8,
            roughness: 0.2
          });
          
          const placementText = new THREE.Mesh(placementGeometry, placementMaterial);
          placementText.position.set(-placementWidth / 2, -7.5, 0);
          scene.add(placementText);
          
          setIsLoaded(true);
        }
      );
    } else {
      setIsLoaded(true);
    }
    
    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      
      if (particleSystem) {
        particleSystem.rotation.y += 0.001;
        
        // Update particle positions for sparkle effect
        const positions = particleSystem.geometry.attributes.position;
        // Add type check to ensure .array property exists
        if (positions && 'array' in positions) {
          const posArray = positions.array as Float32Array;
          for (let i = 0; i < posArray.length; i += 3) {
            posArray[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.003;
          }
          positions.needsUpdate = true;
        }
      }
      
      // Animate glow
      if (glow) {
        glow.material.opacity = 0.05 + Math.sin(Date.now() * 0.001) * 0.03;
      }
      
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const dimensions = getDimensions();
      
      cameraRef.current.aspect = dimensions.width / dimensions.height;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(dimensions.width, dimensions.height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      initializedRef.current = false;
    };
  }, [username, placement, spinSpeed, size, glowColor, showText]);
  
  return (
    <div ref={containerRef} className="w-full flex justify-center">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-royal-gold"></div>
        </div>
      )}
    </div>
  );
};

export default RoyalTrophyModel;
