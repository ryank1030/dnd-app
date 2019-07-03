import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {

  class: any;
  id: string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getClassDetails();
  }

  getClassDetails() {
    this.dataService.getClassDetails(this.id)
      .subscribe(c => this.class = c);
  }
}
