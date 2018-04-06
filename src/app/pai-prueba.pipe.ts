import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'paiPrueba'
})
export class PaiPruebaPipe implements PipeTransform {
	transform(tarjetaCredito: number, args?: any): any {
		var numCuenta = 1111222233334444;

		console.log(numCuenta);
	}
}
