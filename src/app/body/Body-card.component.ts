import { Component, Input } from "@angular/core";

@Component({
    selector: 'body-card', 
    templateUrl:'Body-card.component.html'
})

export class BodyCardComponent {
    @Input()
    header! :string; 
    @Input()
    Text! :string; 
    @Input()
    imagePath! :string; 
}