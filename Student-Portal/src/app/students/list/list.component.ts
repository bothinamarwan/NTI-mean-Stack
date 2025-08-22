import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CardComponent } from "../card/card.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,CardComponent,RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  students =[{id: 1,name:'bothina',age:22,major:'cs'},
    {id:2,name:'mariam',age:25,major:'finance'},
    {id: 3,name:'abdallah',age:28,major:'engineering'}];

}
