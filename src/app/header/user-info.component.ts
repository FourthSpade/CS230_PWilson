import { HttpClient } from "@angular/common/http"; 
import { Component, Injectable, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model"; 
import {userInfoService } from "./user-info.service"; 


@Injectable()
@Component({
    selector: "wikipedia-user-info", 
    templateUrl: "user-info.component.html"
})
export class UserInfoComponent implements OnInit {
    myInfo: UserInfo | undefined; 
    constructor(private infoService: userInfoService) {
    }

    ngOnInit(): void {
        console.log("registeringshowUserInfo as a subscriber"); 
        this.showUserInfo(); 
    }

    showUserInfo(){
        this.infoService.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data); 
            this.myInfo = data; 
        })
    }
}