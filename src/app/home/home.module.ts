import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { NgxGaugeModule } from 'ngx-gauge';
import { ChartsModule } from 'ng2-charts';
import { DailyIndicatorTableComponent } from './daily-indicator-table/daily-indicator-table.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    DailyIndicatorTableComponent
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
