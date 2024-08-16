import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { IconsComponent } from '../../icons/icons.component';
@Component({
  selector: 'app-simple-card',
  standalone: true,
  imports: [ CardModule, IconsComponent ],
  templateUrl: './simple-card.component.html',
  styleUrl: './simple-card.component.scss'
})
export class SimpleCardComponent {
  // Declaración de las variables
  @Input() iconText: string = 'icon-none';
  @Input() headerText: string = 'header-none';
  @Input() bodyText: string = 'body-none';

}
