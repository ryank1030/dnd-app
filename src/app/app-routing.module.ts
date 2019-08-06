import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClassListComponent} from './components/class-list/class-list.component';
import {SpellListComponent} from './components/spell-list/spell-list.component';
import {SpellDetailsComponent} from './components/spell-details/spell-details.component';
import {FeatureListComponent} from './components/feature-list/feature-list.component';
import { FeatureDetailsComponent } from './components/feature-details/feature-details.component';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import {AbilityscoreListComponent} from './components/abilityscore-list/abilityscore-list.component';
import {AbilityscoreDetailsComponent} from "./components/abilityscore-details/abilityscore-details.component";


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
    path: 'classes/:id',
    component: ClassDetailsComponent
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
  },
  {
    path: 'features/:id',
    component: FeatureDetailsComponent
  },
  {
    path: 'abilityscores',
    component: AbilityscoreListComponent
  },
  {
    path: 'abilityscores/:id',
    component: AbilityscoreDetailsComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




