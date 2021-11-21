export class ExternalObject<T> {
  private readonly __type: unique symbol;
  [val: unique symbol]: T
}
export const DEFAULT_COST: number
export function getWords(): Array<string>
export function getNums(): Array<number>
export function sumNums(nums: Array<number>): number
export function readFileAsync(path: string): Promise<Buffer>
export function asyncMultiTwo(arg: number): Promise<number>
export function bigintAdd(a: BigInt, b: BigInt): BigInt
export function createBigInt(): BigInt
export function createBigIntI64(): BigInt
export function getCwd(callback: (arg0: string) => void): void
export function readFile(callback: (arg0: Error | undefined, arg1?: string | undefined | null) => void): void
export function eitherStringOrNumber(input: string | number): number
export function returnEither(input: number): string | number
export function either3(input: string | number | boolean): number
interface Obj {
  v: string | number
}
export function either4(input: string | number | boolean | Obj): number
export enum Kind { Dog = 0, Cat = 1, Duck = 2 }
export enum CustomNumEnum { One = 1, Two = 2, Three = 3, Four = 4, Six = 6, Eight = 8, Nine = 9, Ten = 10 }
export function enumToI32(e: CustomNumEnum): number
export function throwError(): void
export function createExternal(size: number): ExternalObject<number>
export function createExternalString(content: string): ExternalObject<string>
export function getExternal(external: ExternalObject<number>): number
export function mutateExternal(external: ExternalObject<number>, newVal: number): void
export function mapOption(val?: number | undefined | null): number | undefined | null
export function add(a: number, b: number): number
export function fibonacci(n: number): number
export function listObjKeys(obj: object): Array<string>
export function createObj(): object
export function getGlobal(): typeof global
export function getUndefined(): void
export function getNull(): JsNull
export function asyncPlus100(p: Promise<number>): Promise<number>
interface PackageJson {
  name: string
  version: string
  dependencies?: Record<string, any> | undefined | null
  devDependencies?: Record<string, any> | undefined | null
}
export function readPackageJson(): PackageJson
export function getPackageJsonName(packageJson: PackageJson): string
export function contains(source: string, target: string): boolean
export function concatStr(s: string): string
export function concatUtf16(s: string): string
export function concatLatin1(s: string): string
export function setSymbolInObj(symbol: symbol): object
export function createSymbol(): symbol
export function withoutAbortController(a: number, b: number): Promise<number>
export function withAbortController(a: number, b: number, signal: AbortSignal): Promise<number>
export function callThreadsafeFunction(callback: (...args: any[]) => any): void
export function threadsafeFunctionThrowError(cb: (...args: any[]) => any): void
export function threadsafeFunctionFatalMode(cb: (...args: any[]) => any): void
export function getBuffer(): Buffer
export class Animal {
  readonly kind: Kind
  constructor(kind: Kind, name: string)
  static withKind(kind: Kind): Animal
  get name(): string
  set name(name: string)
  whoami(): string
  static getDogKind(): Kind
}
export class Blake2BHasher {
  
  static withKey(key: Blake2bKey): Blake2BHasher
}
export class Blake2BKey {
  
}
export class Context {
  maybeNeed?: boolean | undefined | null
  constructor()
  static withData(data: string): Context
  method(): string
}
export class ClassWithFactory {
  name: string
  static withName(name: string): ClassWithFactory
}