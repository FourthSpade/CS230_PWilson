import { Component } from "@angular/core";
import { BodyModelComponent } from "./Body-card.model"
import { CardData } from "./Card.model";
import { CardDataService } from "./Card.service";
import { mock_card } from "./mock_card";
import { mock_card2 } from "./mock_card2"; 

@Component({
    selector: 'info-body', 
    templateUrl:'info-body.component.html'
})

export class InfoBodyComponent {
    CardData: CardData | undefined;
    BodyCards:BodyModelComponent[] = []; 

    constructor(private DataService: CardDataService){
        for (var charType of mock_card){
            this.BodyCards.push(new BodyModelComponent(charType));
        }
        this.DataService.getCardData().subscribe((data: CardData) => {
            console.log(data)
        })
    }

    ngOnInit(): void {
        console.log("registeringshowUserInfo as a subscriber"); 
        this.showCardData(); 
    }

    showCardData(){
        this.DataService.getCardData().subscribe((data: CardData) => {
            console.log(data); 
            this.CardData = data; 
        })
    }
}
    
