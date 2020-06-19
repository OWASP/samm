import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TokenStorageService } from '../auth/token-storage.service';
import {AuthServicem} from '../services/auth.service';
import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';
import { AuthLoginInfo } from '../auth/login-info';
import { AuthServices } from '../authservice';
import { FormBuilder, Validators } from '@angular/forms';
import { hostname } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthenticationService,AuthServices,AuthServicem]
})
export class HeaderComponent implements OnInit {
  modalRef: BsModalRef;
  credentials: TokenPayload = {
    id: 0,
    username: '',
    mobile_number: null,
    email: '',
    role: '',
    password: ''
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  loginsuccess: boolean;
  message: any = { };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  showSucessMessages: boolean;
  serverErrorMessages: string;
  // tslint:disable-next-line: variable-name
  showSucessMessages_m: boolean;
  showSucessMessagess: boolean;
  // tslint:disable-next-line: variable-name
  showSucessMessagess_m: boolean;
  serverErrorMessagess: string;
  showSucessMessagesss: boolean;
  serverErrorMessagesss: string;
  serverErrorMessagesssreg: string;
  serverErrorMessagessslogin: string;
  showSucessMessage: string;
  pcheck:string;
  constructor(private fb: FormBuilder, private modalService: BsModalService,private auth: AuthenticationService,
              private router: Router, private authm: AuthServicem,
              private authService: AuthService, private tokenStorage: TokenStorageService,private auths: AuthServices) {
                this.form = fb.group({
                  email: ['', [Validators.required, Validators.email]],
                  password: ['', Validators.required]
                });
               }
onSubmit() {
  console.log(this.form);

  this.signupInfo = new SignUpInfo(
    this.form.name,
    this.form.username,
    this.form.email,
    this.form.password,
    this.form.mobile,
    this.form.role);

  this.authService.signUp(this.signupInfo).subscribe(
    data => {
      console.log(data);
      this.isSignedUp = true;
      this.isSignUpFailed = false;
    },
    error => {
      console.log(error);
      this.errorMessage = error.error;
      this.isSignUpFailed = true;
    }
  );
}
onSubmit2() {
  console.log(this.form);

  this.loginInfo = new AuthLoginInfo(
    this.form.username,
    this.form.password);

  this.authService.attemptAuth(this.loginInfo).subscribe(
    data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUsername(data.username);
      this.tokenStorage.saveAuthorities(data.authorities);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
     // this.reloadPage();
     // tslint:disable-next-line:align
      this.auths.sendToken(this.form.value.email);
     // this.loginsuccess =  data.message;
      this.modalRef.hide();
      window.location.href = 'http://'+ hostname +':4208/home';
    },
    error => {
      console.log(error);
      this.errorMessage = error.error.reason;
      this.isLoginFailed = true;
    }
  );
}

// reloadPage() {
 // window.location.reload();
//}
ngOnInit() {
  if (this.tokenStorage.getToken()) {
  this.isLoggedIn = true;
  this.roles = this.tokenStorage.getAuthorities();
}
}


private x;
forgot=
{
emailid:''
};
chng={
password:'',
conpassword:''
};
votp=
{
otp:''
};
onSubmitEmail(form: NgForm)
{
//console.log(form.value);
this.authm.resetpass(form.value).subscribe(data =>
  {
    console.log(data);
    if(data.success){

      this.showSucessMessages = true;
     // setTimeout(() => this.showSucessMessage = false, 50000);

       // this.showSucessMessages = true;
        this.showSucessMessages_m = true;
        //console.log("hi");
   setTimeout(() => this.showSucessMessages_m = false,4000);
   this.resetForm1(form);
          //this.router.navigate(['/login']);
        }
        else {
          this.serverErrorMessages = 'Something went wrong.';
           // this.serverErrorMessages ='Something went wrong';
            //setTimeout(() => this.serverErrorMessages = '', 4000);
        }
    this.x=data.user;
   // console.log(this.x);
  });

}
verifyotp(form: NgForm)
{
//console.log(form.value);
//console.log(this.x);
//.concat


var check={
"email":this.x
};
var merged = Object.assign(form.value,check);
//console.log(merged);
this.authm.verifyotp(form.value).subscribe(data =>
{
 //console.log(data);
  if(data.success){


      this.showSucessMessagess = true;
      this.showSucessMessagess_m = true;
      //console.log("hi");
 setTimeout(() => this.showSucessMessagess_m = false, 4000);
     // this.router.navigate(['/login']);
     this.resetForm2(form);
     this.x=data.user;
      }
      else {

          this.serverErrorMessagess = 'OTP didn\'t match';
          setTimeout(() => this.serverErrorMessagess = '', 4000);
          return false;
      }

});
}
changepass(form)
{
//console.log(form.value.password);
//console.log(form.value.conpassword);
if(form.value.password==form.value.conpassword)
// console.log("hiii");
{
// var merged = Object.assign(form.value,this.x);
/* if(!this.validateService.validatePass(form.value)){
this.serverErrorMessagesss = 'Password: atleast 1 special character, 1 numerical and 8 character length';
setTimeout(() => this.serverErrorMessagesss = '', 4000);
return false;
}
*/
//console.log(this.x);
var check={
"email":this.x
};
var merged = Object.assign(form.value,check);
this.authm.changepass(form.value).subscribe(data =>
{
// console.log(data);
  if(data.success)
  {
    this.showSucessMessagesss = true;
    //console.log("hi");

   // setTimeout(() => this.showSucessMessagesss = false, 20000);
    //this.router.navigate(['/login']);
  }
  else
  {
    this.serverErrorMessagesss = 'Something went wrong';
    setTimeout(() => this.serverErrorMessagesss = '', 4000);
  }
});
}
else
{
this.pcheck = 'Password don\'t match';
    setTimeout(() => this.pcheck = '', 4000);
}

}


resetForm1(form: NgForm) {
this.forgot = {
  emailid: ''
};
form.resetForm();
this.serverErrorMessages = '';
}
resetForm2(form: NgForm) {
this.votp = {
  otp: ''
};
form.resetForm();
//this.serverErrorMessagess = '';
}
onSubmitlogin() {
  this.auth.login(this.credentials).subscribe(
    () => {
      this.router.navigateByUrl('/iso_home');
    },
    err => {
      console.error(err);
      this.serverErrorMessagesss = 'Invalid Username or password';
      setTimeout(() => this.serverErrorMessagesss = '', 4000);
     // alert('user does not exist');
    }
  );
}
onSubmitreg() {
  this.auth.register(this.credentials).subscribe(
    () => {
      this.showSucessMessagesss = true;
      this.showSucessMessage = 'Account Created Successfully';
      // this.router.navigateByUrl('/profile');
     // alert('account created successfully');
    },
    err => {
      console.log('haii');
      console.error(err);
      this.serverErrorMessagesss = 'duplicate email adress found';
      setTimeout(() => this.serverErrorMessagesss = '', 4000);
      alert('duplicate email adress found');
    }
  );
}
public openModals(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}

public openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
  document.getElementById('but').style.display = 'none';
  document.getElementById('bod1').style.display = 'none';
  document.getElementById('Icon').style.display = 'none';
  document.getElementById('foot1').style.display = 'none';
  document.getElementById('heade').style.display = 'none';
}


