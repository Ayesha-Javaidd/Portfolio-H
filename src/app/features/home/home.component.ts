import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { ServiceComponent } from '../../components/shared/service/service.component';
import { ExpertiseComponent } from '../../components/shared/expertise/expertise.component';
import { JourneyComponent } from '../../components/journey/journey.component';

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, ServiceComponent, JourneyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
