
// Fix for the Uint8Array<TArrayBuffer> errors
interface Uint8ArrayConstructor {
  new(length: number): Uint8Array;
  new(array: ArrayLike<number> | ArrayBufferLike): Uint8Array;
  new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint8Array;
  readonly prototype: Uint8Array;
  readonly BYTES_PER_ELEMENT: number;
  
  // Add a static method to create from an array-like or array buffer-like object
  from(arrayLike: ArrayLike<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint8Array;
  of(...items: number[]): Uint8Array;
}

declare var Uint8Array: Uint8ArrayConstructor;
