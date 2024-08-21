import { Component } from '@angular/core';
import { BubbleImageComponent } from '../shared/bubble-image/bubble-image.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bubble-profiles-container',
  standalone: true,
  imports: [BubbleImageComponent, CommonModule],
  templateUrl: './bubble-profiles-container.component.html',
  styleUrl: './bubble-profiles-container.component.scss'
})
export class BubbleProfilesContainerComponent {
  profiles = [
    { imageSrc: 'images/profiles/hernan.png', link: 'https://portafolio-hernan-coronel.vercel.app/' },
    { imageSrc: 'images/profiles/kevin.png', link: 'https://portfolio-fernando-juela.vercel.app/#home' },
    { imageSrc: 'images/profiles/mauro.jpeg', link: 'https://rolando-dev.vercel.app/' },
    { imageSrc: 'images/profiles/robinson.png', link: 'https://robinson-dev.vercel.app/' },
    { imageSrc: 'images/profiles/walter.png', link: 'https://portfolio1.com' }
  ];
}
