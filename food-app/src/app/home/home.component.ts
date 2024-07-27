import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FoodServicesService } from '../service/food/food-services.service';
import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnChanges {
  @Input() searchData: any;

  constructor(private foodService: FoodServicesService) {}

  foods: any = [];

  image: any;

  ngOnInit() {
    this.getFoodData();
  }

  getFoodData() {
    this.foodService.getAll().subscribe(
      (res: any) => {
        this.foods = res;
      },
      (error) => {
        console.error('Error fetching food data', error);
      }
    );
  }

  addTOcart(id: any) {
    console.log(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      this.foodService.getSearchFood(
        changes['searchData'].currentValue['search']
      )
    ) {
      this.foods = [];
      this.foods = this.foodService
        .getSearchFood(changes['searchData'].currentValue['search'])
        .subscribe((res: any[]) => {
          console.log(res);
          this.foods = [];
          this.foods = res;
          console.log(res);
        });

      setTimeout((res: any) => {
        localStorage.removeItem('search');
      }, 1000);
    }
  }
}
