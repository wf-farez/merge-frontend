import { Component, Input } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-bubble-image',
  standalone: true,
  imports: [TooltipModule],
  templateUrl: './bubble-image.component.html',
  styleUrl: './bubble-image.component.scss'
})
export class BubbleImageComponent {
  @Input() imageSrc: string = '';
  @Input() link: string = '#'; // Enlace por defecto
}
