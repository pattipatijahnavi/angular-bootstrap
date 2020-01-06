import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
@Component({
  selector: 'app-aboutcountry',
  templateUrl: './aboutcountry.component.html',
  styleUrls: ['./aboutcountry.component.css']
})
export class AboutcountryComponent implements OnInit {
collectionSize;
  constructor( private tableService: TableService) { }

  ngOnInit() {
    this.collectionSize = this.tableService.COUNTRIES.length;
  }
get countries(){
    return this.tableService.COUNTRIES
      .map((country, i) => ({id: i + 1, ...country}))
      
  }
}