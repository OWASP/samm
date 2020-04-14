import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-flip',
  templateUrl: './flip.component.html',
  styleUrls: ['./flip.component.scss']
})
export class FlipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
