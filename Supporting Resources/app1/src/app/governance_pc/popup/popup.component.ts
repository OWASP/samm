import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {FormControl } from "@angular/forms";
import {AuthService} from '../services/auth.service';
import {saveAs} from 'file-saver';
import { TokenStorageService } from '../../auth/token-storage.service';
export interface PeriodicElement {
  id: number;
  category: string;
  quests: string;
  score: string;
  answer:string;
  review:string;
  findings:string;
  recommendations:string;
}
@Component({
  selector: 'GPC-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  providers:[AuthService]
})
export class GPCPopupComponent implements OnInit {
  private roles: string[];
  private authority: string;
//todo:any;
myGroup = new FormGroup({
  name: new FormControl()
});
todo="Show the uploaded file(s)";
  splitted:any=[];
  showfile:boolean;
  oppoSuits: any = ['Yes', 'Implementing', 'No', 'NA']
  action:string;
  local_data:any;
  w:any;
  dataItem: any;
  comment: {};
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  // tslint:disable-next-line: variable-name
  constructor( private authService: AuthService,private tokenStorage: TokenStorageService,
    public dialogRef: MatDialogRef<GPCPopupComponent>,   //@Optional() is used to prevent error if no data is passed
  @Optional() @Inject(MAT_DIALOG_DATA) public data: PeriodicElement,
  public fb: FormBuilder,private _formBuilder: FormBuilder) {
    // this.w=data.weight;
   //console.log(data);
    this.w=data.answer;
   // console.log(this.w);
   
    this.local_data = {...data};
    this.selectoptions(this.local_data);
    console.log(this.local_data);
    this.action = this.local_data.action;
  }

  oppoSuitsForm = this.fb.group({
    name: ['']
  })
  doAction(){
    this.dialogRef.close({event:"Update",data:this.local_data});
  }
  selectoptions(all_data)
  {
    this.authService.get_select_options(all_data).subscribe(data =>
    {
      if(data.success)
      {
        this.oppoSuits=[data.ans1,data.ans2,data.ans3,data.ans4]
      }
    });

  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_AUDITOR') {
          this.authority = 'Auditor';
          return false;
        } else if (role === 'ROLE_USER') {
          this.authority = 'User';
          return false;
        }
        this.authority = 'Admin';
        return true;
      });
      this.local_data.commentor=this.tokenStorage.getUsername();
      this.local_data.role=this.authority;
  }
  }
download(obj1)
{
  this.authService.governance_policy_table().subscribe(data =>
    {
       if(data.success)
       {
         //console.log(data);

      }
      });
  //console.log(obj1.position);
  this.authService.getuploads(obj1).subscribe(data=>
  {
    if(data.success)
    {
      if(data.results[0].filename=='')
         this.showfile=false;
      else
      this.showfile=true;
      var str=data.results[0].filename;
      this.splitted = str.split(", ");
    //  console.log(this.splitted);
    }
  });
}
downloadfile(index)
{
  //console.log(index);
  var f=this.splitted[index];
  var fname=
      {
        filename:f
     };
     this.authService.download(fname).subscribe(data =>
      {

        //saveAs(blob, "mongo.txt");
      //  console.log(data);
       saveAs(data,f);
      }),
      error=>console.log(error);

}
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
  isShown: boolean = false ;
  isShown1: boolean = false ; // hidden by default
uploadedFiles: any;
  fileChange(element) {
    this.local_data.upload = element.target.files;
    //console.log( this.uploadedFiles);
}
toggleShow() {

this.isShown = ! this.isShown;
//console.log(this.local_data);
var check={
  "groupname":'Governance',
  "secpractice":'Policy & Compliance'
};

    var merged = Object.assign(this.local_data,check);
   // console.log(this.local_data);
this.authService.comment_history(this.local_data).subscribe(data =>
  {
   // console.log(data.values[0].COMMENT);
   // arr=[];
   let arr1: any[];
   arr1= [];
   for (let stat of data.values)
   {
    arr1.push(stat.COMMENT+"\n");
   }
    this.local_data.hcomment=arr1;
  });
}
toggleShow1()
{
  this.isShown1 = ! this.isShown1;
  if(this.isShown1==false)
    this.todo="Show the uploaded file(s)";
  else
    this.todo="Hide the content(s)"
}
hist_score=0;
onChange(cityindex) {

  console.log(cityindex);
 
  this.local_data.answer=this.oppoSuits[cityindex];
 // alert(cityindex);
  if(cityindex==0)
    this.hist_score=0
  else if(cityindex==1)
    this.hist_score=0.25
  else if(cityindex==2)
   this.hist_score=0.5
  else if(cityindex==3)
    this.hist_score=1
  this.local_data.score= this.hist_score;
}
}
