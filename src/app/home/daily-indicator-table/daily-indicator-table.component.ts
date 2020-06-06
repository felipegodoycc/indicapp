import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { IndicatorService } from 'src/app/shared/services/indicator.service';
import { MatTableDataSource } from '@angular/material/table';
import { Indicator } from 'src/app/shared/models/indicator.model';

@Component({
  selector: 'app-daily-indicator-table',
  templateUrl: './daily-indicator-table.component.html',
  styleUrls: ['./daily-indicator-table.component.css']
})
export class DailyIndicatorTableComponent implements OnInit {
  loading = true;
  displayedColumns: string[] = ['codigo','valor'];
  totalIndicators = 0;
  datasource;

  @ViewChild(MatPaginator, { static: true } ) paginator: MatPaginator;

  constructor(private indicatorService: IndicatorService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.indicatorService.getDailyIndicators().subscribe( res => {
      this.loading = false;
      this.datasource = new MatTableDataSource<Indicator>(res);
      this.datasource.paginator = this.paginator;
      this.totalIndicators = res.length;
    })
  }

}
