import { Button, EventData, Page, fromObject, Http } from "@nativescript/core";


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



  //http-request - http://localhost:1115/login
  let url = "http://localhost:1115/login";
  url = "https://jsonplaceholder.typicode.com/users";

  const requestData = {
    key1: "value1",
    key2: "value2"
};

const headers = {
  "Content-Type": "application/json",
};


Http.getJSON(url).then(response=>{
  console.log("response: ", (response as any).length);
}).catch(error=>console.log("error: ", error))

  //if the request says success  -> dashboard
  //else show some alert message

  /*
    alert(`Username: ${Page.bindingContext.username}  -  Password:  ${Page.bindingContext.password}`)
  */

}

