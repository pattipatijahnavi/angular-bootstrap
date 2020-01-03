import { Component, OnInit} from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private tableService: TableService) { }

  page = 1;
  pageSize = 4;
  collectionSize
 
  ngOnInit(){
  this.collectionSize = this.tableService.COUNTRIES.length;
  }
 get countries(){
    return this.tableService.COUNTRIES
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}