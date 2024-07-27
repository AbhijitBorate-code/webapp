import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-app',
  templateUrl: './star-app.component.html',
  styleUrl: './star-app.component.css'
})
export class StarAppComponent {
  @Input() rating: number = 0; // Rating value from parent component
  stars: number[] = [1, 2, 3, 4, 5]; // Star ratings

  getStarClass(star: number): string {
    return star <= this.rating ? 'filled' : 'empty';
  }
}
