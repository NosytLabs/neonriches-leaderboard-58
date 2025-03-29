
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface RoyalTrophyModelProps {
  rank?: number;
  username?: string;
  rotationSpeed?: number;
  interactive?: boolean;
  className?: string;
}

const RoyalTrophyModel: React.FC<RoyalTrophyModelProps> = ({ 
  rank = 1, 
  username = 'Royal Champion', 
  rotationSpeed = 0.005,
  interactive = true,
  className = ''
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<any | null>(null);
  const trophyRef = useRef<THREE.Group | null>(null);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Import needed Three.js addons dynamically to avoid TypeScript errors
    const importOrbitControls = import('three/examples/jsm/controls/OrbitControls').then(
      module => module.OrbitControls
    );
    
    const importTextGeometry = import('three/examples/jsm/geometries/TextGeometry').then(
      module => module.TextGeometry
    );
    
    const importFontLoader = import('three/examples/jsm/loaders/FontLoader').then(
      module => module.FontLoader
    );

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x111827);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // For Three.js v0.149.0 or earlier, use outputEncoding instead of outputColorSpace
    renderer.outputEncoding = THREE.sRGBEncoding;
    
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffd700, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xbb9955, 0.8);
    pointLight2.position.set(-5, 5, 5);
    scene.add(pointLight2);

    // Create Trophy Group
    const trophyGroup = new THREE.Group();
    trophyRef.current = trophyGroup;
    scene.add(trophyGroup);

    // Trophy Base
    const baseGeometry = new THREE.CylinderGeometry(1.2, 1.5, 0.5, 32);
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b4513,
      metalness: 0.7,
      roughness: 0.3,
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -2;
    trophyGroup.add(base);

    // Trophy Stem
    const stemGeometry = new THREE.CylinderGeometry(0.3, 0.3, 2, 32);
    const stemMaterial = new THREE.MeshStandardMaterial({
      color: 0xdaa520,
      metalness: 0.8,
      roughness: 0.2,
    });
    const stem = new THREE.Mesh(stemGeometry, stemMaterial);
    stem.position.y = -0.5;
    trophyGroup.add(stem);

    // Trophy Cup
    const cupGeometry = new THREE.SphereGeometry(1, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5);
    const cupMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 0.9,
      roughness: 0.1,
    });
    const cup = new THREE.Mesh(cupGeometry, cupMaterial);
    cup.position.y = 1;
    cup.scale.set(1.2, 1, 1.2);
    trophyGroup.add(cup);

    // Add handles to the cup
    const handleGeometry = new THREE.TorusGeometry(0.4, 0.1, 16, 32, Math.PI);
    const handleMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 0.9,
      roughness: 0.1,
    });
    
    const handle1 = new THREE.Mesh(handleGeometry, handleMaterial);
    handle1.position.set(1, 1, 0);
    handle1.rotation.y = Math.PI * 0.5;
    trophyGroup.add(handle1);
    
    const handle2 = new THREE.Mesh(handleGeometry, handleMaterial);
    handle2.position.set(-1, 1, 0);
    handle2.rotation.y = Math.PI * -0.5;
    trophyGroup.add(handle2);

    // Add text for rank and username
    Promise.all([importFontLoader, importTextGeometry]).then(([FontLoader, TextGeometry]) => {
      // Now we use the dynamically imported modules
      const fontLoader = new FontLoader();
      fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
        // Rank text
        const rankTextGeometry = new TextGeometry(`#${rank}`, {
          font: font,
          size: 0.3,
          height: 0.05,
        });
        
        // Center the geometry
        rankTextGeometry.computeBoundingBox();
        const textWidth = rankTextGeometry.boundingBox?.max.x - rankTextGeometry.boundingBox?.min.x;
        
        const rankTextMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const rankText = new THREE.Mesh(rankTextGeometry, rankTextMaterial);
        if (textWidth) {
          rankText.position.set(-textWidth / 2, -1.5, 0.5);
        } else {
          rankText.position.set(-0.3, -1.5, 0.5);
        }
        trophyGroup.add(rankText);

        // Username text
        const nameTextGeometry = new TextGeometry(username.length > 12 ? username.substring(0, 10) + "..." : username, {
          font: font,
          size: 0.15,
          height: 0.03,
        });
        
        // Center the username
        nameTextGeometry.computeBoundingBox();
        const nameWidth = nameTextGeometry.boundingBox?.max.x - nameTextGeometry.boundingBox?.min.x;
        
        const nameTextMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const nameText = new THREE.Mesh(nameTextGeometry, nameTextMaterial);
        if (nameWidth) {
          nameText.position.set(-nameWidth / 2, -1.8, 0.5);
        } else {
          nameText.position.set(-0.5, -1.8, 0.5);
        }
        trophyGroup.add(nameText);
      });
    });

    // Add controls if interactive
    if (interactive) {
      importOrbitControls.then(OrbitControls => {
        const controls = new OrbitControls(camera, renderer.domElement);
        controlsRef.current = controls;
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = true;
        controls.autoRotate = false;
      });
    }

    // Add sparkles/particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    // Fill the array with random positions
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Create a sphere of particles around the trophy
      const radius = 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta) + 0.5; // Offset upward
      posArray[i + 2] = radius * Math.cos(phi);
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0xffd700,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Animation function
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      
      // Auto-rotate the trophy
      if (trophyRef.current && !interactive) {
        trophyRef.current.rotation.y += rotationSpeed;
      }
      
      // Animate particles
      if (particles) {
        particles.rotation.y += 0.001;
      }
      
      // Update controls if they exist
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Dispose of geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          } else if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          }
        }
      });
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [rank, username, rotationSpeed, interactive]);

  return <div ref={mountRef} className={`w-full h-full min-h-[300px] ${className}`}></div>;
};

export default RoyalTrophyModel;
