import { Component, Inject } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-auth-button',
  template: '<button (click)="auth.loginWithRedirect()">Log in</button>',
  
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent {

  constructor(@Inject(DOCUMENT) public document: Document,public auth: AuthService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    
  }

}
