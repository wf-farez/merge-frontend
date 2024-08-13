import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PresentationComponent } from '../presentation/presentation.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardModule, PresentationComponent ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  
}
