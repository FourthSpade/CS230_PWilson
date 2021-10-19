import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CardData } from "./Card.model";

@Injectable({providedIn: 'root'})
export class CardDataService {
    url : string = 'https://wikipedia-app-c615e-default-rtdb.firebaseio.com/Card.json'; 
    constructor(private http:HttpClient) {
    }

    getCardData() {
        return this.http.get<CardData>(this.url);
    }

 }