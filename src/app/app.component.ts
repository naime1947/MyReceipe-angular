import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyReceipe-angular';

  selectedMenu:string;
  onNavigate(selectedMenu:string){
    this.selectedMenu = selectedMenu;
  }
}
