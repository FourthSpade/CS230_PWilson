import { Component } from "@angular/core";
import { UserInfoComponent } from "./user-info.component";
import { UserInfo } from "./user-info.model";
import { userInfoService } from "./user-info.service";

@Component({
    selector: 'app-top-bar', 
    templateUrl:'top-bar.component.html'
})

export class TopBarComponent {
    user:string = "Not logged in"

    constructor(private infoService: userInfoService) {

    }

    onUpdateUserInfo(data:UserInfo) {
        console.log("button Pressed");
        console.log(data);
        this.infoService.modifyUserInfo(data).subscribe(data => {
            console.log("updated user info");
        }); 
    }

    onCreateUserInfo(data:UserInfo) {
        console.log("create burron pressed");
        console.log(data); 
        this.infoService.createNewUser(data).subscribe(data => {
            console.log("created new user"); 
        })
    }
}