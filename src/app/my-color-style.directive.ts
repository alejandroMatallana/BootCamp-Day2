import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[appMyColorStyle]'
})
export class MyColorStyleDirective {
	constructor(private elementRef: ElementRef) {
		elementRef.nativeElement.style.backgroundColor = 'yellow';
	}
}
