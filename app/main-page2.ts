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

function myPageWasLoaded()
{
  console.log("myPageWasLoaded method is fired!");

}

exports.myPageWasLoaded = myPageWasLoaded;
//Zaten biz exports yazip hemen yanina memberacess syntaxi ile nokta koyarsak direk myPageWasLoaded i getirecektir kendisi...biz onu xml de tanimladigmzdan dolayi
