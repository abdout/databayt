declare module 'scrypt.js' {
    export function scryptSync(secret: Buffer, salt: string, N: number): Buffer;
  }