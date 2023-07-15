import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {

  @Input()
  datosPull: any;

  deleteTarea(itemSend:any){
    let index = this.datosPull!.findIndex((item: any) => item === itemSend);
    if (index !== -1) {
      this.datosPull!.splice(index, 1);
    }
  }
  completeTarea(itemSend:any){
    let index = this.datosPull!.findIndex((item: any) => item === itemSend);
    if (index !== -1) {
      if(!this.datosPull![index].complete){
        this.datosPull![index].complete=true;
      }else{
        this.datosPull![index].complete=false;
      }
    }
  }
}
