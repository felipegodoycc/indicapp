import { Component, OnInit } from '@angular/core';
import { IndicatorService } from 'src/app/shared/services/indicator.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-indicator-serie-graph',
  templateUrl: './indicator-serie-graph.component.html',
  styleUrls: ['./indicator-serie-graph.component.css']
})
export class IndicatorSerieGraphComponent implements OnInit {
  selectOptions: { value: string, label: string}[];
  dataLoaded:boolean = false;

  public lineChartData: ChartDataSets[] = [{}];
  public lineChartLabels: Label[] = [''];
  public lineChartOptions: ChartOptions = { 
    responsive: true,
    legend: {
      labels: { fontColor: 'black' }
    },
    scales: {
      xAxes: [{
        ticks: { fontColor: 'black' },
        gridLines: { color: 'gray' }
      }],
      yAxes: [{
        ticks: { fontColor: 'black' },
        gridLines: { color: 'gray' }
      }]
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgba(123,31,162,1)',
      backgroundColor: 'rgba(123,31,162,0.6)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private _indicatorService: IndicatorService) { }

  ngOnInit() {
    this.loadSelectOptions();
  }

  loadSelectOptions(){
    this._indicatorService.getDailyIndicators().subscribe( res => {
      this.selectOptions = Object.keys(res).reduce( (acc,key) => res[key].codigo ? [...acc, { value: res[key].codigo, label: res[key].nombre}] : acc ,[]);
    })
  }

  loadData(codigo: string){
    this._indicatorService.getIndicator(codigo).subscribe( res => {
      const serie = res.serie.reduce( (acc, cur) => {
        acc.valores.push(cur.valor);
        acc.labels.push(new Date(cur.fecha).toLocaleDateString());
        return acc;
      } , { valores: [], labels: []});
      this.dataLoaded = true;
      this.lineChartData = [{ data: serie.valores.reverse(), label: res.nombre }]
      this.lineChartLabels = serie.labels.reverse();
    })
  }

  detectSelect(event){
    this.loadData(event.value);
  }

}
