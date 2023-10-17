import { Button, EventData, Frame, Page } from "@nativescript/core";

export const logout = (args:EventData)=>
{
    let button = <Button>args.object;
    let page = button.page as Page;
    let frame = page.frame as Frame;
    frame.navigate("pages/login/login");
}
