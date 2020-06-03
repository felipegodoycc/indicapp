import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { NgxGaugeModule } from 'ngx-gauge';
import { ChartsModule } from 'ng2-charts';
import { DailyIndicatorTableComponent } from './daily-indicator-table/daily-indicator-table.component';
import { HttpClientModule } from '@angular/common/http';
import { IndicatorSerieGraphComponent } from './indicator-serie-graph/indicator-serie-graph.component';


@NgModule({
  declarations: [
    HomeComponent,
    DailyIndicatorTableComponent,
    IndicatorSerieGraphComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxGaugeModule,
    ChartsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
