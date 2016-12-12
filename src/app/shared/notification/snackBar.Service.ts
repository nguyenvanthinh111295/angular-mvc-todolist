import { Injectable } from '@angular/core';
import { MdSnackBarConfig, MdSnackBar } from "@angular/material";
import { MessageTypes } from "./MessageTypes";

@Injectable()
export class SnackBarService {

    constructor(public snackBar: MdSnackBar) { }

    public DisplayNotification(messageTypes: MessageTypes, message: string, milliseconds: number )
    {
        let config = new MdSnackBarConfig();
        config.duration = milliseconds;
        this.snackBar.open(messageTypes + " : " + message, "close", config);
    }
}