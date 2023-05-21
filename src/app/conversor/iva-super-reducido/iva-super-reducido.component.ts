// Importa el decorador Component desde el paquete core de Angular, que nos permite definir un componente.
import { Component } from '@angular/core';

// Importa el servicio CalculadoraService, que se encarga de los cálculos de IVA y precio total.
import { CalculadoraService } from '../calculadora.service';

// Usa el decorador Component para definir metadatos para el componente IvaSuperReducidoComponent.
@Component({
  // Define el selector CSS para este componente, que se puede utilizar en HTML para insertar este componente.
  selector: 'app-iva-super-reducido',

  // Define la ubicación del archivo HTML que se usará como plantilla para este componente.
  templateUrl: './iva-super-reducido.component.html',

  // Define la ubicación del archivo CSS que contiene los estilos para este componente.
  styleUrls: ['./iva-super-reducido.component.css'],
})

// Define la clase del componente, donde se maneja la lógica del componente.
export class IvaSuperReducidoComponent {
  // Define la propiedad baseImponible, que se usa para almacenar el valor base sobre el que se calcula el IVA.
  public baseImponible: number = 0;

  // Define la propiedad iva, que se usa para almacenar el valor del IVA calculado.
  public iva: number = 0;

  // Define la propiedad precioTotal, que se usa para almacenar el valor total (base imponible + IVA).
  public precioTotal: number = 0;  

  // Define el constructor del componente, que se llama cuando se crea una instancia de este componente.
  // Aquí, inyectamos el servicio CalculadoraService, que se puede utilizar para calcular el IVA y el precio total.
  constructor(private CalculadoraService: CalculadoraService) {}

  // Define el método calcularIva(), que se llama para calcular el IVA super reducido y el precio total.
  calcularIva() {
    // Llama al método calcularIvaSuperReducido() del servicio CalculadoraService para calcular el IVA super reducido.
    this.iva = this.CalculadoraService.calcularIvaSuperReducido(this.baseImponible);

    // Llama al método calcularPrecioTotal() del servicio CalculadoraService para calcular el precio total.
    this.precioTotal = this.CalculadoraService.calcularPrecioTotal(this.baseImponible, this.iva);
  }
}