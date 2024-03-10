import { CartService } from 'src/app/shared/service/cart.service';

import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/shared/interface/product';

import { EcomdataService } from 'src/app/shared/service/ecomdata.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private _EcomdataService: EcomdataService,
    private _CartService: CartService,
    private _ToastrService:ToastrService,
  ) {}

  addcart(id: number) {
    this._CartService.AddCcart(id).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message ,'Fresh Cart')
      },
      error: (err) => {},
    });
  }

  catagoriesdata: any[] = [];

  searchtearm: string = '';
  prouduct: Product[] = [];
  catagoriesoptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 7,
      },
    },
    nav: true,
  };
  mainslider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,

    navSpeed: 700,

    items: 1,
  };

  ngOnInit(): void {
    // get prouduct--------------------------
    this._EcomdataService.getProduct().subscribe({
      next: (response) => {
        // console.log(response);
        this.prouduct = response.data;
      },
    });

    //get catagory
    this._EcomdataService.getcatagories().subscribe({
      next: (response) => {
        this.catagoriesdata = response.data;
        console.log(this.catagoriesdata);
      },
    });
  }
}
