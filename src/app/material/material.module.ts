import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSortModule } from '@angular/material/sort';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatCheckboxModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatSlideToggle

} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatCheckboxModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDialogModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSortModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatCheckboxModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDialogModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSortModule
  ],
  providers: [
     MatDatepickerModule,
  ]
})
export class MaterialModule { }
