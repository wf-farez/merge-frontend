import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-card',
  standalone: true,
  imports: [],
  templateUrl: './reusable-card.component.html',
  styleUrl: './reusable-card.component.scss'
})
export class ReusableCardComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() description: string = '';
}
