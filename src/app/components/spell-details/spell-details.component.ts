import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data-service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spell-details',
  templateUrl: './spell-details.component.html',
  styleUrls: ['./spell-details.component.css']
})
export class SpellDetailsComponent implements OnInit {

  spell: any;
  id: string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getSpellDetails();
  }

  getSpellDetails() {
    this.dataService.getSpellDetails(this.id)
      .subscribe(spell => this.spell = spell);
  }

}
