import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LandingHeroComponent } from './landing-hero/landing-hero.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SkillsComponent } from './skills/skills.component';
import { BackgroundComponent } from './background/background.component';
import { BackgroundItemComponent } from './background-item/background-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingHeroComponent,
    ContactFormComponent,
    SkillsComponent,
    BackgroundComponent,
    BackgroundItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
