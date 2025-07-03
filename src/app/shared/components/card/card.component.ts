import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
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
} 