import { Component } from '@angular/core';
import {CardModule} from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { FormsModule } from '@angular/forms';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [CardModule, InputTextModule, ImageModule, FormsModule, IconsComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {
 
}


