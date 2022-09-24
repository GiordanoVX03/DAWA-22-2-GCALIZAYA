import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  art = {
    codigo: null,
    descripcion: null,
    precio: null
  }

  articulos = [{ codigo: 1, descripcion: 'Coca Cola', precio:2.50},
  { codigo: 2, descripcion: 'Galletas Coronita', precio:0.50},
  { codigo: 3, descripcion: 'Sublime', precio:1.50},
  { codigo: 4, descripcion: 'Wafler', precio:2.00},
  { codigo: 5, descripcion: 'Aceite Cocinero', precio:7.50}];

  hayRegistros(){
    return this.articulos.length>0;
  }

  borrar(art:any){
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==art.codigo){
        this.articulos.splice(x,1);
        return;
      }
  }

  agregar(){
    for(let x=0;x<this.articulos.length;x++)
    if(this.articulos[x].codigo==this.art.codigo){
      alert('ya existe un articulo con dicho codigo');
      return;
    }
    this.articulos.push({codigo:this.art.codigo!,
                        descripcion:this.art.descripcion!,
                        precio:this.art.precio!});
    this.art.codigo=null;
    this.art.descripcion=null;
    this.art.precio=null;
  }

  seleccionar(art:any){
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio=art.precio;
  }

  modificar(){
    for(let x=0;x<this.articulos.length;x++)
      if(this.articulos[x].codigo==this.art.codigo){
        this.articulos[x].descripcion==this.art.descripcion;
        this.articulos[x].precio==this.art.precio;
        return;
      }
    alert('No existe el código de articulo ingresado');
  }
}
