//Simdi biz main-page2.ts diye bu dosyayi olusturdgumuz zaman, yani main-page2.xml dosyasi na karsilik olarak ayni isimde main-page2.ts olusturdugmuz zaman dogrudan otomatik olarak nativescript bu dosyayi main-page2.xml e baglamis oluyor ve main-page2.xml in otomatik olarak code-behinde i olmus oluyor...BUUU COOOOK ONEMLI BUNU IYI BILMEK GEREKIYOR...XML DOSYASI ILE  BIZ AYNI ISIMDE .TS DOSYASI OLUSTURDUGMUZ ZAMAN NATIVESCRIPT BUNU ARTIK O XML DOSYASINI CODE-BEHINDE OLARAK YANI O XML DOSYASINA BAGLAMIS OLUYOR..
//KISACASI UI MIZIN YANI MAIN-PAGE2.XML  UI NIN BUSINES LOGIC ISLEMLERINI YAPACAGIZM YERDIR CODE-BEHIND YANI MAIN-PAGE2.TS DOSYASI
//ISTE BU CODE-BEHIND .TS DOSYASI ICINDE BIZ API LERDEN DATA FETCH EDECEGIZ, VEYA XML DOSYASI ICINDE BAZI DATLARI DINAMIK OLARAK UPDAT EEDECEGIZ, YAPILABILECEK HEMEN HEMEN DINAMIK LIK ADINA HERSEYI BURDA YAPACAGIZ...
//XML LAYOUT LARI INSAA ETMEK ICIN KULLANILACAK YANI UI I, TYPESCRIPT BUSINESS LOGIC-CODE BEHIND DOSYAMIZ ISE BUSINESS LOGIC...DINAMIKLIK, VS BUNLAR ICIN KULLANILIR
//CODE-BEHINDE YANI .TS DOSYAMIZDA YAPILACAK EN TEMEL VE COK SIK ISLEMLERDEN BIR TANESI ILK ONCE, XML DOSYASINI TAMAMINI SARMAK ZORUNDA OLAN PAGE TAG ININ REFERANSINI ALARAK BASLARIZ VE ONDAN SONRA DA ONU KULLANMAYA BASLARIZ....
/*
import { EventData, Page } from '@nativescript/core';
import { HelloWorldModel } from './main-view-model';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object; //page in xml deki ana page in referansi aliyor...BU COK FAZLA KULLANACAGIMZ BIR ISLEMDIR

  page.bindingContext = new HelloWorldModel(); //SONRA DA O REFREANSNI ALDIGMIZ PAGE I BINDING ILE BIR CLASS A BAGLIYOR VE O CLASS ICERISINDE DE XML ICERISINDEKI TUM EVENTLERI VS HEPSINI ORDAN YONETEBILIYOR BU SEKIDLE BINDING ILE BAGLAMIS OLUYOR BU SAYEDE O CLASS IN NATIVESCRIPT TARAFINDAN CODEBEHINDE YAI MAIN-PAGE2.TS TARAFINDAN YANI ASLINDA MAIN-PAGE2.XML TARAFINDAN ALGILANMASINI SAGLAMIS OLYOR..
   myPageWasLoaded method is fired!
   Mobile uygulmmayi birkez acip kapatirsak console.log daki sonucumuzu gorecegiz sayfa tekrardan yukendiginde....

}

BIZ MAIN-PAGE2.XML ILE MAIN-PAGE2.TS I AYIRMAYALIM IKISI BIRLIKTE BIR MAIN-PAGE2 OLDUDUGNU BILELIM....

*/

import { EventData, Page, TextField } from "@nativescript/core";

export function myPageWasLoaded(args:EventData)
{
  console.log("myPageWasLoaded method is fired!");
  const page = <Page>args.object;//casting
  page.bindingContext = {
    message1:"TestMessage-1",
    message2:"TestMessage-2",
    name:"Adem"
  }
}

