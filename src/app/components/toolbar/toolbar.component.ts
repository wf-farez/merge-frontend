import { Component } from '@angular/core';

import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import "primeicons/primeicons.css";
import {ButtonModule} from 'primeng/button';
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [AvatarModule,ToolbarModule, ButtonModule ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
