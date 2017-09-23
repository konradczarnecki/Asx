export interface Drawable {

    x: number;
    y: number;
    w: number;
    h: number;
    z: number;
    x1?: number;
    y1?: number;
    x2?: number;
    y2?: number;
    alpha: number;
    getSprite(): HTMLImageElement;
    setCollisionBox?(x1: number, y1: number, x2: number, y2: number): void;
}