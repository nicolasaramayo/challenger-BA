import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  
})
export class FooterComponent {
  @Input() showUsefulInfo: boolean = true; // Mostrar teléfonos y redes sociales
  @Input() showUtilityIndicator: boolean = false; // Mostrar indicador de utilidad
  @Input() showLegal: boolean = true; // Mostrar sección legal (siempre debe estar)
} 