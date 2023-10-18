import { Button, EventData, Frame, Page } from "@nativescript/core";
import { ApplicationSettings } from "tns-core-modules";

export const logout = (args:EventData)=>
{
    let button = <Button>args.object;
    let page = button.page as Page;
    let frame = page.frame as Frame;
    frame.navigate("pages/login/login");
}

let data = {
  name:"Adem22",
  favfood:"Pizza22",
  speaks:"Javascript22"
}

export const onLoaded = (args:EventData)=>
{
  let page = <Page>args.object;
  page.bindingContext = data;
}

/*
<Page xmlns:Card="@nstudio/nativescript-cardview"
navigatedTo="onNavigatedTo"
>
Bu method, login sayfasindan, dashboard sayfasina navige olundugu zaman tetiklenecek olan bir eventtir
*/
export const onNavigatedTo = (args:EventData)=>
{
    console.dir(args);
    console.log(args.object);
    let page = args.object as Page;
    //Datam args.context ile geliyor gozukmesine ragmen bu sekilde alamiyoruz onun yerine asagidaki gibi page.navigationContext.data; ile alabiliyoruz
    // const context = page.navigationContext.data;
    // console.log("context: ", context);
    // console.log("name: ", context.name);
    // console.log("favfood: ", context.favfood);
    // console.log("speaks: ", context.speaks);
    //  page.bindingContext = page.navigationContext.data;

    const data = JSON.parse(ApplicationSettings.getString("userData") || '{}');
    console.log("data-from-applicationSettings: ", data);
    page.bindingContext = data;

  /*
  onNavigatedTo eventinin parametresinde, bir onceki gelinen sayfadan gonderilen data lari alabiliyoruz asagidaki gibi gorebiliriz o datalari nasil alaagimizi
   JS: ==== object dump start ====
  JS: eventName: "navigatedTo"
  JS: object: Page(73)@pages/dashboard/dashboard.xml:1:1;
  JS: context: {
  JS:   "data": {
  JS:     "name": "Zehra",
  JS:     "favfood": "Kebap",
  JS:     "speaks": "Norweigan"
  JS:   }
  JS: }
  JS: isBackNavigation: "false"
  JS: ==== object dump end ====
  JS: CONSOLE LOG: onNavigatedTo-trigger-in dahsboard-page!

  */
  console.log("onNavigatedTo-trigger-in dahsboard-page!");
  alert("onNavigatedTo-trigger-in dahsboard-page!");
}
