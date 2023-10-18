import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasComponent } from './categorias/categorias.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        CategoriasComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        NgbModule,
        CarouselComponent
    ]
})
export class AppModule { }
