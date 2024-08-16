import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainComponent } from './components/main/main.component';
import { OurServicesComponent } from './components/our-services/our-services.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonModule,ToolbarComponent,MainComponent, OurServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'merge-frontend';
}
