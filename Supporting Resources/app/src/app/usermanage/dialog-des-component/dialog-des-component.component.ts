import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {AuthService} from '../services/auth.service';
export interface PeriodicElement {
  Name: string;
  Username: string;
  Email: string;
  Role: string;
  GroupName: string;
}
@Component({
  selector: 'app-dialog-des-component',
  templateUrl: './dialog-des-component.component.html',
  styleUrls: ['./dialog-des-component.component.css']
})
export class DialogDesComponentComponent {

  action:string;
  local_data:any;
 value:any;
  constructor(private authService: AuthService,
    public dialogRef: MatDialogRef<DialogDesComponentComponent >,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: PeriodicElement) {
    //console.log(data);
    this.value=data;
    this.getuser();
    //this.local_data = {...data};
    //this.action = this.local_data.action;
    //console.log(this.local_data);
  }
  getuser()
  {
   // console.log(this.value);
    this.authService.getUserdetails(this.value).subscribe(data =>
      {
        if(data.success)
        {
         // console.log(data.values[0].phone);
          this.local_data=data.values[0];

          console.log(this.local_data);
          // data1.push(this.x[0].id);
          // this.displayedColumns=['pos']
          // console.log(this.x);
          // this.dataSource=[{position: 1, name: 'Have developers been given high-level security awareness training?', weight: 1.0079, symbol: 'H',auditor:'Admin'}];
        }
        else{
          console.log(data);
        }
      });
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
