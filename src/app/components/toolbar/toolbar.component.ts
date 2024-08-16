import { Component } from '@angular/core';

import { ToolbarModule } from 'primeng/toolbar';
import "primeicons/primeicons.css";
import {ButtonModule} from 'primeng/button';
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ToolbarModule, ButtonModule ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
