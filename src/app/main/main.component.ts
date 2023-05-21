import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/core/modelos/categoria';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  categorias:Array<Categoria>;

  constructor() { 
    this.categorias = new Array();

    let accesorioOficina:Categoria = new Categoria("Accesorios para juegos",
    "Accesorios para juegos de videojuegos" );    
    accesorioOficina.nuevoProducto({
      nombre: "Auriculares",
      imagen: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg",
      categoria: accesorioOficina,
      calificacion: 3.0
    },

    {
      nombre: "Teclados",
      imagen: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg",
      categoria: accesorioOficina,
      calificacion: 4.0
    },

    {
      nombre: "Mouse",
      imagen: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg",
      categoria: accesorioOficina,
      calificacion: 5.0
    },

    {
      nombre: "Sillas",
      imagen: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg",
      categoria: accesorioOficina,
      calificacion: 5.0
    },

    );

    this.categorias.push(
      accesorioOficina
    );
      
    
  }

  ngOnInit(): void {
  }

}
