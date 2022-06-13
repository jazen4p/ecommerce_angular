import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { ModuleWithProviders } from '@angular/core';

import { AboutComponent } from "./about/about.component";
import { ProductsComponent } from "./products/products.component";
import { HomeComponent } from "./home/home.component";
import { CartComponent } from "./cart/cart.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "products", component: ProductsComponent },
  { path: "home", component: HomeComponent },
  { path: "cart", component: CartComponent },
  { path: "sidebar-component", component: SidebarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
