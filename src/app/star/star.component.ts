import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  @Input()  rating: number = 5;
  @Output() starClicked = new EventEmitter<number>();

  width: number = 100;

  ngOnInit(): void {
    this.width = this.rating * 90 / 5;
  }

  public onClick() {
    debugger
    this.starClicked.emit(this.rating);
  }


}
