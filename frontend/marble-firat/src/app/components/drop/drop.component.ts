import { Component, OnInit } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ToastrService } from 'ngx-toastr';

declare const dropdrag: any;

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css'],
})
export class DropComponent implements OnInit {
  constructor(
    private imageCompress: NgxImageCompressService,
    private toastrService: ToastrService
  ) {}

  file: any;
  localUrl: any;
  isHidden: boolean | undefined;

  selectFile(event: any) {
    var fileName: any;
    this.file = event.target.files[0];
    fileName = this.file['name'];
    if (
      event.target.files &&
      event.target.files[0] &&
      event.target.files[0].type.startsWith('image/')
    ) {
      this.isHidden = true;
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    } else this.toastrService.error('Lütfen geçerli bir dosya seçiniz');
  }
  
  
  ngOnInit(): void {
    dropdrag();
    this.toastrService.info(
      'Mermer Bloklarınızın Kalite Kontrolü için lütfen görüntü seçiniz',
      'Hakkında'
    );
  }
}

