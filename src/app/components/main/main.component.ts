import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { OurTeamComponent } from '../our-team/our-team.component';
import { PresentationComponent } from '../presentation/presentation.component';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { OurServicesComponent } from "../our-services/our-services.component";
import { OurClientsComponent } from "../our-clients/our-clients.component";
import { PruebasComponent } from '../pruebas/pruebas.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardModule, OurTeamComponent, PresentationComponent, ToolbarComponent, OurServicesComponent, OurClientsComponent, PruebasComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  
}
