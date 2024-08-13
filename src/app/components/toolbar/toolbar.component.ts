import { Component } from '@angular/core';

import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import "primeicons/primeicons.css";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [AvatarModule,ToolbarModule ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
