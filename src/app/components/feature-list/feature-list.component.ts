import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data-service";

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css']
})
export class FeatureListComponent implements OnInit {

  constructor( private dataService: DataService) {

  }

  features: any;


  ngOnInit() {
    this.getFeatures();
  }

  getFeatures() {
    this.dataService.getFeatures().subscribe(features => this.features = features);
  }
  //TODO:
  // - Implement the rest of the basic http GET calls
  // - Use the URL in the retrieved data to get the results of the detailed data
  // - Create a nav bar for component navigation
  // - Create a homepage
  // .
  // * Don't worry to much about the styling right now
  // * Focus on creating easy to use functions that give reliable data

}
