import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { ContadorComponent } from './contador/contador.component'
import { UsuarioComponent } from './usuario/usuario.component'

/** Imports de Material */
@NgModule({
   declarations: [
      AppComponent,
      ContadorComponent,
      UsuarioComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule { }
