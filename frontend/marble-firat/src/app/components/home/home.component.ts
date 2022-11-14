import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  isHidden: boolean | undefined;

  constructor(private toastrService:ToastrService) {}


  ngOnInit(): void {
    
    this.toastrService.success("Hoşgeldiniz")
    // this.toastrService.info("","Hakkında")
    

  }
  
}
