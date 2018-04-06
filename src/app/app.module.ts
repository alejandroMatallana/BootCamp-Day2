import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyColorStyleDirective } from './my-color-style.directive';
import { PaiPruebaPipe } from './pai-prueba.pipe';

@NgModule({
	declarations: [ AppComponent, MyColorStyleDirective, PaiPruebaPipe ],
	imports: [ BrowserModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
