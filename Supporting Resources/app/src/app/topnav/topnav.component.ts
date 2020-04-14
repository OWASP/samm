import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';
import { AuthServices } from '../authservice';
import { hostname } from '../../environments/environment';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  // tslint:disable: only-arrow-functions
  // tslint:disable: quotemark
  info: any;

  constructor(private token: TokenStorageService,private router: Router,public auth: AuthServices) { }

  ngOnInit() {

    (function($) { // Begin jQuery
      $(function() { // DOM ready
        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function(e) {
          $(this).siblings('.nav-dropdown').toggle();
          // Close one dropdown when selecting another
          $('.nav-dropdown').not($(this).siblings()).hide();
          e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function() {
          $('.nav-dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function() {
          $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function() {
          this.classList.toggle('active');
        });
      }); // end DOM ready
    })(jQuery); // end jQuery
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
}

logout() {
  this.token.signOut();
  this.router.navigateByUrl('/index');
}
profile() {
  this.router.navigateByUrl('/userprofile');
}
home() {
  window.location.href = "http://"+ hostname +":4208/home";
}
}
