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
    { icon: "💻", title: 'Desarrollo de Software', description: 'Creación de sitios web dinámicos y responsivos.' },
    { icon: "🔍", title: 'Consultoría Técnica', description: 'Mejora en el rendimiento de la empresa.' },
    { icon: "📈", title: 'Machine learning', description: 'Modelos de Aprendizaje máquina o IA para tu empresa' },
    { icon: "🚀", title: 'Innovación Tecnológica', description: 'Mejorar el posicionamiento de tu sitio web en los motores de búsqueda.' },
  ];
}
