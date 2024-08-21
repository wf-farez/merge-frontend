import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { SimpleCardComponent } from "../shared/simple-card/simple-card.component";
import { BubbleProfilesContainerComponent } from "../bubble-profiles-container/bubble-profiles-container.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [CardModule, SimpleCardComponent, BubbleProfilesContainerComponent, CommonModule],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.scss'
})
export class OurTeamComponent {

}
