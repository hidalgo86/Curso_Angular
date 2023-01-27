import { TerceroComponent } from "./tercero/tercero.component";
import { SegundoComponent } from "./segundo/segundo.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PrimeroComponent } from "./primero/primero.component";

const routes: Routes = [
  { path: "primero", component: PrimeroComponent },
  { path: "segundo", component: SegundoComponent },
  { path: "tercero", component: TerceroComponent },
  {
    path: "productos",
    loadChildren: () =>
      import("./productos/productos.module").then(m => m.ProductosModule)
  },
  { path: "", redirectTo: "primero", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
