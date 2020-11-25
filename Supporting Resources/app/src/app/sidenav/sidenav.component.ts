import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthServices } from '../authservice';
import { Router } from '@angular/router';
import { hostname } from '../../environments/environment';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit  {

  private roles: string[];
  private authority: string;
  private hostname: string = hostname;

  constructor(private token: TokenStorageService,private router: Router,public auth: AuthServices) { }
  ngOnInit() {


    // tslint:disable: quotemark
    // tslint:disable: only-arrow-functions

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

   $('.outside-sidenav').hover(function(e){
      $(".page-wrapper").removeClass("toggled");
   });

    if (this.token.getToken()) {
      this.roles = this.token.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_AUDITOR') {
          this.authority = 'auditor';
          return false;
        } else if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }

  }
  logout() {
    this.token.signOut();
    this.router.navigateByUrl('/index');
  }
}
