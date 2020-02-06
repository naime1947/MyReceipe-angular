import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'header.component.html',
    styleUrls:['header.component.css']
})
export class HeaderComponent{

    @Output() onMenuSelected:EventEmitter<string> = new EventEmitter<string>();

    onMenuSelect(feature:string){
        this.onMenuSelected.emit(feature);
    }
}