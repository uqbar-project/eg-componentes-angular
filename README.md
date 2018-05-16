# Componentes reutilizables de Angular

![demo](video/demo.gif)

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.


## Creación de componentes con Angular CLI

Generamos dos componentes con la interfaz de línea de comandos de Angular

```bash
fernando@dodain ~/workspace/angular-2018/eg-componentes-angular $ ng generate component contador
CREATE src/app/contador/contador.component.css (0 bytes)
CREATE src/app/contador/contador.component.html (27 bytes)
CREATE src/app/contador/contador.component.spec.ts (642 bytes)
CREATE src/app/contador/contador.component.ts (277 bytes)
UPDATE src/app/app.module.ts (404 bytes)
fernando@dodain ~/workspace/angular-2018/eg-componentes-angular $ ng generate component usuario
CREATE src/app/usuario/usuario.component.css (0 bytes)
CREATE src/app/usuario/usuario.component.html (26 bytes)
CREATE src/app/usuario/usuario.component.spec.ts (635 bytes)
CREATE src/app/usuario/usuario.component.ts (273 bytes)
UPDATE src/app/app.module.ts (490 bytes)
```

Como vemos, todo componente tiene una estructura similar a una aplicación Angular, solo que sin el módulo. Quedan entonces estos archivos:

- **vista**: archivo xxx.component.html
- **modelo de vista**: xxx.component.ts
- **archivo de estilos**: xxx.component.css
- **testing unitario**: xxx.component.spec.ts


## Agregando Material Design para Angular

```bash
$ npm install --save @angular/material @angular/cdk
```

En https://material.angular.io/ podrán encontrar tips para incoporar componentes de Angular para trabajar, en particular en la página [getting started](https://material.angular.io/guide/getting-started). 

# Componente que muestra un usuario 

## Vista html

El primer componente reutilizable es un usuario que se visualiza en una Card de Material 

- tenemos un avatar con fondo rosa o azul en base al género
- el título con el nombre completo
- el subtítulo con una frase de cabecera

Eso lo definimos en nuestra vista usuario.component.html:

```html
<mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image">
      <button mat-mini-fab color="{{usuarioColor}}">
        <i class="material-icons">person{{usuarioClass}}</i>
      </button>
    </div>
    <mat-card-title>{{usuario.nombre}}</mat-card-title>
    <mat-card-subtitle>{{usuario.fraseCabecera}}</mat-card-subtitle>
  </mat-card-header>
</mat-card>
```

## Modelo de la vista

No tenemos binding bidireccional (_two-way_), sino que únicamente estaremos mostrando los datos de un usuario y nos ayudamos de dos propiedades usuarioClass y usuarioColor que define el modelo de la vista (ya que el objeto de dominio no debe estar atado a cuestiones tecnológicas). El archivo asociado para el modelo de la vista es usuario.component.ts:

```typescript
export class UsuarioComponent implements OnInit {

  @Input() usuario : Usuario

  get usuarioClass() {
    return this.usuario.esMujer() ? "" : "_outline"
  }

  get usuarioColor() {
    return this.usuario.esMujer() ? "accent" : "primary"
  }
```

Algunas observaciones:

- tanto usuarioClass como usuarioColor lo definimos como properties de solo lectura mediante el prefijo get (esto hace que no lo invoquemos con paréntesis sino como si fueran atributos del objeto)

- el usuario no vamos a instanciarlo desde cero, sino que lo vamos a pasar como **input**, por eso aparece la annotation @Input. Esto permite que lo llamemos desde la vista principal, dentro de un for que arma una lista de usuarios:

```html
  <mat-card-content>
    <div *ngFor='let usuario of usuarios'>
      <app-usuario [usuario]="usuario"></app-usuario>
    </div>
  </mat-card-content>
```

`[usuario]=usuario` está marcando que pasaremos al componente el objeto de dominio usuario para cada uno de los elementos de la colección de usuarios, que debemos inicializar en el modelo del componente principal:

```typescript
export class AppComponent {
  title = 'app'
  usuarios = [
        new Usuario("Gabriel Graves", "Soy el Brad Pitt de Lugano", Usuario.MASCULINO),
        new Usuario("Javier Zolotarchuk", "Tengo el corazón mirando al Sur...", Usuario.MASCULINO),
        new Usuario("Clara Allende", "Git Git Scala Git", Usuario.FEMENINO)
    ]
}
```

## Agregados de Material

Para incorporar elementos de Material debemos:

- agregar en el archivo index.html la referencia al css de Material

```html
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Componentes genéricos de Angular</title>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css">
```

- en el archivo app.module.ts agregar los imports en la definición del módulo

```typescript
/** Imports de Material */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
```

- y por último incorporar el tema de Material en el archivo raíz styles.css

```css
/* You can add global styles to this file, and also import other style files */
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

Esto permite que los podamos usar dentro de las vistas.

# Componente contador

