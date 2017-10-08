declare interface EarCut {
    (data: ArrayLike<number>, holeIndices: ArrayLike<number>, dim?: number): number[]
}
declare const earcut: EarCut & { default: EarCut }
export = earcut
export as namespace earcut
