import { Component, OnInit } from '@angular/core';


declare const dropdrag: any;

@Component({
  selector: 'app-drop-and-drag',
  templateUrl: './drop-and-drag.component.html',
  styleUrls: ['./drop-and-drag.component.css']
})
export class DropAndDragComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    dropdrag();
  }

}
