import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import lottie from 'lottie-web';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReusableCardComponent } from './reusable-card/reusable-card.component';

@Component({
  selector: 'app-choose-us',
  standalone: true,
  imports: [CardModule, ButtonModule, ReusableCardComponent],
  templateUrl: './choose-us.component.html',
  styleUrl: './choose-us.component.scss'
})
export class ChooseUsComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    // Solo se ejecutará en el navegador
    const container = document.getElementById('lottie');
    
    if (container) {
      lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'animation/animation-1.json' // La ruta al archivo JSON de la animación
      });
    } else {
      console.error('No se encontró el contenedor con el ID "lottie"');
    }
  }
}
}
