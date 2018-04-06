import { post } from './post';
import { element } from 'protractor';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'app';
	estado = false;
	personas = [ 'Alejandro', 'Carlos', 'Miguel' ];
	tajetaCredito = 1111222233334444;
	name = 'Alejandro';
	listadoJson = 'Lista de datos';
	posts = post;
	cambiar(event) {
		if (event.key === 'Enter') {
			this.name = event.target.value;
		}
	}

	constructor() {
		console.log(this.posts);
	}

	eliminar(post): void {
		const pos = this.posts.indexOf(post);
		this.posts.splice(pos, 1);
	}
}