public openModa(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
  document.getElementById('foot').style.display = 'none';
  document.getElementById('btn').style.display = 'none';
  document.getElementById('bod').style.display = 'none';
  document.getElementById('icon').style.display = 'none';

  document.getElementById('head').style.display = 'none';
}
public openModalotp(template: TemplateRef<any>){
  this.modalRef = this.modalService.show(template);
  document.getElementById("foot1").style.display='none';
  document.getElementById("but1").style.display='none';
  document.getElementById("bod1").style.display='none';
  document.getElementById("Icone").style.display='none';
  document.getElementById("heade").style.display='none';
}

public openModalsss(template: TemplateRef<any>){
  this.modalRef = this.modalService.show(template);
  document.getElementById("footmm").style.display='none';
  document.getElementById("butmm").style.display='none';
  document.getElementById("bodmm").style.display='none';
  document.getElementById("Iconmm").style.display='none';
  document.getElementById("headmm").style.display='none';
}
public openModalz(template: TemplateRef<any>){
  this.modalRef = this.modalService.show(template);
 document.getElementById("footz").style.display='none';
 document.getElementById("butz").style.display='none';
  document.getElementById("bodz").style.display='none';
  document.getElementById("Iconz").style.display='none';
  document.getElementById("headz").style.display='none';
  document.getElementById("successmsg1").style.display='none';
  document.getElementById("successmsg2").style.display='none';
 this.showSucessMessagesss=false;
 /*this.chng={
  password:''
};*/


}



}
