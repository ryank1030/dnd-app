import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abilityscore-list',
  templateUrl: './abilityscore-list.component.html',
  styleUrls: ['./abilityscore-list.component.css']
})
export class AbilityscoreListComponent implements OnInit {

  abilityscores: any;

  constructor(
      private dataService: DataService,
      private router: Router
  ) { }

  ngOnInit() {
    this.getAbilityscores();
  }

  getAbilityscores() {
    this.dataService.getAbilityscores()
        .subscribe(abilityscores => this.abilityscores = abilityscores);

  }


}
