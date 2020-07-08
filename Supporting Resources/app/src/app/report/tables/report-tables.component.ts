import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTable, MatTableDataSource} from '@angular/material';
// import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import {AuthService} from '../services/auth.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {NgControl} from '@angular/forms';
import {faFileExcel, faFilePdf} from '@fortawesome/free-solid-svg-icons';
import { hostname } from '../../../environments/environment';

/*----------------declare variable---------------------------*/
export interface PeriodicElement {
  id: string;
  question: string;
  groupname: string;
  secpractice: string;
  score: string;
  commentor: string;
  created: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'report-tables',
  templateUrl: './report-tables.component.html',
  styleUrls: ['./report-tables.component.scss']
})

export class RETablesComponent implements OnInit {
  faFileExcel = faFileExcel;
  faFilePdf = faFilePdf;
  @Input() select: any;
  question: {};
  user: {};
  auditor: {};
  id: {};
  all: {};
  status: {};
  localdata = {
    commentor: '',
    groupname: '',
    secpractice: '',
    score: '',
    created: '',
    question: '',
    qoid: '',
    qoname: '',
    id: ''
  };
  x: {};
  modalRef: BsModalRef;
  displayedColumns: string[] = ['id', 'question', 'groupname', 'secpractice', 'score', 'commentor', 'created'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  ngControl: NgControl;
  data_filtered:any=[];
  /*
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(  DialogBoxComponent , {
      width: '1860px',
      height: '760px',

      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result.event == 'Update'){
        this.updateRowData(result.data);
      }
    });
  } */

  constructor(public dialog: MatDialog, private authService: AuthService, private modalService: BsModalService) {

  }
  downloadPdf(){
    //console.log(this.data_filtered);
   // console.log(this.filtered);
   var f=this.select;
  if (f==undefined)
  {
    f={
      undefined:'undefined'
    }
  }
   f=JSON.stringify(f);
   /*f= f.replace('[','');
   f= f.replace(']','');
   f='{'+f+'}';*/
 //console.log(f); 
 
 //  console.log(this.data_filtered[0]);
       // if(data.success)
       let url='http://'+ hostname +':3000/api/reportPdf_re?val='+f;
       console.log(url);
       window.open(url);
         // console.log(data);
         this.data_filtered=[];
   
   
  }
  reportdata() {

    const reset: PeriodicElement[] = [];
    this.dataSource = new MatTableDataSource(reset);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.authService.reportdata(this.select).subscribe(data => {
      if (data.success) {
        // console.log(data);
        this.x = data.idfilterall;
        const data1 = this.dataSource.data;
        for (const stat of data.idfilterall) {

          let scname;
          // console.log(stat.id);
          if (stat.score === 0) {
            scname = 'No';
          } else if (stat.score === 1) {
            scname = 'Yes';
          } else if (stat.score === 0.5) {
            scname = 'Implementing';
          } else if (stat.score === -1) {
            scname = 'N/A';
          }
          const model = {
            id: stat.id,
            question: stat.question,
            groupname: stat.groupname,
            secpractice: stat.secpractice,
            score: stat.score,
            commentor: stat.commentor,
            created: stat.created
          };
          const d = this.dataSource.data;
          d.push(model);
          this.data_filtered.push(model);
          this.dataSource.data = d;
        }
      }
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.reportdata();
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }


  update() {
    console.log(this.localdata);
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  download() {
    let url = 'http://'+ hostname +':3000/api/reportexcel'
    window.open(url);
  }
  /*
  downloadPdf(){
    let url='http://localhost:3000/api/reportPdf'
    window.open(url);
  }*/
}
