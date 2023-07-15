import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variables
  title = 'gft-fe-gc-angular_componentes_problema4-07-2023';
  datosForm:any[]|undefined;

  /* 
    Metodo para recibir los datos del componente hijo formulario,
    pasa los datos del evento a una variable que se encuentra en este componente
  */
  recibirDatos(datos: any) {
    this.datosForm = datos;
  }
}
