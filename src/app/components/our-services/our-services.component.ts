import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-services',
  standalone: true,  // Si es un standalone component
  imports: [CommonModule],  // Importa el CommonModule aquí
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})

export class OurServicesComponent {
  services = [
    { icon: "💻", title: 'Desarrollo de Software', description: 'Creating responsive and dynamic websites.' },
    { icon: "🔍", title: 'Consultoría Técnica', description: 'Mejora en el rendimiento de la empresa.' },
    { icon: "📈", title: 'Machine learning', description: 'Modelos de Aprendizaje máquina o IA para tu empresa' },
    { icon: "🚀", title: 'Innovación Tecnológica', description: 'Improving your website ranking on search engines.' },
  ];
}
