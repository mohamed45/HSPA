import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {
  property:any ={
    id:1,
    type:"House",
    name:"birla house",
    price:1200
  }

}
