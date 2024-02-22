import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ag-grid';

  // Both of the properties below will be passed to the grod 
  // via the input/properties rowData and colDefs 


  // Data being shown in the grid
  rowData: any[] = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ];  
  


  // SIDE NOTES
  // We can add our own css to the grid if we wanted to 

  // Next we will be LOADING DATA VIA HTTP server
  // First we import HttpClientModule into the modules input
}
