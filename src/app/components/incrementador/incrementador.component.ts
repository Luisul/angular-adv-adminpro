import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent {

  progress: number = 40;  
   
  get getPorcentaje(){
    return `${ this.progress }%`;
  }
   

  cambiarValor(valor: number) {

    if(this.progress >= 100 && valor >= 0){
       return this.progress = 100;      
    }

    if(this.progress <= 0 && valor < 0 ){
      return this.progress = 0;
    }
    this.progress = this.progress + valor;
  }

}
