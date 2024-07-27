import { Component, OnInit, ViewChild } from '@angular/core';
import { FoodServicesService } from '../service/food/food-services.service';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  searchData: any;

  @ViewChild(HomeComponent) Home!: HomeComponent;

  constructor(private foodService: FoodServicesService, private router : Router) {}

  // viewChild('home') home : HomeComponent

  foods: any = [];

  ngOnInit(): void {}

  searchFood(e: any) {
    console.log(e);
  }

  onSubmit(s: any) {
    this.searchData = s;
  }

  onSearchChange(event: any) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;

    if (value.length == 0) {
      this.Home.getFoodData();
    }
  }


  getNavigateTo()
  {
    this.router.navigate(['/cart'])
  }
}
