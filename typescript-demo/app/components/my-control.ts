import { Label, Button, StackLayout } from "@nativescript/core";											
											
export class MyControl extends StackLayout {											
    constructor() {											
        super();											
											
        let counter: number = 0;											
        const lbl = new Label();											
        const btn = new Button();											
        btn.text = "Tap mee!";											
        btn.on("tap", (args) => {											
            lbl.text = "Tap " + counter++;											
        });											
											
        this.addChild(lbl);											
        this.addChild(btn);											
    }											
}											
											