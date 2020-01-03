import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [ BrowserModule, FormsModule,NgbModule, RouterModule.forRoot([
    {path:'content', component:ContentComponent},
    {path:'about', component:AboutComponent},
    {path:'overview', component:OverviewComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent, NavComponent, ContentComponent, AboutComponent, OverviewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
