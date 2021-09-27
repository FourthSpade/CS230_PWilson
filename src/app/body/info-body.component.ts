import { Component } from "@angular/core";
import { BodyCardComponent } from "./Body-card.component";
import { mock_card } from "./mock_card";

@Component({
    selector: 'info-body', 
    templateUrl:'info-body.component.html'
})

export class InfoBodyComponent {
    BodyCards:BodyCardComponent[] = []; 

    constructor(){
        for (var charType of mock_card){
            this.BodyCards.push(new BodyCardComponent(charType));
        }
    }
}