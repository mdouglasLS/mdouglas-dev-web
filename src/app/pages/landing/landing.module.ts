import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LandingRoutingModule} from './landing-routing.module';
import {LandingComponent} from './landing.component';
import {HeaderComponent} from '../../shared/header/header.component';
import {RouterOutlet} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SectionComponent} from "../../components/section/section.component";
import {ButtonComponent} from "../../components/button/button.component";

@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent
  ],
    imports: [
        CommonModule,
        RouterOutlet,
        LandingRoutingModule,
        HeaderComponent,
        SectionComponent,
        ButtonComponent
    ]
})
export class LandingModule { }
