import { Component, Inject, OnInit } from '@angular/core';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth0',
  templateUrl: './auth0.component.html',
  styleUrls: ['./auth0.component.css']
})
export class Auth0Component implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }

  ngOnInit(): void {
  }

}
