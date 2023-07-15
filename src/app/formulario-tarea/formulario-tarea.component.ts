import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-tarea',
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css']
})
export class FormularioTareaComponent {
  @Output() 
  tareaListPush:any = new EventEmitter<any[]>();

  // Variables 
  titulo:string|undefined;
  descripcion:string|undefined;

  // Array
  datos:any[]=[];

  // ;ateodo de envia datos para cuando se accione el boton enviar
  enviarDatos(){
    let complete:boolean=false;
      
    this.datos.push(
      {
        'titulo' : this.titulo,
        'descripcion' : this.descripcion,
        'complete' : complete
      }
    )
    this.tareaListPush.emit(this.datos);
  }

}
