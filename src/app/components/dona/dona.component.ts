import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: []
})
export class DonaComponent  {

  @Input() title: string = 'Sin titulo';
  @Input() labels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() data: MultiDataSet = [ [350, 450, 100] ];
  

  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[]=[
     { backgroundColor: [ '#6857E6', '#0009FE', '#F02059' ]}
  ];

}
