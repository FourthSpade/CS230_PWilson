import { Component } from "@angular/core";
import { BodyModelComponent } from "./Body-card.model"
import { mock_card } from "./mock_card";
import { mock_card2 } from "./mock_card2"; 

@Component({
    selector: 'info-body', 
    templateUrl:'info-body.component.html'
})

export class InfoBodyComponent {
    BodyCards:BodyModelComponent[] = []; 

    constructor(){
        for (var charType of mock_card){
            this.BodyCards.push(new BodyModelComponent(charType));
        }
        for (var BodyCard2 of mock_card2){
            this.BodyCards.push(new BodyModelComponent(BodyCard2));
        }
    }
}