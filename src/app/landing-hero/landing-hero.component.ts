import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { NgtCoreModule } from '@angular-three/core';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtMeshStandardMaterialModule } from '@angular-three/core/materials';
import { NgtBoxGeometryModule } from '@angular-three/core/geometries';
import {
  NgtAmbientLightModule,
  NgtSpotLightModule,
} from '@angular-three/core/lights';

@Component({
  selector: 'app-landing-hero',
  templateUrl: './landing-hero.component.html',
  styleUrls: ['./landing-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingHeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
