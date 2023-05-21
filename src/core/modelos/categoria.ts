import { Producto } from "./producto";

export class Categoria{
    private _nombre:string;
    private _frasePublicitaria:string;
    private _productos:Array<Producto>;

    constructor(nombre:string, frasePublicitaria:string, productos:Array<Producto> = new Array<Producto>()){
        this._nombre = nombre;
        this._frasePublicitaria = frasePublicitaria;
        this._productos = productos;
    }

    get nombre():string{
        return this._nombre;    
    }

    get frasePublicitaria():string{
        return this._frasePublicitaria;
    
    }

    get productos():Array<Producto>{
        return this._productos;
            
    }

    nuevoProducto(...productos:Array<Producto>):void{
        productos.forEach(producto => {
            this._productos.push(producto);
        });
    }
    
    get productosRepresentativos():Array<Producto>{
        //Objetivo filtrar los cuatros productos mas costoso
        let productos:Array<Producto> = new Array();

        for(let i = 0; i <=3; i++){
            productos[i] = this._productos[i];
        }

        return productos;
    }
}