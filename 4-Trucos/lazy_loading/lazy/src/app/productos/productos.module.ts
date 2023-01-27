import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductoUnoComponent } from "./producto-uno/producto-uno.component";
import { ProductoDosComponent } from "./producto-dos/producto-dos.component";
import { ProductoTresComponent } from "./producto-tres/producto-tres.component";
import { routes } from "./productos.routing";

@NgModule({
  declarations: [
    ProductoUnoComponent,
    ProductoDosComponent,
    ProductoTresComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ProductosModule {}
