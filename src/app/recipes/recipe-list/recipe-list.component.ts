import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
    new Recipe('Kola Recipe','Very good colla recipe', 'https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_960_720.jpg' ),
  new Recipe('Jambura Recipe','Very good Jambura recipe', 'https://www.agomonbd.com/wp-content/uploads/2019/09/51eSK3PFBKL.png' ),
  new Recipe('Mengo Recipe','Very good colla recipe', 'https://i.pinimg.com/474x/99/15/0b/99150b2c10c4200b4c9051cfdd469a82.jpg' )
];

  constructor() { }

  ngOnInit() {
  }

}
