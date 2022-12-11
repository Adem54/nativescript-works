// import { EventData, Page } from '@nativescript/core'
// import { HelloWorldModel } from './main-view-model'
// import { View, Label, getViewById, EventData } from "@nativescript/core";

// let count = 0;
// export function buttonTap(args: EventData) {
//     count++;
//     let button = <View>args.object;
//     let parent = button.parent;
//     if (parent) {
//       //Label1 id si ile label alliyoruz ve icerigine dinamik olark counttaki degeri yazdiriyoruz
//         let lbl = <Label>getViewById(parent, "Label1");
//         //label i bu sekilde aliyor, parent contenti alioyor onu label a erismede parametre de kullaniyor ve de label icerigini dinamik bir skeidle count degiskenini atama yapiuyor
//         if (lbl) {
//             lbl.text = "You tapped " + count + " times!";
//         }
//     }
// }

//EventData type i node.js altinda observable altindaki index.d.ts den geliyor
// export const navigatingTo=(args: EventData)=> {//Burasi HelloWorlde navigate ediyor....yani navigatingTo fonksiyonu hangi xml icinde tabi ki icinde bulungumuz main-page.ts sayfasi ile ayni isimde olan main-page.xml icindedir
//   //<Page xmlns="http://schemas.nativescript.org/tns.xsd" navigatingTo="navigatingTo">
//   // Burasi xml icinde execute islemini dinamik islemi yapiyor..Ve burasi nereyi calistiriyor bizim, main-page.xml icinde gidip icerigik olarak HelloWorldModel() ismindeki class imizdan bir instance alarak onu calistiriyor
//   // environment variable lari aliyor
//   const page = <Page>args.object;//Burda page i elde ediyoruz args.object sayesinde cunku bu zaten
//   page.bindingContext = new HelloWorldModel()
//  // page.bindingContext = page.navigationContext;
//   //icerigi dinamik bir sekilde buraya baglamis oluyoruz aslinda
// }

//export declare class Page extends PageBase { decleare kullanilma sebebi, typescript 3.part disardan alinan bu sekilde class larda hata vermeyip onlari global yaparak tanimasi icin verilen bir syntaxdir

//Page:
//NativeScript applications consist of pages that represent the separate application screens.
//Pages are instances of the Page class from the Page module. 
/*
export interface EventData {
	/*
	 * The name of the event.

   eventName: string;
   
    * The Observable instance that has raised the event.
   object: Observable;
 }

 args.object  Observable in bir instancesidir yani new Observable() demektir aslinda... 
 var pageData = new Observable(); bununla ayni sey aslinda
 import { EventData } from '../../data/observable';
 using page events with the related event data and implementing page navigation

*/

import { EventData, Page} from "@nativescript/core";
import { HelloWorldModel } from "./main-view-model";

// Event handler for Page "loaded" event attached in main-page.xml
export function navigationTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    page.bindingContext=new HelloWorldModel();
    // page.bindingContext=page.navigationContext;
    // var tabView1 = <TabView>getViewById(page, "tabView1");
    // tabView1.selectedIndex = 1;
    // var labelView1=<Label>getViewById(tabView1,"label1");
    // labelView1.text="I changed this labels content";
    //selectIndex 0 dersek, TAB1 I SECECEK, selectIndex 1 dersek o zaman da TAB2 YI SECECEK
    //tabView1.selectedIndex = 1;
}