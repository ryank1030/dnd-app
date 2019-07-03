import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data-service";
import {Spells} from "../../models/spells";
import {Router} from "@angular/router";


@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {

  spells: Spells;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getSpells();
  }

  getSpells() {
    this.dataService.getSpells()
      .subscribe(spells => this.spells = spells);
  }

  goToSpellDetails(url: string, id) {
    this.router.navigate(['spells/' + id]);
  }
}
