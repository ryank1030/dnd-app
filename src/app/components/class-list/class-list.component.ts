import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data-service";

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  classes: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getClasses();
  }

  getClasses() {
    this.dataService.getClasses()
      .subscribe(classes => this.classes = classes);
  }
}
