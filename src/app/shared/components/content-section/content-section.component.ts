import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './content-section.component.html',
  styleUrl: './content-section.component.scss'
})
export class ContentSectionComponent {
  // Datos para las tarjetas
  projectCards = [
    {
      cardImg: 'https://via.placeholder.com/400x200/007bff/ffffff?text=Angular',
      altText: 'Proyecto Angular',
      badges: ['Angular', 'Obelisco V2'],
      title: 'Sistema de Diseño GCBA',
      titleLink: '#',
      description: 'Implementación completa del sistema de diseño Obelisco V2 con componentes reutilizables.',
      publishDate: 'Noviembre 2024'
    },
    {
      cardImg: 'https://via.placeholder.com/400x200/28a745/ffffff?text=API',
      altText: 'Integración API',
      badges: ['API', 'USIG'],
      title: 'Búsqueda de Direcciones',
      titleLink: '#',
      description: 'Integración con la API USIG para búsqueda inteligente de direcciones de Buenos Aires.',
      publishDate: 'Noviembre 2024'
    },
    {
      cardImg: 'https://via.placeholder.com/400x200/6f42c1/ffffff?text=Responsive',
      altText: 'Diseño Responsivo',
      badges: ['Bootstrap 5', 'CSS Grid'],
      title: 'Diseño Adaptativo',
      titleLink: '#',
      description: 'Landing page completamente responsiva optimizada para todos los dispositivos.',
      publishDate: 'Noviembre 2024'
    }
  ];
} 