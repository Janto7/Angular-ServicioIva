// Importa el decorador Injectable desde el paquete core de Angular, que nos permite definir un servicio.
import { Injectable } from '@angular/core';

// Usa el decorador Injectable para definir metadatos para el servicio CalculadoraService.
@Injectable({
  // Esto significa que una única instancia del servicio será proporcionada en el módulo raíz (root), permitiendo que cualquier componente lo inyecte.
  providedIn: 'root'
})

// Define la clase del servicio, donde se maneja la lógica del servicio.
export class CalculadoraService {
  // Define las constantes para los diferentes tipos de IVA.
  private SUPER_REDUCIDO = 0.04; // IVA Super reducido del 4%
  private REDUCIDO = 0.10; // IVA reducido del 10%
  private GENERAL = 0.21; // IVA general del 21%

  // Define el constructor del servicio.
  constructor() { }

  // Método para calcular el IVA super reducido. Multiplica la base imponible por el porcentaje de IVA super reducido.
  calcularIvaSuperReducido(baseImponible: number): number {
    return baseImponible * this.SUPER_REDUCIDO;
  }

  // Método para calcular el IVA reducido. Multiplica la base imponible por el porcentaje de IVA reducido.
  calcularIvaReducido(baseImponible: number): number {
    return baseImponible * this.REDUCIDO;
  }

  // Método para calcular el IVA general. Multiplica la base imponible por el porcentaje de IVA general.
  calcularIvaGeneral(baseImponible: number): number {
    return baseImponible * this.GENERAL;
  }

  // Método para calcular el precio total (base imponible + IVA).
  calcularPrecioTotal(baseImponible: number, iva: number): number {
    return baseImponible + iva;
  }
}