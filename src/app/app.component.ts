import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MainComponent } from './components/main/main.component';
import { OurServicesComponent } from './components/our-services/our-services.component';

import { OurClientsComponent } from './components/our-clients/our-clients.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonModule,MainComponent, OurServicesComponent,OurClientsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'merge-frontend';
}
