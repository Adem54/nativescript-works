import { EventData, Page } from "@nativescript/core";

  export function myPageWasLoaded(args:EventData){
  let page=<Page>args.object;//<Page> type isin sen diye zorluyruz bunu...cunku anladimg kadar i ile burda gelen type genis bir type yan Page type ini da kapsayan type lardan olusan bir type tipi biz de diyoruz ki haci sen bestemt, constant bir type ol ve bu da Page olsun diyerek onu zorlamis oluyourz esasinda yani bu CASTING yapyoruz burda.... ve bu sekilde sayfamizin referansina erisiyuoruz
  console.log("This method was fired");//  JS: This method was fired
  //Bu sekidle console a yazdirarak, bunu command line da gorebiliyoruz, ama bizim debugger yontemimiz tabi ki bu degil.
  //En ufak bir code degisiminde layout-ui sayfamiz olan .xml sayfamiz ana Page sayfasinda bulunan loaded methoduna bir fonksiyon atadigmiz icin ve o fonksiyonu behind-file olan .ts de olusturup export ile de nativescript e tanittgimz icin bu sekilde command line de console yazdmgiz mesaji en ufak bir degisiklikte gormus oluyoruz
}

//Biz yukardaki gibi export da edebiliriz ya da asagidaki gibi exports. objesi altinda bir prototyping ile tnaimlayarak value olarak da burda olsuturudgmuz myPageWasLoaded i atayarak bunu nativescriptin tanimasini saglamis oluruz.. 
 //exports.myPageWasLoaded=myPageWasLoaded;


//code-behind file of main-page.xml file
//Burasi business-logi of our UI dir, yani main-page.xml dosyasinin business logic kismini biz burda halledecgiz
//Bu dosya icinde yapacagimzi hersey, bu bir uzak api den data fetch etme olabilir veya herhangi bir UI elemnetini update etmek olablir. Burda cok fazla sey yapacgiz
//Biz buraya behind-file code u yerlestiriryoruz ne yaparak, bizim .xml dosysasi icindeki Page ornek sayfamizin referansini alarak, ve onu kullnma sokarak

/*
Event handlers in nativescript

*/
