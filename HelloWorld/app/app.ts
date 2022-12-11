/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import { Application } from '@nativescript/core'

Application.run({ moduleName: 'app-root' })

/*
Ugyualmamizi baslatan kisim burasidir, Application modulunde bulunan run methodu ile calisacak app-root.xml file isaret edilir ve app-root.xml ise icerside sayfalarimza erisecegimz bir containerdir yani o rda bulunan xml file sayesinde biz farkli ekranlarimiza veya sayfalarimiza gidebilecegiz
Frame icerisinde farkli sayfalari tutuyor ve de bir tane default page i de belirityor hangisi olmasi gerektigini
*/

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
