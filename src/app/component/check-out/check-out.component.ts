import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/service/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {
   constructor(private _FormBuilder:FormBuilder , private _ActivatedRoute:ActivatedRoute ,private _CartService:CartService){}
  cartId:any='';

   checkout:FormGroup=this._FormBuilder.group({
      details:[''],
      phone:[''],
      city:['']
    })
  handle():void{
    console.log(this.checkout.value );
     this._CartService.checkout(this.cartId,this.checkout.value  ).subscribe({
      next:( response)=>{
         if(response.status == "success"){
       window.open(response.session.url , '_self')
      console.log(response)
         }

      }
     })

  }
   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._ActivatedRoute.paramMap.subscribe({
      next:(prama)=>{
   console.log(prama.get('id'));
  this.cartId=prama.get('id');

      }
    })
   }
}

