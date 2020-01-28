import { Component, OnInit } from '@angular/core';
import {Ingrediant} from '../shared/ingrediant.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingrediants:Ingrediant[]=[new Ingrediant('Apple',10),new Ingrediant('Tomato',5)];
  constructor() { }

  ngOnInit() {
  }

}
