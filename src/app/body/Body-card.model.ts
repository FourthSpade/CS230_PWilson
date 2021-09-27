export class BodyCardComponent {
    header:string; 
    Text:string; 
    imagePath:string;  

    constructor({header, Text, imagePath} :
        {header:string, Text:string, imagePath:string}){
            this.header = header; 
            this.Text = Text; 
            this.imagePath = imagePath; 
    }
}
