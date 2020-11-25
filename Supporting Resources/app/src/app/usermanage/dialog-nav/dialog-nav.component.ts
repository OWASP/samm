import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {AuthService} from '../services/auth.service';
export interface PeriodicElement {
  firstname: string;
  username: string;
  email: string;
  role: string;
  groupName: string;
  action:string;
}

@Component({
  selector: 'app-dialog-nav',
  templateUrl: './dialog-nav.component.html',
  styleUrls: ['./dialog-nav.component.css']
})
export class DialogNavComponent {

  action:string;
  local_data:any;
  value:any;
  constructor(
    public dialogRef: MatDialogRef<DialogNavComponent>,
    private authService: AuthService,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: PeriodicElement) {
      this.value=data;
      this.action=data.action;
     // this.local_data.action=data.action;
     // this.action = this.local_data.action;
      this.getuser();

  }
  getuser()
  {
   // console.log(this.value);
    this.authService.getUserdetails(this.value).subscribe(data =>
      {
        if(data.success)
        {
         //console.log(data.values[0].id);
          this.local_data=data.values[0];
         // this.local_data.id=data.values[0].id;
          //console.log(this.local_data);
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
