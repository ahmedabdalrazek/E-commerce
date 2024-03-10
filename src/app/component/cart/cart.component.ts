import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { count } from 'rxjs';
import { CartService } from 'src/app/shared/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private _CartService: CartService) {}
  changecount( id:string,newcount:number){
   if( newcount > 0){
    this._CartService.updateitemfromcart(id,newcount).subscribe({
      next:(Response)=>{
console.log(Response);
   this.cartdata=Response.data

      },
      error:( err)=>{
        console.log(err);

      }
    })
   }

  }




  removeitem(id:string){
    this._CartService.removeitemfromcart(id).subscribe({
      next:(response)=>{
this.cartdata=response.data

      },
      error:(err)=>{
console.log(err);

      }
    })

  }
  cartdata: any = {};
  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next: (response) => {
        console.log(response.data);
        this.cartdata=response.data
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
