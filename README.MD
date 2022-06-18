# Microfronts

## Tenga en Cuenta

- Al iniciar un nuevo mf en angular

```ts
import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";

const routes: Routes = [{ path: "**", component: EmptyRouteComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule {}
```

adicionalmente en el app.module se agrega el EmptyRouteComponent

```ts
declarations: [AppComponent, EmptyRouteComponent];
```

- Zone (Se debe importar el script del cdn de zone para proyectos angular en el container)
- Para que las aplicaciones no se sobreescriban se debe modificar el selector como estandar
  pusimos mf-{mf-name}
  
  # Imagenes:
  
  ![image](https://user-images.githubusercontent.com/47374753/174455591-bcfec12c-6003-419e-96ab-2606a30bc1e4.png)

![image](https://user-images.githubusercontent.com/47374753/174455615-b1848e22-b2aa-4542-ac7b-31353cb411a7.png)

