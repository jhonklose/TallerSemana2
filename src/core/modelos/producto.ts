import { Categoria } from "./categoria";

// exporta una interface producto
export interface Producto {
    nombre: string,
    precio?: number,
    descuento?: number,
    imagen: string,
    categoria: Categoria,
    calificacion?: number
}