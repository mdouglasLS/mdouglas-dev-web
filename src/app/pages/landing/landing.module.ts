import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    LandingComponent,
    SocialMediaComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    LandingRoutingModule,
    HeaderComponent
  ]
})
export class LandingModule { }
