import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgtCoreModule } from '@angular-three/core';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtMeshBasicMaterialModule } from '@angular-three/core/materials';

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
    AppRoutingModule,
    NgtCoreModule,
    NgtMeshModule,
    NgtMeshBasicMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
