import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef  } from '@angular/material/dialog';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface PeriodicElement {
  Name: string;
  Username: string;
  Email: string;
  Role: string;
  GroupName: string;
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './usermanage-dialog-box.component.html',
  styleUrls: ['./usermanage-dialog-box.component.css']
})
export class UMDialogBoxComponent {

  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<UMDialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: PeriodicElement) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
  isShown: boolean = false ; // hidden by default

  toggleShow() {

    this.isShown = ! this.isShown;

    }
    onFileSelected() {
      const inputNode: any = document.querySelector('#file');

      if (typeof (FileReader) !== 'undefined') {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result)
        };

        reader.readAsArrayBuffer(inputNode.files[0]);
      }
    }

}
