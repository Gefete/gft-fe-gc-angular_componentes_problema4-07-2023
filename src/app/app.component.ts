import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gft-fe-gc-angular_componentes_problema4-07-2023';
  datosForm:any[]|undefined;


  recibirDatos(datos: any) {
    this.datosForm = datos;
  }
}
