import {Component, OnInit} from '@angular/core';
import {NgbCalendar, NgbDate, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  DateVariableStart = new Date(2018, 6, 1);
  DateVariableEnd = new Date();
  startDate: FormControl;
  endDate: FormControl;
  displayFilterFlag: boolean;
  uname: string;
  usernameOptions: any;
  group: string;
  groupOptions: any;
  securityPracticeOptions: any;
  securityPractice: any;
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  isExpanded = false;
  showSubmenu = false;
  showSubmenu1 = false;
  showSubmenu2 = false;
  showSubmenu3 = false;
  showSubmenu4 = false;
  showSubmenu5 = false;
  isShowing = false;
  public showExtraFilters = false;
  public show = true;
  public buttonName: any = 'Filter';
  score: string;
  ScoreOptions: any;
  bindSelectOptions: {
    uname: any,
    group: any,
    score: any,
    fromDate: any,
    toDate: any,
    security_practice: any
  };
  private ShowMoreFiltersMatToolTipText: string="Show extra filters";
  private ShowExtraFiltersicon: string='expand_more';
  panelOpenState: boolean=false;

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, private router: Router) {
    //console.log("End date",this.DateVariableEnd);
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    this.usernameOptions = [{name: 'Admin', value: 'admin'}, {name: 'Auditor', value: 'Auditor'}, {
      name: 'User',
      value: 'User'
    }];
    this.groupOptions = [{name: 'Governance', value: 'Governance'}, {name: 'Design', value: 'Design'},
    {name: 'Implementation', value: 'Implementation'},
    {name: 'Verification', value: 'Verification'},
     {name: 'Operations', value: 'Operations'},];
    this.ScoreOptions = [{name: 'Yes', value: 1}, {name: 'Implementing', value: 0.5}, {
      name: 'No',
      value: 0
    }, {name: 'N/A', value: -1}];
  }

  toggle() {
    this.bindSelectOptions = {
      uname: this.uname,
      group: this.group,
      score: this.score,
      fromDate: this.startDate.value._i,
      toDate: this.endDate.value._i,
      security_practice: this.securityPractice
    };
    //console.log(this.bindSelectOptions);
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) {
      this.buttonName = 'Filter';
    } else {
      this.buttonName = 'Filter';
    }
    //console.log("NGBDATE", this.fromDate);
    //console.log("MATDATE", this.startDate.value._i);
  }

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

  openhome() {
    this.router.navigateByUrl('/home').then(r => {
    });
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  ngOnInit() {
    this.startDate = new FormControl(this.DateVariableStart);
    this.endDate = new FormControl(this.DateVariableEnd);
    let date = new Date();
    this.startDate.value._i = {year: 2018, month: 6, date: 1};
    this.endDate.value._i = {year: date.getFullYear(), month: date.getMonth() + 1, date: date.getDate()};
    this.fromDate.day = 1;
    this.fromDate.month = 7;
    this.fromDate.year = 2019;
    this.displayFilterFlag = false;
    const dropdown = document.getElementsByClassName('dropdown');
    let i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function () {
        this.classList.toggle('active');
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
      });
    }
  }

  selectGroupOptions() {
    this.displayFilterFlag = true;
    if (this.group === 'Governance') {
      this.securityPracticeOptions = [{
        name: 'Strategy and Metrics',
        value: 'Strategy and Metrics'
      }, {name: 'Policy and Compliance', value: 'Policy and Compliance'}, {
        name: 'Education and Guidance',
        value: 'Education and Guidance'
      }];
    }
    if (this.group === 'Verification') {
      this.securityPracticeOptions = [{name: 'Architecture Assessment', value: 'Architecture Assessment'},
        {name: 'Requirements Driven Testing', value: 'Requirements Driven Testing'},
        {name: 'Security Testing', value: 'Security Testing'}];
    }
    if (this.group === 'Implementation') {
      this.securityPracticeOptions = [{name: 'Secure Deployment', value: 'Secure Deployment'},
        {name: 'Secure Build', value: 'Secure Build'},
        {name: 'Defect Management', value: 'Defect Management'},];
    }
    if (this.group === 'Operations') {
      this.securityPracticeOptions = [{name: 'Incident Management', value: 'Incident Management'},
        {name: 'Environment Management', value: 'Environment Management'},
        {name: 'Operational Management', value: 'Operational Management'}];
    }
    if (this.group === 'Design') {
      this.securityPracticeOptions = [
        {name: 'Threat Assessment', value: 'Threat Assessment'},
        {name: 'Security Requirements', value: 'Security Requirements'},
        {name: 'Secure Architecture', value: 'Secure Architecture'},];
    }
    this.showExtraFilters = !this.showExtraFilters;
    //this.toggle();
    if (this.showExtraFilters == true) {
      this.ShowMoreFiltersMatToolTipText = "Hide extra filters"
      this.ShowExtraFiltersicon='expand_less'
    } else {
      this.ShowMoreFiltersMatToolTipText = "Show extra filters"
      this.ShowExtraFiltersicon='expand_more'
    }
  }
}


