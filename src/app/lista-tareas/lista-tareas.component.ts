import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {

  // Recoge el array del componente padre (app)
  @Input()
  datosPull: any;

  // Metodo que elimina el item del array
  deleteTarea(itemSend:any){
    // Busca la posicion del array del item pasado por argumento del metodo
    let index = this.datosPull!.findIndex((item: any) => item === itemSend);
    // Condicional que filtra si encnontro una coincidencia la funcion findIndex()
    if (index !== -1) {
      // Elimina la posicion
      this.datosPull!.splice(index, 1);
    }
  }

 
  // Este metodo cambia el atributo "complete" del item que se le pasa por argumento
  completeTarea(itemSend:any){
    // En el array busca la posicion del item similar al pasado por argumento, devuelve el indice del array donde se encuentra
    let index = this.datosPull!.findIndex((item: any) => item === itemSend);
    
    //Condicional que solo podra acceder si el item se encuentra en el array 
    if (index !== -1) {
      // Si el atributo esta en falso lo vuelve true y vicerbersa en el caso contrario
      if(!this.datosPull![index].complete){
        this.datosPull![index].complete=true;
      }else{
        this.datosPull![index].complete=false;
      }
    }
  }
}
