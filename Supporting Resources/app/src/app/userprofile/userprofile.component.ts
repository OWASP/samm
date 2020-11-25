import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from "@angular/forms";
import {saveAs} from 'file-saver';
import { FileUploader } from 'ng2-file-upload';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from './services/user.service';
import {AuthService} from '../usermanage/services/auth.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatTable } from '@angular/material';
import { TokenStorageService } from '../auth/token-storage.service';
@Component({
  selector: 'user-root',
  templateUrl: './userprofile.component.html',
   styleUrls: ['./userprofile.component.scss'],
   providers: [AuthService, UserService]

})

export class UserprofileComponent  implements OnInit  {
  modalRef:BsModalRef;
  selecetdFile : File;
  public uploader:FileUploader = new FileUploader({url:''+environment.apiBaseUrl+'/upload'});
  private roles: string[];
  private authority: string;
imagePreview: string;
userInfo: any;
board: string;
errorMessage: string;
local_data={
  fname:'',
  lname:'',
  username:'',
  email:'',
  role:'',

};
pass={
  old:'',
  newp:'',
  confirmp:''
}
value: any;
onFileUpload(event){

}

  isExpanded = true;
  showSubmenu: boolean = false;
  showSubmenu1: boolean = false;
  showSubmenu2: boolean = false;
  showSubmenu3: boolean = false;
  showSubmenu4: boolean = false;
  showSubmenu5: boolean = false;

  isShowing = false;


  isShown: boolean = false ;
  toggleShow(){
    this.isShown=true;
  }
  togglehide(){
    this.isShown=false;
  }

  constructor(private modalService:BsModalService, private userService: UserService, private authService: AuthService, private tokenStorage: TokenStorageService,) {

   }
   mismatch:any;
   mismatch_show:boolean;
  
   match:any;
   match_show:boolean;

   oldpassmessage:any;
   oldpassmessage_show:boolean;
   updatepass()
   {
    this.mismatch_show=false;
    this.match_show=false;
    this.mismatch_show=false;
    this.oldpassmessage_show=false;
    var uname={
      "username":this.userInfo.username
    };
    var merged = Object.assign(this.pass,uname);
    this.authService.oldpassword(this.pass).subscribe(data=>
    {
      console.log(data)
      if(data.success==true)
      {
        if(this.pass.newp===this.pass.confirmp)
        {
          this.authService.updatepassword(this.pass).subscribe(data=>
            {
                this.match=data.message;
                this.match_show=true;
                setTimeout(() => this.match_show = false, 4000);
                this.pass={
                  old:'',
                  newp:'',
                  confirmp:''
                }  
            });
        }
        else
        {
          this.mismatch='Password do not match';
          this.mismatch_show=true;
          setTimeout(() => this.mismatch_show = false, 4000);
          this.pass={
            old:'',
            newp:'',
            confirmp:''
          }
        }
      }
      else
      {
        this.oldpassmessage=data.message;
        this.oldpassmessage_show=true;
        setTimeout(() => this.oldpassmessage_show = false, 4000);
        this.pass={
          old:'',
          newp:'',
          confirmp:''
        }
      }
    })

    // console.log(this.pass);
   }
doupdate(row_obj){
  this.authService.updateprofile(row_obj).subscribe(res =>
    {

      if(res.success)
        console.log("success data updated");
        window.location.reload();
    });

}
upload(row_obj){
  console.log('Hi');
  if(row_obj ! = undefined)
    {
      var fname={};
      var filename='';
   let formData = new FormData();
    for (var i = 0; i < row_obj.upload.length; i++) {
      //console.log(row_obj.upload[0]);
       // console.log(row_obj.upload[0].name);
        formData.append("file", row_obj.upload[i], row_obj.upload[i].name);
       //console.log(formData);
     if(filename=='')
     {
       filename=row_obj.upload[i].name;
     }
     else
      filename=filename+', '+row_obj.upload[i].name;
    //  Object.assign(fname,name);
     }
     fname={
      'files':filename
     }
     var merged = Object.assign(row_obj,fname);
    // console.log(row_obj);
   /*  this.authService.uploadreg_db(row_obj).subscribe(data =>
      {
        if(data.success)
          console.log("success file uploaded");
        else
          console.log(data);
      });*/
      this.authService.uploadreg(formData).subscribe(data =>
      {
        if(data.success)
        {
          this.authService.uploadreg_db(row_obj).subscribe(data =>
            {
              if(data.success)
                console.log("success file uploaded");
              else
                console.log(data);
            });
        }
        else
         {
           console.log(data);
            alert("Some error occured. File may already exist or check file extension");
         }

      }); 
    }
}
AddUser()
{
 // console.log(this.local_data);
 this.authService.addUser(this.local_data).subscribe(
   data=>{
      console.log(data);
   });
}
  ngOnInit() {

    this.userService.getUserBoard().subscribe(
      data => {
        console.log(data);
        this.userInfo = {
          name: data.user.name,
          lname: data.user.lname,
          email: data.user.email,
          username: data.user.username,
          role: data.user.role,
          mobile: data.user.mobile,
          create: data.user.createdAt,
          update: data.user.updatedAt,
          password: data.user.password,
          groupname: data.user.groupname,
          country: data.user.country,
          empid: data.user.empid,
          company: data.user.company
        };
        this.board = data.description;
      },
      error => {
        this.errorMessage = `${error.status}: ${error.error}`;
      }
    );

    // tslint:disable: quotemark
    // tslint:disable: only-arrow-functionsss

    $(".sidebar-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });


    $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
    });



    var dropdown = document.getElementsByClassName("dropdown");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      } else {
      dropdownContent.style.display = "block";
      }
      });
    }
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
  }
  }
  public openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
    }

    imageUrl:string="/assets/pic/avatar.jpg"
    fileUpload: File = null;
    handlefileInput(file: FileList){
      this.fileUpload = file.item(0);
      var reader = new FileReader();
      reader.onload = (event:any)=>{
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(this.fileUpload)

    }
}
