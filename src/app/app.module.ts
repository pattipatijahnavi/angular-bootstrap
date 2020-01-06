import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavComponent,NgbdModalContent  } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { OverviewComponent } from './overview/overview.component';
import { ContentModelComponent} from './content-model/content-model.component';
import { DirectiveDirective } from './directive.directive';
import { TableService } from './table.service';
import { AboutcountryComponent } from './aboutcountry/aboutcountry.component';


@NgModule({
  imports: [ BrowserModule, FormsModule,NgbModule, RouterModule.forRoot([
    {path:'content', component:ContentComponent},
    {path:'about', component:AboutComponent},
    {path:'overview', component:OverviewComponent},
    {path:'aboutcountry', component:AboutcountryComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent, NavComponent, ContentComponent, AboutComponent, OverviewComponent,ContentModelComponent, NgbdModalContent, DirectiveDirective, AboutcountryComponent, TabledirectiveDirective],
  bootstrap:    [ AppComponent ],
  entryComponents: [NgbdModalContent],
  providers: [TableService]
})
export class AppModule { }
