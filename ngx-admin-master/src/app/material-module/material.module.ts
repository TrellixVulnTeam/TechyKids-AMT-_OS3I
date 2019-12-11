import { NgModule } from '@angular/core';
import {MatNativeDateModule,MatSnackBarModule,MatIconModule,MatDialogModule,  MatButtonModule,MatTableModule,
        MatPaginatorModule , MatSortModule,MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCardModule, 
        MatFormFieldModule, MatProgressSpinnerModule, MatInputModule,MatSidenavModule,MatListModule, MatGridListModule,
        MatMenuModule } from  '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatRadioModule} from  '@angular/material/radio';
import {MatSelectModule} from  '@angular/material/select';
import {MatSliderModule} from  '@angular/material/slider';
import {MatDividerModule} from  '@angular/material/divider';

const MaterialComponent = [
  MatTabsModule,MatDividerModule,MatSliderModule,MatSelectModule,MatRadioModule,MatNativeDateModule,
  MatDatepickerModule,MatSnackBarModule,MatIconModule,MatDialogModule,MatProgressSpinnerModule,MatButtonModule,
  MatSortModule, MatTableModule,MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule,
  MatProgressSpinnerModule, MatInputModule, MatPaginatorModule,MatSidenavModule,MatListModule, MatGridListModule,MatMenuModule];

@NgModule({
  imports: [MaterialComponent],
  exports:[MaterialComponent]
})
export class MaterialModule { }