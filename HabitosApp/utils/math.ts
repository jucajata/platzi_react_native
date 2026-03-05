export const sumar = (a: number, b: number): number => a + b;

export const dobleDe = (n: number): number => n * 2;

export function ejemploDesestructuracionUsuario(): string {
    const usuario = {
        nombre: "Juan",
        edad: 30
    };
    const { nombre, edad } = usuario;
    return `${nombre} tiene ${edad}`;
} 