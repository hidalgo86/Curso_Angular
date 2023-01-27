import { Routes } from "@angular/router";

import { ProductoUnoComponent } from "./producto-uno/producto-uno.component";
import { ProductoDosComponent } from "./producto-dos/producto-dos.component";
import { ProductoTresComponent } from "./producto-tres/producto-tres.component";

export const routes: Routes = [
  { path: "", component: ProductoUnoComponent },
  { path: "producto-dos", component: ProductoDosComponent },
  { path: "producto-tres", component: ProductoTresComponent }
];
