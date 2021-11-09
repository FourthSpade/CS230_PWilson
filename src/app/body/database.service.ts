import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { UserInfo } from "../header/user-info.model";
import { CardData } from "./Card.model";

@Injectable({
    providedIn: 'root'
})
export class databaseService {
    items: Observable<CardData []>
    constructor(private db:AngularFireDatabase) {
        console.log("Setting up firebase communications"); 
        this.items = this.db.list<CardData>('CardData').valueChanges(); 
    }

    public showData() {
        this.items.subscribe((data: CardData []) =>{
                console.log("data recieved");
                console.log(data); 
                for(let item of data){
                    console.log(item); 
                }
        })
    }
}