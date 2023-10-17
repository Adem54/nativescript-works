import { Button, EventData, Page, fromObject, Http, Frame } from "@nativescript/core";

let myObj = fromObject({
  username:"",
  password:"",
});

export function onLoaded(args:EventData)
{
  const Page = args.object as Page;
  // alert("OnLoaded");
  Page.bindingContext = myObj;
}

export  function onSubmit(args:EventData)
{
  const Button = <Button>(args.object);
  const Page = Button.page as Page;

  let username="admin";
  let password = "admin";

  if(Page.bindingContext.username === username && Page.bindingContext.password === password)
  {
    //navigate page from login page  to dashboard page!
    //Bunu bircok farkli yollarla y apabiliriz
    //1-Once Page imizin referansini aliriz, yukarda aldigimz gibi
    //Herhangi bir widget (button,label,textfield...) dan page in referansina erisebiliyoruz
    //page referansindan id uzerinden page icindeki herhangi istedigmz baska bir widget a da erisebiliyorduk..
    //BESTPRACTISE-YENI BIR BILGI:page referansi uzerinden biz frame in referansina da erisebiliyoruz..!!!!!!COK IHTIYACMIZ OLACAK!!!!!!
    const frame = Page.frame as Frame;
    //const {object:{page:{frame}}}
    frame.navigate("pages/dashboard/dashboard") //frame referansinin navigate methodu, direk string de aliyor ya da daha detayli data icin, object de aliyor...
    //Bu sekilde sayfalar arasi navige olabiliyoruz kolay bir sekilde..
    //Tabi bizim sayfalar arasindaki status durumlarini da kolayca tutabilmemiz gerekiyor...BUNU UNUTMAYALIM!!!!
    //Dashobard sayfasina gidince normalde en ustte nativescirpt tarafndan gelen Back buton veya linki var bizim bir onceki sayfaya donmemizi saglayan ama bu Back butonu muhtemelen Ios lar icin gecerli andorid ler icin gecerli olmayabilir ya da tam tersi
    //Sunu iyi bilelim, bizim datayi store, nasil tutacagimz ve sayfalar arasi geciste nasil data aktarabilecegimz cok onemlidir...ki login sayfasindan verileri kontrol ettik dogru ise ornegin kullaniciyi dashboarda gonderdik ne yapacagiz tabi ki kullanici bilgilerini biz dashboard da gosterecegiz....

    let options = {
      moduleName:"pages/dashboard/dashboard",
      clearHistory:true,//yeni sayfaya navige olduktan sonra, gerideki bilgileri sil, veya unut demek, bu da kullanicinin geldigi sayfaya geri donmesini engeller, bu bazi spesifik durumlarda ihtiyac duyulan bir ozelliktir...biz kullanicimizin bazen geldigi sayfaya kendisinin nativescript tarafindan verilen natural, default yollarla donmemesini isteyebiliriz...iste bu sekilde engelleriz, ya da bir onceki sayfay geri gelme islemini bizim kontrolumuzde gerceklesmesini ve bizim yontemizi isteriz...boyle durumlarda da biz bu islemi yapariz, bu sekilde de bir sayfadan digerine navige olunca default olarak gelen Back linkini kaldirmis oluyoruz

    }
    frame.navigate(options)
  }

}

  //if the request says success  -> dashboard
  //else show some alert message

  /*
    alert(`Username: ${Page.bindingContext.username}  -  Password:  ${Page.bindingContext.password}`)

  */
  //http-request - http://localhost:1115/login
  // let url = "http://localhost:1115/login";
  // url = "https://jsonplaceholder.typicode.com/users";



  // Http.getJSON(url).then(response=>
  // {
  //   console.log("response: ", (response as any).length);
  // }).catch(error=>console.log("error: ", error))