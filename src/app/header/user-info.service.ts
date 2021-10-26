import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable({providedIn: 'root'})
export class userInfoService {
    url : string = 'https://wikipedia-app-c615e-default-rtdb.firebaseio.com/my-info.json'; 
    constructor(private http:HttpClient) {
    }

    getUserInfo() {
        console.log(this.url); 
        return this.http.get<UserInfo>(this.url);
    }

    modifyUserInfo(data:UserInfo) {
        return this.http.put(this.url, data); 
    }

    createNewUser(data:UserInfo) {
        return this.http.post(this.url, data); 
    }

 }
function data(url: string, data: any) {
    throw new Error("Function not implemented.");
}

