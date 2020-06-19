import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {SelectionModel} from '@angular/cdk/collections';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatTable } from '@angular/material';
import { DialogNavComponent } from '../dialog-nav/dialog-nav.component';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {DialogDesComponentComponent } from '../dialog-des-component/dialog-des-component.component';
import { UserIdleService } from 'angular-user-idle';
import { TokenStorageService } from '../../auth/token-storage.service';
import { NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router } from '@angular/router';

export interface PeriodicElement {
  Name: string;
  Username: string;
  Email: string;
  Role: string;
  GroupName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private roles: string[];
  private authority: string;
  all:any;
  email = new FormControl('', [Validators.required, Validators.email]);
  x:any;
  pname={
    name:''};
  local_data={
    firstname:'',
    lastname:'',
    username:'',
    password:'',
    empid:'',
    groupname:'',
    phone:'',
    country:'',
    company:'',
    role:''
  };
  firstname=new FormControl();
  lastname=new FormControl();
  username=new FormControl();
  password=new FormControl();
  empid=new FormControl();
  groupname=new FormControl();
  phone=new FormControl();
  country=new FormControl();
  company=new FormControl();
  role=new FormControl();
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  modalRef:BsModalRef;
  displayedColumns: string[] = ['select','Name','Username','Email','Role','GroupName','action'];
  data = Object.assign( ELEMENT_DATA);
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  dataSource = new MatTableDataSource<PeriodicElement>(this.data);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(private modalService:BsModalService,public dialog: MatDialog,private router: Router,
    private authService: AuthService,private userIdle: UserIdleService,private tokenStorage: TokenStorageService) { }



  loadtab()
  {
    //alert('hi');
    this.authService.getdetails().subscribe(data =>
      {
         if(data.success)
         {
           //console.log(data);
           this.x=data.values;
           const data1=this.dataSource.data;
          for (let stat of  data.values)
          {

             let model={Name: stat.firstname, Username: stat.username, Email:stat.email, Role: stat.role,GroupName:stat.groupname};
              const d=this.dataSource.data;
              d.push(model);

              this.dataSource.data=d;
            }
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



  addpname()
  {
    //alert(this.pname);
    this.authService.addpname(this.pname).subscribe(data =>
      {
        if(data.success)
         {
            console.log("success");
         window.location.reload();
         }
      });
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  removeSelectedRows() {
    this.selection.selected.forEach(item => {
     let index: number = this.data.findIndex(d => d === item);
     //console.log(this.data);
     var x=this.data.findIndex(d => d === item);
     //console.log(this.data[x]);
     this.authService.deleteselect(this.data[x]).subscribe(data =>
      {
         if(data.success)
         {
         }
         else
          console.log(data);
      });
     this.dataSource.data.splice(index,1);

     this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource.data);
   });
   this.selection = new SelectionModel<PeriodicElement>(true, []);
 }






  isExpanded = false;
  showSubmenu: boolean = false;
  showSubmenu1: boolean = false;
  showSubmenu2: boolean = false;
  showSubmenu3: boolean = false;
  showSubmenu4: boolean = false;
  showSubmenu5: boolean = false;

  isShowing = false;



   mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  delete(obj)
  {
    this.all=obj;
   // console.log(this.all);
  }
  deletecol()
  {
   // console.log(this.all);
   this.authService.deletecol(this.all).subscribe(data =>
    {
      if(data.success)
       {
          console.log("success");
       window.location.reload();
       }
    });
  }

  createnew()
  {
    console.log(this.local_data);
    this.authService.createuser(this.local_data).subscribe(data =>
      {
        if(data.success)
         {
            console.log("success");
         window.location.reload();
         }
      });
  }
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogNavComponent, {
      width: '760px',

      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
     if(result.event == 'Update'){
        this.updateRowData(result.data);
        //console.log(result.data);
      }
    });
  }

  openDialogDes(action,obj) {
    obj.action = action;
   // console.log(obj);
    const dialogRef = this.dialog.open(DialogDesComponentComponent, {
      width: '760px',

      data:obj
    });
  }


  /*addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      name:row_obj.name
    });
    this.table.renderRows();

  }*/
  updateRowData(row_obj){
    //console.log(row_obj);

    this.authService.updateuser(row_obj).subscribe(data =>
     {
       if(data.success)
        {
           console.log("success");
        window.location.reload();
        }
     });

  }
  deleteRowData(row_obj){
   /* this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });*/
  }


  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role != 'ROLE_ADMIN' && role != 'ROLE_AUDITOR') {
          this.router.navigate(['/index']);
        }
    });
  }
this.loadtab();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

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
// tslint:disable: quotemark
    // tslint:disable: only-arrow-functions
     //Start watching for user inactivity.
     this.userIdle.startWatching();

     // Start watching when user idle is starting.
     this.userIdle.onTimerStart().subscribe(count => console.log(count));

     // Start watch when time is up.
     this.userIdle.onTimeout().subscribe(() => console.log('Time is up!'));

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



  }
  stop() {
    this.userIdle.stopTimer();
  }

  stopWatching() {
    this.userIdle.stopWatching();
  }

  startWatching() {
    this.userIdle.startWatching();
  }

  restart() {
    this.userIdle.resetTimer();
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }



  public openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  public openModals(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  public openModa(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
  public openMod(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
  public open(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }


}
