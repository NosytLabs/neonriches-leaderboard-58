
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface RoyalThroneProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  animate?: boolean;
  onThroneClick?: () => void;
}

const RoyalThrone: React.FC<RoyalThroneProps> = ({
  size = 'medium',
  color = '#FFD700',
  animate = true,
  onThroneClick
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const throneRef = useRef<THREE.Group | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  const getSizeMultiplier = () => {
    switch (size) {
      case 'small': return 0.6;
      case 'large': return 1.2;
      default: return 1;
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x1e1e2e);

    // Add subtle fog for depth
    scene.fog = new THREE.FogExp2(0x1e1e2e, 0.08);

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.set(0, 1.5, 4);

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);

    // Add directional light (main light)
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.5);
    mainLight.position.set(5, 5, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    scene.add(mainLight);

    // Add spotlight for dramatic effect
    const spotlight = new THREE.SpotLight(0xffffff, 2);
    spotlight.position.set(0, 6, 0);
    spotlight.angle = Math.PI / 6;
    spotlight.penumbra = 0.3;
    spotlight.castShadow = true;
    spotlight.shadow.mapSize.width = 1024;
    spotlight.shadow.mapSize.height = 1024;
    scene.add(spotlight);

    // Add a second colored spotlight
    const coloredSpotlight = new THREE.SpotLight(0x9370DB, 2);
    coloredSpotlight.position.set(-3, 5, 3);
    coloredSpotlight.angle = Math.PI / 6;
    coloredSpotlight.penumbra = 0.5;
    scene.add(coloredSpotlight);

    // Create the throne
    const throneGroup = new THREE.Group();
    throneRef.current = throneGroup;
    scene.add(throneGroup);

    // Throne base
    const baseGeometry = new THREE.BoxGeometry(2.5, 0.4, 2) * getSizeMultiplier();
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      metalness: 0.8,
      roughness: 0.2,
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = 0.2;
    base.castShadow = true;
    base.receiveShadow = true;
    throneGroup.add(base);

    // Throne seat
    const seatGeometry = new THREE.BoxGeometry(2, 0.3, 1.5) * getSizeMultiplier();
    const seat = new THREE.Mesh(seatGeometry, baseMaterial);
    seat.position.y = 0.6;
    seat.position.z = -0.2;
    seat.castShadow = true;
    seat.receiveShadow = true;
    throneGroup.add(seat);

    // Throne back
    const backGeometry = new THREE.BoxGeometry(2, 2, 0.3) * getSizeMultiplier();
    const back = new THREE.Mesh(backGeometry, baseMaterial);
    back.position.y = 1.8;
    back.position.z = -1;
    back.castShadow = true;
    back.receiveShadow = true;
    throneGroup.add(back);

    // Throne armrests
    const armGeometry = new THREE.BoxGeometry(0.3, 0.8, 1.8) * getSizeMultiplier();
    const armMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(color).offsetHSL(0, 0, -0.1),
      metalness: 0.8,
      roughness: 0.3,
    });

    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-1.1, 1, 0);
    leftArm.castShadow = true;
    leftArm.receiveShadow = true;
    throneGroup.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(1.1, 1, 0);
    rightArm.castShadow = true;
    rightArm.receiveShadow = true;
    throneGroup.add(rightArm);

    // Add decorative elements
    const sphereGeometry = new THREE.SphereGeometry(0.15, 16, 16) * getSizeMultiplier();
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 1,
      roughness: 0.1,
    });

    // Add spheres to the armrests
    const createDecorativeSphere = (x: number, z: number) => {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(x, 1.4, z);
      sphere.castShadow = true;
      sphere.receiveShadow = false;
      throneGroup.add(sphere);
    };

    createDecorativeSphere(-1.1, -0.85);
    createDecorativeSphere(-1.1, 0.85);
    createDecorativeSphere(1.1, -0.85);
    createDecorativeSphere(1.1, 0.85);

    // Add a crown on top of the throne
    const crownGroup = new THREE.Group();
    crownGroup.position.set(0, 3, -1);
    throneGroup.add(crownGroup);

    const crownBaseMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 1,
      roughness: 0.1,
    });

    const crownBaseGeometry = new THREE.CylinderGeometry(0.4, 0.5, 0.2, 8) * getSizeMultiplier();
    const crownBase = new THREE.Mesh(crownBaseGeometry, crownBaseMaterial);
    crownGroup.add(crownBase);

    const spikeGeometry = new THREE.ConeGeometry(0.1, 0.3, 8) * getSizeMultiplier();
    const spikePositions = [
      { x: 0.3, y: 0.25, z: 0 },
      { x: 0.2, y: 0.25, z: 0.2 },
      { x: 0, y: 0.25, z: 0.3 },
      { x: -0.2, y: 0.25, z: 0.2 },
      { x: -0.3, y: 0.25, z: 0 },
      { x: -0.2, y: 0.25, z: -0.2 },
      { x: 0, y: 0.25, z: -0.3 },
      { x: 0.2, y: 0.25, z: -0.2 },
    ];

    spikePositions.forEach(pos => {
      const spike = new THREE.Mesh(spikeGeometry, crownBaseMaterial);
      spike.position.set(pos.x, pos.y, pos.z);
      spike.castShadow = true;
      crownGroup.add(spike);
    });

    // Add a floor plane
    const planeGeometry = new THREE.PlaneGeometry(10, 10);
    const planeMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e1e2e,
      metalness: 0.2,
      roughness: 0.8,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -0.2;
    plane.receiveShadow = true;
    scene.add(plane);

    // Add orbit controls for interactivity
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.minPolarAngle = Math.PI / 4;
    controls.maxPolarAngle = Math.PI / 2;

    // Add a click handler
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onClick = (event: MouseEvent) => {
      if (!containerRef.current) return;
      
      // Calculate mouse position in normalized device coordinates
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / containerRef.current.clientWidth) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / containerRef.current.clientHeight) * 2 + 1;
      
      // Raycast
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(throneGroup.children, true);
      
      if (intersects.length > 0 && onThroneClick) {
        onThroneClick();
      }
    };

    if (onThroneClick) {
      renderer.domElement.addEventListener('click', onClick);
    }

    // Animation loop
    const animate = () => {
      if (!renderer || !scene || !camera) return;
      
      const animationId = requestAnimationFrame(animate);
      
      if (animate && throneRef.current) {
        throneRef.current.rotation.y += 0.003;
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

    return () => {
      window.removeEventListener('resize', handleResize);
      if (onThroneClick) {
        renderer.domElement.removeEventListener('click', onClick);
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [color, size, animate, onThroneClick]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[300px] rounded-lg overflow-hidden"
      aria-label="3D Royal Throne Visualization"
    />
  );
};

export default RoyalThrone;
