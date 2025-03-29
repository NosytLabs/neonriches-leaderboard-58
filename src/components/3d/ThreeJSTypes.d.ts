
// This file adds additional type definitions for Three.js features 
// that are missing from the @types/three package

import * as THREE from 'three';

// Add TextGeometry to THREE namespace
declare module 'three' {
  export class TextGeometry extends THREE.ExtrudeGeometry {
    constructor(
      text: string,
      parameters?: {
        font?: THREE.Font;
        size?: number;
        height?: number;
        curveSegments?: number;
        bevelEnabled?: boolean;
        bevelThickness?: number;
        bevelSize?: number;
        bevelOffset?: number;
        bevelSegments?: number;
      }
    );
  }

  export class Font {
    constructor(jsondata: any);
    generateShapes(text: string, size: number): THREE.Shape[];
  }

  export class FontLoader extends THREE.Loader {
    constructor(manager?: THREE.LoadingManager);
    load(
      url: string,
      onLoad?: (font: Font) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
    parse(json: any): Font;
  }

  // Add array property to BufferAttribute interface
  interface BufferAttribute {
    array: ArrayLike<number>;
  }

  interface InterleavedBufferAttribute {
    array: ArrayLike<number>;
  }
}
