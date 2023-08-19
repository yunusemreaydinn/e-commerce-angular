import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MatListModule } from '@angular/material/list';
import { CommentsComponent } from './components/comments/comments.component';
import { EmailSectionComponent } from './components/email-section/email-section.component';
import { MatMenuModule } from '@angular/material/menu';
import { MenuClothesComponent } from './components/menu-clothes/menu-clothes.component';
import { MenuTechnologyComponent } from './components/menu-technology/menu-technology.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    ProductListComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CommentsComponent,
    EmailSectionComponent,
    MenuClothesComponent,
    MenuTechnologyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatDividerModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
