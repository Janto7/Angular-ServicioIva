// Importamos el decorador 'Component' desde el paquete '@angular/core'.
import { Component } from '@angular/core';

// Importamos 'CalculadoraService' desde el archivo de servicio 'calculadora.service'.
import { CalculadoraService } from './calculadora.service';

// Usamos el decorador 'Component' para definir metadatos del componente.
@Component({
  // El selector define el nombre del componente que se utilizará en el HTML.
  selector: 'app-conversor',

  // El templateUrl es la ubicación del archivo HTML del componente.
  templateUrl: './conversor.component.html',

  // Los styleUrls son las ubicaciones de los archivos CSS del componente.
  styleUrls: ['./conversor.component.css']
})

// Definimos la clase del componente.
export class ConversorComponent {
  // Definimos las propiedades del componente que se usarán en el HTML.
  public baseImponible: number = 0; // Base sobre la que se aplicará el IVA.
  public tipoIva: string = 'general'; // Tipo de IVA por defecto.
  public iva: number  = 0; // Valor del IVA calculado.
  public precioTotal: number = 0; // Precio total incluyendo el IVA.

  // Usamos el constructor para inyectar 'CalculadoraService' en el componente.
  constructor(private calculadoraService: CalculadoraService) { }

  // Método para calcular el IVA basado en el tipo de IVA y la base imponible.
  calcularIva() {
    // Usamos un switch para determinar qué método del servicio usar.
    switch (this.tipoIva) {
      // Si el tipo de IVA es 'general', usamos el método 'calcularIvaGeneral' del servicio.
      case 'general':
        this.iva = this.calculadoraService.calcularIvaGeneral(this.baseImponible);
        break;

      // Si el tipo de IVA es 'reducido', usamos el método 'calcularIvaReducido' del servicio.
      case 'reducido':
        this.iva = this.calculadoraService.calcularIvaReducido(this.baseImponible);
        break;

      // Si el tipo de IVA es 'superReducido', usamos el método 'calcularIvaSuperReducido' del servicio.
      case 'superReducido':
        this.iva = this.calculadoraService.calcularIvaSuperReducido(this.baseImponible);
        break;

      // Si el tipo de IVA no es ninguno de los anteriores, establecemos el IVA a 0.
      default:
        this.iva = 0;
    }

    // Calculamos el precio total utilizando el método 'calcularPrecioTotal' del servicio.
    this.precioTotal = this.calculadoraService.calcularPrecioTotal(this.baseImponible, this.iva);
  }
}