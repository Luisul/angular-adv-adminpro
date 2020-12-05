import { Component } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component {

  public labels1: string[] = ['Arepas', 'Arroz', 'Pan'];
  public data1 = [
    [300, 490, 50]
  ];

}
