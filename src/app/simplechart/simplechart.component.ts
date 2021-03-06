import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-simplechart',
  templateUrl: './simplechart.component.html',
  styleUrls: ['./simplechart.component.css']
})
export class SimplechartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 // tslint:disable-next-line:member-ordering
 chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Line 1',
      data: [1, 2, 3]
    }]
  });

// add point to chart serie
add() {
  this.chart.addPoint(Math.floor(Math.random() * 10));
}

}
