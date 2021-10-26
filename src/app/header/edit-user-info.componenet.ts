import { Component } from "@angular/core"
import { UserInfo } from "./user-info.model"; 
import { userInfoService } from "./user-info.service"



@Component({
    selector: 'wiki-edit-user-info',
    templateUrl: "edit-user-info.component.html"
})
export class EditUserInfoComponenet{
    constructor(private infoService:userInfoService){

    }

    onEditUserInfo(edit: UserInfo) {
        console.log("Submit button clicked"); 
        console.log(data); 
    }
}

function data(data: any) {
    throw new Error("Function not implemented.");
}
