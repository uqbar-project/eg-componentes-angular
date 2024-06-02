# Componentes reutilizables de Angular

[![Build](https://github.com/uqbar-project/eg-componentes-angular/actions/workflows/build.yml/badge.svg)](https://github.com/uqbar-project/eg-componentes-angular/actions/workflows/build.yml) ![Coverage](./badges/eg-componentes-angular/coverage.svg)

![demo](./images/demo2024.gif)

## Creación de componentes con Angular CLI

Generamos dos componentes con la interfaz de línea de comandos de Angular

```bash
ng generate component contador # o ng g c contador
ng generate component producto
```

Como vemos, todo componente tiene una estructura similar a una aplicación Angular, solo que sin el módulo. Quedan entonces estos archivos:

- **vista**: archivo xxx.component.html
- **modelo de vista**: xxx.component.ts
- **archivo de estilos**: xxx.component.css
- **testing unitario**: xxx.component.spec.ts


# Componente contador

El contador es un ejemplo simple, pero muestra la independencia del scope de variables de los componentes de Angular. En la vista principal de la aplicación, definimos dos contadores, cada uno con diferente valor inicial. En el archivo app.component.html escribimos:

```html
<div>
  <app-contador [valorInicial]="3"></app-contador>
  <app-contador [valorInicial]="0"></app-contador>
</div>
```

Fíjense que hay una diferencia entre:

```html
[valorInicial]="3"
```

donde el valor inicial que pasamos es la expresión 3 vs.

```html
valorInicial="3"
```

donde el valor 3 se interpreta como un valor fijo, un String. En este caso `elemento` sería un string también, así que es importante encerrar el parámetro valorInicial entre corchetes.

Por lo tanto ya sabemos que nuestro @Input debe ser un valor inicial. Pero además, vamos a trabajar con un objeto de dominio contador, al que vamos a poder sumar o restarle un número (`contador.domain.ts`):

```typescript
export class Contador {
    constructor(public valor = 0) { }

    sumar() {
        this.valor++
    }

    restar() {
        this.valor--
    }
}
```

Los parámetros en el constructor marcados con el modificador `public` o `private` generan un atributo en la misma clase:

- primero definimos un atributo valor de tipo number, con valor por defecto 0
- por otra parte al construir un Contador, asignamos el valor recibido en el constructor en dicho atributo

Entonces:

```ts
new Contador()   ==> el atributo valor se inicializa en 0
new Contador(5)  ==> el atributo valor se inicializa en 5
```

Para más información pueden ver [este artículo](https://kendaleiv.com/typescript-constructor-assignment-public-and-private-keywords/).

## Componente Contador

El componente Contador va a inicializar el contador cuando reciba el valor inicial. Y esto lo hace en el momento de la inicialización, dentro del método ngOnInit (contador.component.ts):

```typescript
export class ContadorComponent implements OnInit {

  @Input() valorInicial : number
  contador! : Contador
  
  ngOnInit() {
    this.contador = new Contador(this.valorInicial)
  }
}
```

¿Qué significa el signo de admiración (`!`) para la referencia contador? Que Typescript puede asumir que la variable siempre tendrá un valor Contador (no puede ser nula), en caso contrario cuando accedamos a dicha variable en runtime y sea nula recibiremos un mensaje de error (para más información recomendamos leer [este artículo](https://stackoverflow.com/questions/66843040/what-is-the-equivalent-of-late-lazy-lateinit-in-typescript)).

Así se construye el contador que va a ser el modelo de la vista. Aquí tendremos:

- _buttons_ que disparan actualizaciones al modelo (ver la propiedad _click_)...
- ...y un binding del modelo a la vista del input que muestra el valor actual del contador (deshabilitado para el usuario, ver la propiedad _value_ que utiliza el _moustache_ contador.valor)

Esto lo vemos en la vista contador.component.html:

```html
<div class="contador__form">
    <button class="circle color-primary" data-testid="restar" (click)="contador.restar()">
        <i class="material-icons">keyboard_arrow_left</i>
    </button>
    <input class="contador__label" data-testid="contador" disabled value={{contador.valor}}/>
    <button class="circle color-primary" data-testid="sumar" (click)="contador.sumar()">
        <i class="material-icons">keyboard_arrow_right</i>
    </button>
</div>
```

Lo interesante es que pueden coexistir dos componentes app-contador, cada una con su propio valor en el modelo.

Vemos el gráfico general de la solución en Angular:

![images](images/ArquitecturaContador.png)

# Componente principal

Como hemos visto anteriormente el componente principal pasa

- cada parámetro de la lista de usuarios como input del componente de usuarios
- un valor inicial como input al componente contador

![images](images/ArquitecturaComponentesReutilizables.png)

# Testing

## Usuario

Hay un solo test relevante para contar respecto al usuario: el componente debe mostrar un ícono de color diferente en el caso del género femenino:

```typescript
it('female gender should appear with a special icon', () => {
  const result = fixture.debugElement.nativeElement
  expect(esMujer(result)).toBeTruthy()
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function esMujer(result: any) {
  return result.querySelector('.accent')
}
```

El método toBeTruthy() busca que exista un elemento html con una clase _accent_ que equivale al color elegido para el género femenino. Es un test bastante discutible, porque es muy fácil de romper, pero didácticamente muestra que el alcance del mismo excede la unitariedad integrando componentes de presentación y de negocio.

## Contador

Además de los típicos controles de creación de componente, en los tests validamos

- que se pueda pasar un valor inicial como parámetro @input: se debe visualizar en el input de texto
- pasar un valor e incrementar uno el contador: se debe visualizar el nuevo valor en el input
- pasar un valor y decrementar uno el contador: se debe visualizar el nuevo valor en el input

Esto naturalmente está en el archivo _usuario.component.spec.ts_:

```typescript
beforeEach(() => {
  fixture = TestBed.createComponent(ContadorComponent)
  component = fixture.componentInstance
  component.valorInicial = 5
  fixture.detectChanges()
})

it('initial value should be 5 if setted', () => {
  expect(getByTestId(fixture, 'contador').value).toEqual('5')
})
it('initial value should increase if plus button clicked', () => {
  getByTestId(fixture, 'sumar').click()
  fixture.detectChanges()
  expect(getByTestId(fixture, 'contador').value).toEqual('6')
})
...
```

Para poder construir el objeto Contador y pasarle el valor inicial, debemos enviar el mensaje `fixture.detectChanges()` del componente. 

Si se fijaron bien, estamos utilizando la técnica de tener tags de HTML con atributos `data-testid`, para luego poder identificarlos puntualmente en los tests. Los navegadores ignoran esta directiva, lo que permite que nuestros tests sean resilientes a los cambios. La función `getByTestId` está definida en un archivo `test-utils`.

## Productos de un carrito de compras

Similar al componente que muestra los usuarios, implementamos el componente que sabe mostrar un producto. La explicación completa la podés ver en [este video de Youtube](https://youtu.be/WIQvggovnY4).

## Componente padre

Por último, el componente padre también tiene su propio conjunto de tests, aunque al delegar principalmente a los componentes hijos, no son pruebas interesantes para contar (simplemente que se pueda crear correctamente).
