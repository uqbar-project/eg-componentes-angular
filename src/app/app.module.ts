import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { ContadorComponent } from './contador/contador.component'
import { ProductoComponent } from './producto/producto.component'
import { UsuarioComponent } from './usuario/usuario.component'

@NgModule({
   declarations: [
      AppComponent,
      ContadorComponent,
      ProductoComponent,
      UsuarioComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule { }
