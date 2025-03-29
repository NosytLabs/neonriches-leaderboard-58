
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { profileBoostEffects } from '@/data/boostEffects';

const ThreeDBoostShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const [currentBoostIndex, setCurrentBoostIndex] = useState(0);
  
  // Initialize the scene
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Set background
    scene.background = new THREE.Color(0x0a0a0a);
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Create profile card
    const createProfileCard = () => {
      const cardGroup = new THREE.Group();
      
      // Card base
      const cardGeometry = new THREE.BoxGeometry(3, 4, 0.1);
      const cardMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x111111,
        shininess: 100,
        specular: 0x666666
      });
      const card = new THREE.Mesh(cardGeometry, cardMaterial);
      cardGroup.add(card);
      
      // Card border
      const borderGeometry = new THREE.BoxGeometry(3.2, 4.2, 0.05);
      const borderMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x333333,
        shininess: 100,
        specular: 0x999999
      });
      const border = new THREE.Mesh(borderGeometry, borderMaterial);
      border.position.z = -0.03;
      cardGroup.add(border);
      
      // Profile picture (circle)
      const circleGeometry = new THREE.CircleGeometry(0.8, 32);
      const circleMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x444444,
        shininess: 50
      });
      const circle = new THREE.Mesh(circleGeometry, circleMaterial);
      circle.position.set(0, 1, 0.06);
      cardGroup.add(circle);
      
      // Name bar
      const nameGeometry = new THREE.BoxGeometry(2, 0.3, 0.02);
      const nameMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x666666,
        shininess: 100
      });
      const name = new THREE.Mesh(nameGeometry, nameMaterial);
      name.position.set(0, 0, 0.06);
      cardGroup.add(name);
      
      // Stat bars
      for (let i = 0; i < 3; i++) {
        const statGeometry = new THREE.BoxGeometry(2, 0.2, 0.02);
        const statMaterial = new THREE.MeshPhongMaterial({ 
          color: 0x555555,
          shininess: 100
        });
        const stat = new THREE.Mesh(statGeometry, statMaterial);
        stat.position.set(0, -0.5 - (i * 0.4), 0.06);
        cardGroup.add(stat);
      }
      
      // Rank display
      const rankGeometry = new THREE.CircleGeometry(0.4, 32);
      const rankMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x777777,
        shininess: 100
      });
      const rank = new THREE.Mesh(rankGeometry, rankMaterial);
      rank.position.set(0, -1.8, 0.06);
      cardGroup.add(rank);
      
      return cardGroup;
    };
    
    const profileCard = createProfileCard();
    scene.add(profileCard);
    
    // Add particle system for effects
    const createParticleSystem = () => {
      const particleCount = 300;
      const particles = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        
        // Gold color with slight variations
        colors[i * 3] = 0.8 + Math.random() * 0.2; // R (gold)
        colors[i * 3 + 1] = 0.7 + Math.random() * 0.2; // G (gold)
        colors[i * 3 + 2] = 0.2 + Math.random() * 0.2; // B (gold)
      }
      
      particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.7
      });
      
      const particleSystem = new THREE.Points(particles, particleMaterial);
      return particleSystem;
    };
    
    const particles = createParticleSystem();
    scene.add(particles);
    
    // Add glowy effect around card (changes with each boost)
    const createGlowEffect = (color: number) => {
      // Remove any existing glow
      scene.children.forEach(child => {
        if (child.name === 'glow') {
          scene.remove(child);
        }
      });
      
      // Create new glow
      const glowGeometry = new THREE.BoxGeometry(3.5, 4.5, 0.02);
      const glowMaterial = new THREE.MeshBasicMaterial({ 
        color: color,
        transparent: true,
        opacity: 0.3
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      glow.name = 'glow';
      glow.position.z = -0.06;
      scene.add(glow);
    };
    
    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      
      // Rotate card slightly
      if (profileCard) {
        profileCard.rotation.y = Math.sin(Date.now() * 0.001) * 0.1;
        profileCard.rotation.x = Math.sin(Date.now() * 0.0005) * 0.05;
      }
      
      // Move particles
      if (particles) {
        particles.rotation.y += 0.001;
        
        // Update particle positions for sparkle effect
        const positions = particles.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.001;
        }
        particles.geometry.attributes.position.needsUpdate = true;
      }
      
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Change boost effect every few seconds
    const boostChangeInterval = setInterval(() => {
      const nextIndex = (currentBoostIndex + 1) % profileBoostEffects.length;
      setCurrentBoostIndex(nextIndex);
      
      // Update glow effect based on boost type
      const boostType = profileBoostEffects[nextIndex].type;
      let glowColor;
      
      switch (boostType) {
        case 'appearance':
          glowColor = 0xD4AF37; // Gold
          break;
        case 'animation':
          glowColor = 0x9B87F5; // Purple
          break;
        case 'visibility':
          glowColor = 0x00AAFF; // Blue
          break;
        case 'effect':
          glowColor = 0xFF5555; // Red
          break;
        default:
          glowColor = 0xFFFFFF; // White
      }
      
      createGlowEffect(glowColor);
      
    }, 3000);
    
    // Initial glow
    createGlowEffect(0xD4AF37);
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup on unmount
    return () => {
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      clearInterval(boostChangeInterval);
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      renderer.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, [currentBoostIndex]);
  
  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[400px] rounded-lg overflow-hidden glass-morphism border border-white/10"
    >
      <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/50 rounded-md backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold">{profileBoostEffects[currentBoostIndex].name}</h3>
            <p className="text-xs text-white/60">{profileBoostEffects[currentBoostIndex].description}</p>
          </div>
          <div className="px-2 py-1 bg-black/50 rounded text-xs font-medium text-royal-gold">
            {profileBoostEffects[currentBoostIndex].tier.toUpperCase()} TIER
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDBoostShowcase;
