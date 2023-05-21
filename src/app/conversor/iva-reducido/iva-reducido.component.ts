// Importación de la clase `Component` desde '@angular/core' que se utiliza para decorar y definir la clase `IvaReducidoComponent`.
import { Component } from '@angular/core';

// Importación del servicio `CalculadoraService` desde '../calculadora.service'.
// Este servicio proporciona los métodos necesarios para realizar ciertos cálculos, como el cálculo del IVA reducido.
import { CalculadoraService } from '../calculadora.service';

// Decorador del componente. Define el selector como 'app-iva-reducido',
// que se utiliza para insertar este componente en la plantilla de otro componente.
// También se proporcionan las rutas al archivo de la plantilla HTML y los estilos CSS utilizados por este componente.
@Component({
  selector: 'app-iva-reducido',
  templateUrl: './iva-reducido.component.html',
  styleUrls: ['./iva-reducido.component.css']
})

// La clase `IvaReducidoComponent` es la lógica de control del componente. 
export class IvaReducidoComponent {
  public baseImponible: number = 0;
  public iva: number = 0;
  public precioTotal: number = 0;  // Propiedad para el precio total

  constructor(private CalculadoraService: CalculadoraService) {}

  calcularIva() {
    this.iva = this.CalculadoraService.calcularIvaReducido(this.baseImponible);
    this.precioTotal = this.CalculadoraService.calcularPrecioTotal(this.baseImponible, this.iva);  // Calcula el precio total
  }
}