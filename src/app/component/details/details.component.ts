import { OwlOptions } from './../../../../node_modules/ngx-owl-carousel-o/lib/models/owl-options.model.d';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/shared/interface/product';
import { CartService } from 'src/app/shared/service/cart.service';
import { EcomdataService } from 'src/app/shared/service/ecomdata.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(private _ActivatedRoute:ActivatedRoute , private _EcomdataService:EcomdataService ,private _CartService:CartService){}

  addcart(id: number) {
    this._CartService.AddCcart(id).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {},
    });
  }




  slider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
  autoplay:true,
    navSpeed: 700,
    navText:[" "," "],
     nav:false,

    items:1,

  }
  dataDetails:Product={} as Product;
  ngOnInit(): void {
   this._ActivatedRoute.paramMap.subscribe({
    next:(prams)=>{
      // prams.get(id)
   let prouductId:any=prams.get('id')
   this._EcomdataService.getidofdata(prouductId).subscribe({
    next:(Response)=>{
      // console.log(Response.data);

  this.dataDetails=Response.data;
    console.log(this.dataDetails);

    }
   })

    }
   })

  }

}
