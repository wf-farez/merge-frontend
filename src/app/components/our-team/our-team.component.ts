import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { SimpleCardComponent } from "../shared/simple-card/simple-card.component";

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [CardModule, SimpleCardComponent],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.scss'
})
export class OurTeamComponent {

}
