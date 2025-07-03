import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() cardImg?: string;
  @Input() altText?: string;
  @Input() badges?: string[];
  @Input() title!: string;
  @Input() titleLink?: string;
  @Input() description!: string;
  @Input() publishDate?: string;

  // Método para determinar si es un enlace interno
  isInternalLink(link?: string): boolean {
    return link ? link.startsWith('/') : false;
  }

  // Método para determinar si es un enlace externo
  isExternalLink(link?: string): boolean {
    return link ? (link.startsWith('http') || link.startsWith('https')) : false;
  }
} 