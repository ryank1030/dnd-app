import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClassListComponent} from "./components/class-list/class-list.component";
import {SpellListComponent} from "./components/spell-list/spell-list.component";
import {SpellDetailsComponent} from "./components/spell-details/spell-details.component";
import {FeatureListComponent} from "./components/feature-list/feature-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'classes',
    component: ClassListComponent
  },
  {
    path: 'spells',
    component: SpellListComponent
  },
  {
    path: 'spells/:id',
    component: SpellDetailsComponent
  },
  {
    path: 'features',
    component: FeatureListComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
