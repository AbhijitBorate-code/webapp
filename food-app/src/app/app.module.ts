import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodServicesService } from './service/food/food-services.service';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StarAppComponent } from './star-app/star-app.component';
import { CartComponent } from './cart/cart.component';

const routers : Routes= [

  {
    path : '',
    component :HomeComponent
  },

  {
    path : 'cart',
    component :CartComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StarAppComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routers),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [FoodServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
