// Primero, se importan los módulos necesarios. 
// `Component` es importado desde el paquete '@angular/core' y se utiliza para decorar y definir la clase `IvaGeneralComponent`.
import { Component } from '@angular/core';

// Se importa el servicio `CalculadoraService` que se encuentra en la carpeta '../calculadora.service'.
// Este servicio proporciona los métodos necesarios para realizar ciertas operaciones matemáticas.
import { CalculadoraService } from '../calculadora.service';

// Aquí se define el decorador del componente con el selector 'app-iva-general', 
// que es el nombre del elemento HTML personalizado que Angular reconocerá para este componente.
// También se proporcionan rutas a la plantilla HTML y los estilos CSS utilizados por este componente.
@Component({
  selector: 'app-iva-general',
  templateUrl: './iva-general.component.html',
  styleUrls: ['./iva-general.component.css'],
})

// Aquí se declara la clase `IvaGeneralComponent`, la cual es la lógica de control del componente.
export class IvaGeneralComponent {

  // Se declaran dos variables públicas: `baseImponible` y `iva`. 
  // `baseImponible` representa la cantidad de dinero antes de aplicar el IVA.
  // `iva` es la cantidad de impuesto calculado a partir de `baseImponible`.
  public baseImponible: number = 0;
  public iva: number = 0;
  public precioTotal: number = 0;  // Propiedad para el precio total

  // Aquí se encuentra el constructor de la clase, en el que se inyecta una instancia del `CalculadoraService`.
  // Este servicio se asigna a la propiedad privada `CalculadoraService` de la clase.
  constructor(private CalculadoraService: CalculadoraService) {}

  // La función `calcularIva` es un método público de la clase. 
  // Esta función calcula el valor del IVA utilizando el método `calcularIvaGeneral` del `CalculadoraService` 
  // y asigna el resultado a la propiedad `iva` de la clase.
  calcularIva() {
    this.iva = this.CalculadoraService.calcularIvaGeneral(this.baseImponible);
    this.precioTotal = this.CalculadoraService.calcularPrecioTotal(this.baseImponible, this.iva);  // Calcula el precio total
  }
}