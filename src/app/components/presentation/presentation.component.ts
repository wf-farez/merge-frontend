import { Component } from '@angular/core';
import {CardModule} from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';


@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [CardModule, InputTextModule, ImageModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {
  title = "My-Presentation"
}
