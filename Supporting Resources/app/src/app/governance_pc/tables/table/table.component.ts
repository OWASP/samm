import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { MatDialog, MatTable } from '@angular/material';
import { process, GroupDescriptor } from '@progress/kendo-data-query';
import { employees } from './employees';
import { images } from './images';
import {AuthService} from '../../services/auth.service';
 import { FileUploader } from 'ng2-file-upload';
 import { environment } from '../../../../environments/environment';
 import { GPCPopupComponent } from '../../popup/popup.component';

 export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  auditor: string;
  section: string;
}
const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
    selector: 'GPC-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    providers: [AuthService]
})
export class GPCTableComponent implements OnInit {
  private roles: string[];
  private authority: string;

 x: {};
  constructor(private modalService: NgbModal, public dialog: MatDialog, private authService: AuthService) {}
  public uploader:FileUploader = new FileUploader({url:''+environment.apiBaseUrl+'/upload'});



  // tslint:disable: quotemark

    @ViewChild(DataBindingDirective, {static: true}) dataBinding: DataBindingDirective;
    public gridData: any[] = employees;
    public gridView: any[];
    public groups: GroupDescriptor[] = [{ field: 'Stream' }];

    public mySelection: string[] = [];




  closeResult: string;

    public ngOnInit(): void {
      this.loadtab();
     // alert();
    }

    public onFilter(inputValue: string): void {
        this.gridView = process(this.gridData, {
            filter: {
              logic: "or",
              filters: [
                  {
                      field: 'id',
                      operator: 'contains',
                      value: inputValue
                  },
                  {
                      field: 'quests',
                      operator: 'contains',
                      value: inputValue
                  },
                  {
                    field: 'details',
                    operator: 'contains',
                    value: inputValue
                },
                  {
                      field: 'Stream',
                      operator: 'contains',
                      value: inputValue
                  },
                  {
                      field: 'budget',
                      operator: 'contains',
                      value: inputValue
                  },
                  {
                      field: 'phone',
                      operator: 'contains',
                      value: inputValue
                  },
                  {
                      field: 'address',
                      operator: 'contains',
                      value: inputValue
                  }
                  ,
                  {
                      field: 'gcomment',
                      operator: 'contains',
                      value: inputValue
                  },
                  {
                    field: 'user',
                    operator: 'contains',
                    value: inputValue
                },
                {
                  field: 'auditor',
                  operator: 'contains',
                  value: inputValue
              },
              {
                field: 'commentor',
                operator: 'contains',
                value: inputValue
            }
              ],
            }
        }).data;

        this.dataBinding.skip = 0;
    }

    private photoURL(dataItem: any): string {
        const code: string = dataItem.img_id + dataItem.gender;
        const image: any = images;

        return image[code];
    }

    private flagURL(dataItem: any): string {
        const code: string = dataItem.country;
        const image: any = images;

        return image[code];
    }

  open(content: any) {
 //   alert('hi');
    console.log(content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'}).result.then((result) => {
     console.log(result.data);
      this.closeResult = `Closed with: ${result}`;
      if(result.event == 'Update'){
        this.updateRowData(result.data);
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
 /* open(action,obj,content: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '500px',
      height: '500px',

      data:obj
    });
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result.event == 'Update'){
        this.updateRowData(result.data);
      }
    });
  } */
  loadtab() {
    //console.log('Loading');
    // alert('hi');
    this.authService.governance_policy_table().subscribe(data => {
         if (data.success) {
           console.log(data);
           this.x = data.values;
           const data1 = this.gridData;
           for (const stat of  data.all) {

            var x=stat.description.split('\n');
            let model = {id: stat.vsamm_id, Stream: stat.stream, quests: stat.question,details:x,score:stat.status, answer: stat.answer, gcomment:stat.comment, user:stat.user, auditor:stat.auditor, commentor:stat.commentor};
            const d = this.gridData;
            d.push(model);

            this.gridView = d;
            }
          // data1.push(this.x[0].id);
          // this.displayedColumns=['pos']
          // console.log(this.x);
          // this.dataSource=[{position: 1, name: 'Have developers been given high-level security awareness training?', weight: 1.0079, symbol: 'H',auditor:'Admin'}];
        } else {
           console.log(data);
         }
      });
  }



  updateRowData(row_obj){
    var check={
      "groupname":'Governance',
      "secpractice":'Policy & Compliance'
    };
        var merged = Object.assign(row_obj,check);

    console.log(row_obj);
    this.authService.edit_table(row_obj).subscribe(data =>
      {
  
        if(data.success)
        {
          console.log("success data updated");
  
       //window.location.reload();
     
          this.authService.firstgraph().subscribe(data=>{
            if(data.success)
            {
              var merged = Object.assign(data,check);
              this.authService.edit_history_score_implement(data).subscribe(data=>
              {
                if(data.success)
                {
                    console.log("success history data updated");
                    window.location.reload();
                }
  
              })
            }
          })
        }
    });

    if(row_obj.upload!=undefined)
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
      this.authService.upload_files(formData).subscribe(data =>
      {
        if(data.success)
        {
          this.authService.upload_path_db(row_obj).subscribe(data =>
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
            //alert("Some error occured. File may already exist or check file extension");
         }

      });
    }

  }
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(GPCPopupComponent, {
      width: '1000px',
      height: '600px',

      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result.event == 'Update'){
        console.log(result.data);
       this.updateRowData(result.data);
      }
    });
  }
  update()
  {
  //  console.log(this.localdata);
  }

}