//DOGRUDAN LABEL-TEXTFIELD IN TEXT LERI UZERINDEN TWO-WAYS BINDING VE DINAMIK UPDATE ETME
/*
export function onTextField(args:EventData)
{
  console.log("onTextField: ");
  const textField = <TextField>(args.object); //const textField = <TextField>args.object; ayni seydir bir fark yok..
  console.log("textField-text: ", textField.text);
  const page = textField.page as Page;//= <Page>textField.page
  const nameLabel =  page.getViewById("textfield-name");
  const nameLabel2 =  page.getViewById("textfieldname");
  const nameLabel1 =  page.getViewById("message1");

  if(nameLabel1)
  {
    (nameLabel1 as any).text = textField.text;
    //Property 'text' does not exist on type 'ViewBase'.ts(233
  }
  if(nameLabel2)
  {
    (nameLabel2 as any).text = textField.text;
    //Property 'text' does not exist on type 'ViewBase'.ts(233
  }
  if(nameLabel)
  {
     (nameLabel as any).text = textField.text;
    //Property 'text' does not exist on type 'ViewBase'.ts(233
  }

} */

//exports.myPageWasLoaded = myPageWasLoaded;
//Zaten biz exports yazip hemen yanina memberacess syntaxi ile nokta koyarsak direk myPageWasLoaded i getirecektir kendisi...biz onu xml de tanimladigmzdan dolayi

//DATA-BINDINGS KEYS LER UZERINDEN TWO-WAYS BINDING VE DINAMIK UPDATE ETME
export function onTextField(args:EventData)
{
  console.log("onTextField: ");
  const textField = <TextField>(args.object); //const textField = <TextField>args.object; ayni seydir bir fark yok..
  console.log("textField-text: ", textField.text);
  const page = textField.page as Page;//= <Page>textField.page

  const nameLabel2 =  page.getViewById("textfieldname");
  const nameLabel1 =  page.getViewById("message1");
//SIMDI COK DIKKAT EDELIM....ASAGIDAKI ISLEMLERLE BIZ LABELLARIMIZDA, DATA-BINDING KEYS(XML TAGLARINDA DA KULLANIYORUZ) LERINI GUNCELLEDIK AMA BUNU VIEW-UI-XML E YANSITAMADIK!!!!!!
//AMA TEXTFIELD LARDA DEFAULT OLARAK TWO-WAYS BINDING OZELLIGI VAR OLDUGU ICIN, DIREK OLARKA KENDISI ZATEN YANSITIYOR ONU
//ASLINDA COK NORMAL OLMASI GEREKEN OZELLIK BU TEXTFIELD DA CUNKU DIREK TEXT E BAGLADIK BIZ VE KULLANICNIN TEXTFIELD DA GIRDIGI DEGER TEXT I DEGISTIRIYOR...BU OTOMATIK OLARAK ORDA UI DA YANSIYOR BIZ GORUYRUZ KI YANSIMASI DA GEREKIYOR TEXTFIELD IN TAM-DOGRU CALISABILMESI ICIN...
  if(nameLabel1)
  {
    page.bindingContext.message1 = textField.text;

    console.log("page.bindingContext.message1 : ", page.bindingContext.message1 )
    //Property 'text' does not exist on type 'ViewBase'.ts(233
  }
  if(nameLabel2)
  {
    page.bindingContext.message2 = textField.text;
    console.log("page.bindingContext.message2  : ", page.bindingContext.message2 )
  }

  //BESTPRACTISE...TEXTFIELD text i default olarak zaten two-way binding ozellgine sahip
  //Burda biz page.bindingContext.name buraya hicbir data atamasi yapmadik, ve kendisi direk olarka textField alanina kullanicnin UI da girmis oldugu degeri aliyor ve de nameLabel1 in text ine atama  yapiyor... Bu ozellik hemen ustteki Label larda olmadigi icin biz Label larin binding key degerlerini burda-code-behind da alabiliyorken onlari UI daki degerlerine  yansitamadik, sadece binding key leri uzerinden, binding-keylere biz textfield a girilen degerin atamasini yaptik ama o degerler label larda UI ya yansimadi, ama ayni sey textField da default olarak two-way binding den dolayi direk kendisi yansitiyor bunu hemen asagidaki gibi gorebiliyoruz...biz textfield binding key i olan name i direk nameLabel1 iin textine atayabildik ve bunun da UI da geldigini gorebiliyoruz
  if(nameLabel1)
  {
    (nameLabel1 as any).text = page.bindingContext.name;
  }
}
