import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"card", component: CardComponent},
  {path:"products", component: ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
