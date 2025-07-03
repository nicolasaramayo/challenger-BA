import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject, switchMap, of } from 'rxjs';

interface Street {
  nombre: string;
  direccion: string;
}

interface ApiResponse {
  direccionesNormalizadas?: Array<{
    nombre_calle: string;
    direccion: string;
  }>;
  errorMessage?: string;
}

@Component({
  selector: 'app-street-search',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './street-search.html',
  styleUrl: './street-search.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreetSearchComponent implements OnInit {
  
  searchTerm: string = '';
  streets: Street[] = [];
  isLoading: boolean = false;
  hasError: boolean = false;
  errorMessage: string = '';
  
  private searchSubject = new Subject<string>();
  
  constructor(
    private http: HttpClient, 
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit() {
    // Configurar el debounce para las búsquedas
    this.searchSubject.pipe(
      debounceTime(300), // Esperar 300ms después de que el usuario deje de escribir
      distinctUntilChanged(), // Solo ejecutar si el valor cambió
      switchMap(term => this.searchStreets(term))
    ).subscribe({
      next: (streets) => {
        this.streets = streets;
        this.isLoading = false;
        this.cdr.markForCheck(); // Marcar para detección de cambios sin Zone.js
      },
      error: (error) => {
        console.error('Error searching streets:', error);
        this.hasError = true;
        this.errorMessage = 'Error al buscar calles. Intente nuevamente.';
        this.isLoading = false;
        this.cdr.markForCheck(); // Marcar para detección de cambios sin Zone.js
      }
    });

    // Escuchar parámetros de consulta del header
    this.route.queryParams.subscribe(params => {
      if (params['q']) {
        this.searchTerm = params['q'];
        this.onSearchChange(this.searchTerm);
      }
    });
  }
  
  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.onSearchChange(target.value);
  }
  
  onSearchChange(term: string) {
    this.searchTerm = term;
    this.hasError = false;
    
    if (term.trim().length < 3) {
      this.streets = [];
      this.isLoading = false;
      this.cdr.markForCheck(); // Marcar para detección de cambios sin Zone.js
      return;
    }
    
    this.isLoading = true;
    this.cdr.markForCheck(); // Marcar para detección de cambios sin Zone.js
    this.searchSubject.next(term.trim());
  }
  
  private searchStreets(term: string) {
    if (!term || term.length < 3) {
      return of([]);
    }
    
    const apiUrl = `https://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${encodeURIComponent(term)}`;
    
    return this.http.get<ApiResponse>(apiUrl).pipe(
      switchMap(response => {
        const streets: Street[] = [];
        
        if (response && response.direccionesNormalizadas && Array.isArray(response.direccionesNormalizadas)) {
          response.direccionesNormalizadas.forEach(item => {
            if (item.nombre_calle && item.direccion) {
              streets.push({
                nombre: item.nombre_calle,
                direccion: item.direccion
              });
            }
          });
        }
        
        return of(streets);
      })
    );
  }
  
  clearSearch() {
    this.searchTerm = '';
    this.streets = [];
    this.hasError = false;
    this.isLoading = false;
    this.cdr.markForCheck(); // Marcar para detección de cambios sin Zone.js
  }
}
