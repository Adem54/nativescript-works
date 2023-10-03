/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

//Burasi nativescript i baslatan dosyadir...cook onemli, baslangic dosyasidir,  yani app in hangi module den baslatilacagini burda belirleriz ve app-root isimle module den calisitirlmaya baslatilsin deniyor asagida...
//app-root dosyasi <Frame defaultPage="main-page"></Frame> Frame ler navigation section lar i konustugumuz zaman devereye girecektir...COOK ONEMLI...
//moduleName: 'app-root'  burda ne yazarsa o yazan moduleName ismine karsilik gelen bir dosyas isminde .xml dosyasi olmak zorundadir ki nativescript gitsin application i o dosyadan baslatsin...COOOK ONEMLI..

import { Application } from '@nativescript/core'

Application.run({ moduleName: 'app-root' })

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
