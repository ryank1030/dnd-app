import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SpellListComponent } from './components/spell-list/spell-list.component';
import { HttpClientModule } from "@angular/common/http";
import { ClassListComponent } from './components/class-list/class-list.component';
import { FeatureListComponent } from './components/feature-list/feature-list.component';
import { SpellDetailsComponent } from './components/spell-details/spell-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpellListComponent,
    ClassListComponent,
    FeatureListComponent,
    SpellDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
