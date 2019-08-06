import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-abilityscore-details',
  templateUrl: './abilityscore-details.component.html',
  styleUrls: ['./abilityscore-details.component.css']
})
export class AbilityscoreDetailsComponent implements OnInit {

  abilityscore: any;
  id: string;

  constructor(
      private dataService: DataService,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getAbilityscoreDetails();
  }

  getAbilityscoreDetails() {
    this.dataService.getAbilityscoreDetails(this.id)
        .subscribe(a => this.abilityscore = a);
  }

}
