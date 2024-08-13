import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { OurTeamComponent } from '../our-team/our-team.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardModule, OurTeamComponent ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
