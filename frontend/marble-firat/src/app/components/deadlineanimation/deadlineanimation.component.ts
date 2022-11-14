import { Component, OnInit } from '@angular/core';
declare const deadlineMain:any


@Component({
  selector: 'app-deadlineanimation',
  templateUrl: './deadlineanimation.component.html',
  styleUrls: ['./deadlineanimation.component.css']
})
export class DeadlineanimationComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    deadlineMain();
  }

}
