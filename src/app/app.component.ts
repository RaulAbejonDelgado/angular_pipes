import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
  nombre:string='Raul';
  arreglo = [1,2,3,4,5,6,7,8,9,];
  PI = Math.PI;
  a:number = 0.234;
  salario = 1234.5;
  fecha = new Date();
  nombre2 ="raul abejon delgado";
  video ="r9vIyyaHz4o?rel=0";
  activar = false;

  producto = {
    nombre:'Pagina web',
    tipo:'servicio',
    coste:200,
    almacenable:true
  };

  valorDePromesa = new Promise( (resolve, reject) =>{
    setTimeout( ()=>resolve('Llego la data'), 3500);
})
}
