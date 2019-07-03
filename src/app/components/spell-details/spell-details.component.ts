import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data-service";

@Component({
  selector: 'app-spell-details',
  templateUrl: './spell-details.component.html',
  styleUrls: ['./spell-details.component.css']
})
export class SpellDetailsComponent implements OnInit {

  spell: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getSpellDetails();
  }

  getSpellDetails() {
    this.dataService.getSpellDetails()
      .subscribe(spell => this.spell = spell);
    console.log(this.spell);
  }

}
