
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useFloatingCoins } from '@/hooks/use-floating-coins';
import { Button } from '@/components/ui/button';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { useToast } from '@/hooks/use-toast';
import { Crown, Sparkles } from 'lucide-react';

interface InteractiveRoyalCrownProps {
  onCrownClick?: () => void;
  showCoins?: boolean;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const InteractiveRoyalCrown: React.FC<InteractiveRoyalCrownProps> = ({
  onCrownClick,
  showCoins = true,
  color = '#D4AF37', // Royal gold by default
  size = 'medium',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const crownRef = useRef<THREE.Group | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const [interacting, setInteracting] = useState(false);
  const { playSound } = useNotificationSounds();
  const { toast } = useToast();
  
  // Set container dimensions based on size prop
  const getContainerSize = () => {
    switch (size) {
      case 'small': return 'h-48 w-48';
      case 'large': return 'h-96 w-full';
      case 'medium':
      default: return 'h-72 w-full';
    }
  };
  
  // Trigger floating coins effect when crown is clicked
  useFloatingCoins({
    count: showCoins ? 15 : 0,
    duration: 3000,
    maxSize: 20,
    minSize: 12,
    maxDelay: 300,
    container: containerRef.current
  });

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Set up scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Add ambient background glow
    scene.background = new THREE.Color(0x0D0D20);
    scene.fog = new THREE.FogExp2(0x0D0D20, 0.03);
    
    // Configure camera
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.set(0, 0, 5);
    
    // Initialize renderer with antialiasing and alpha
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
    });
    rendererRef.current = renderer;
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    
    // Add lights for realistic rendering
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    
    // Main directional light to cast shadows
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.5);
    mainLight.position.set(5, 5, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    scene.add(mainLight);
    
    // Spotlight for dramatic crown highlight
    const spotlight = new THREE.SpotLight(0xffd700, 2);
    spotlight.position.set(0, 6, 0);
    spotlight.angle = Math.PI / 6;
    spotlight.penumbra = 0.3;
    spotlight.castShadow = true;
    scene.add(spotlight);
    
    // Secondary colored spotlight for effect
    const accentLight = new THREE.SpotLight(0x9370DB, 1);
    accentLight.position.set(-3, 3, 3);
    accentLight.angle = Math.PI / 4;
    accentLight.penumbra = 0.5;
    scene.add(accentLight);
    
    // Create the crown group
    const crownGroup = new THREE.Group();
    crownRef.current = crownGroup;
    scene.add(crownGroup);
    
    // Crown base
    const crownBaseGeometry = new THREE.CylinderGeometry(1, 1.2, 0.4, 8);
    const crownBaseMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      metalness: 0.9,
      roughness: 0.1,
    });
    const crownBase = new THREE.Mesh(crownBaseGeometry, crownBaseMaterial);
    crownBase.castShadow = true;
    crownBase.receiveShadow = true;
    crownGroup.add(crownBase);
    
    // Crown spikes
    const spikeGeometry = new THREE.ConeGeometry(0.25, 0.8, 8);
    const spikeMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      metalness: 0.9,
      roughness: 0.1,
    });
    
    // Position spikes around the crown
    const spikeCount = 8;
    for (let i = 0; i < spikeCount; i++) {
      const spike = new THREE.Mesh(spikeGeometry, spikeMaterial);
      const angle = (i / spikeCount) * Math.PI * 2;
      const radius = 0.8;
      spike.position.set(
        radius * Math.cos(angle),
        0.6,
        radius * Math.sin(angle)
      );
      spike.castShadow = true;
      crownGroup.add(spike);
    }
    
    // Center spike (taller)
    const centerSpike = new THREE.Mesh(
      new THREE.ConeGeometry(0.2, 1.2, 8),
      spikeMaterial
    );
    centerSpike.position.set(0, 0.8, 0);
    centerSpike.castShadow = true;
    crownGroup.add(centerSpike);
    
    // Add gems to the crown
    const gemGeometry = new THREE.IcosahedronGeometry(0.15, 0);
    const gemMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xE91E63, metalness: 0.5, roughness: 0.2 }), // Ruby
      new THREE.MeshStandardMaterial({ color: 0x3F51B5, metalness: 0.5, roughness: 0.2 }), // Sapphire
      new THREE.MeshStandardMaterial({ color: 0x4CAF50, metalness: 0.5, roughness: 0.2 }), // Emerald
      new THREE.MeshStandardMaterial({ color: 0xFFC107, metalness: 0.5, roughness: 0.2 }), // Topaz
    ];
    
    // Add gems around the crown base
    for (let i = 0; i < 8; i++) {
      const gem = new THREE.Mesh(gemGeometry, gemMaterials[i % gemMaterials.length]);
      const angle = (i / 8) * Math.PI * 2 + (Math.PI / 8); // Offset so gems don't align with spikes
      const radius = 1.1;
      
      gem.position.set(
        radius * Math.cos(angle),
        0.15,
        radius * Math.sin(angle)
      );
      gem.scale.set(1, 1.2, 1);
      gem.castShadow = true;
      crownGroup.add(gem);
    }
    
    // Add a larger center gem
    const centerGem = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.3, 1),
      new THREE.MeshStandardMaterial({ 
        color: 0x9C27B0, 
        metalness: 0.7, 
        roughness: 0.2,
      })
    );
    centerGem.position.set(0, 0.3, -1);
    centerGem.castShadow = true;
    crownGroup.add(centerGem);
    
    // Initial positioning of the crown
    crownGroup.rotation.x = 0.3;
    
    // Add orbit controls for user interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.minPolarAngle = Math.PI / 4;
    controls.maxPolarAngle = 3 * Math.PI / 4;
    controls.addEventListener('start', () => setInteracting(true));
    controls.addEventListener('end', () => setInteracting(false));
    
    // Raycaster for crown interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    const onClick = (event: MouseEvent) => {
      if (!containerRef.current) return;
      
      // Calculate mouse position
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / containerRef.current.clientWidth) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / containerRef.current.clientHeight) * 2 + 1;
      
      // Raycast to detect clicks on the crown
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(crownGroup.children, true);
      
      if (intersects.length > 0) {
        // Crown clicked effect
        playSound('royalAnnouncement', 0.2);
        
        // Visual feedback
        const clickedMesh = intersects[0].object as THREE.Mesh;
        const originalColor = (clickedMesh.material as THREE.MeshStandardMaterial).color.clone();
        (clickedMesh.material as THREE.MeshStandardMaterial).color.set(0xffffff);
        
        // Reset color after brief flash
        setTimeout(() => {
          if (clickedMesh) {
            (clickedMesh.material as THREE.MeshStandardMaterial).color.copy(originalColor);
          }
        }, 300);
        
        if (onCrownClick) {
          onCrownClick();
        }
      }
    };
    
    // Add click event listener
    renderer.domElement.addEventListener('click', onClick);
    
    // Animation loop
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      
      if (crownRef.current && !interacting) {
        crownRef.current.rotation.y += 0.005;
      }
      
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      renderer.render(scene, camera);
      
      return () => {
        cancelAnimationFrame(animationId);
      };
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      
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
      renderer.domElement.removeEventListener('click', onClick);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      controls.dispose();
      renderer.dispose();
    };
  }, [color, onCrownClick, playSound]);

  return (
    <div className={`relative ${getContainerSize()} ${className}`}>
      <div 
        ref={containerRef} 
        className="w-full h-full rounded-lg overflow-hidden"
        aria-label="Interactive 3D Royal Crown"
      />
      
      {/* Interaction prompt */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <Button 
          variant="ghost" 
          size="sm" 
          className="bg-black/40 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/50 rounded-full px-4"
          onClick={() => {
            if (onCrownClick) onCrownClick();
          }}
        >
          <Sparkles className="h-4 w-4 mr-2 text-royal-gold" />
          <span className="text-xs">Click to interact</span>
        </Button>
      </div>
    </div>
  );
};

export default InteractiveRoyalCrown;
