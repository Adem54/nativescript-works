
// app/components/my-control.ts
import { EventData, StackLayout } from "@nativescript/core";

export function onLoaded(args: EventData) {
    console.log("Custom Component Loaded", <StackLayout>args.object);
   //JS: Custom Component Loaded StackLayout(3)@view/stacklayout/layout.xml:2:1; 
}