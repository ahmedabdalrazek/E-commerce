import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  header: any = {Token:localStorage.getItem('eToken')};
  constructor(private _HttpClient: HttpClient) {}
  AddCcart(prouductId: number): Observable<any> {
    return this._HttpClient.post(
      'https://route-ecommerce.onrender.com/api/v1/cart',
     {productId:prouductId},

     { headers:this.header}
    );
  }
   getUserCart():Observable <any>
   {
    return this._HttpClient.get( ` https://route-ecommerce.onrender.com/api/v1/cart`,
    {
      headers: this.header
    })
   }
    removeitemfromcart(prouductid:string):Observable <any>
    {
      return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${prouductid}`,
      {
        headers :this.header
      })
    }
    updateitemfromcart(prouductid:string,newcount:number):Observable <any>
    {
      return this._HttpClient.put(`https://route-ecommerce.onrender.com/api/v1/cart/${prouductid}`,
     {
          count :newcount
     },
     {
      headers :this.header
    })
    }
     checkout(cartid:string , userdata:object):Observable <any>
     {
        return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartid}?url=http://localhost:4200`,
          { shippingAddress:userdata}   ,
          {
            headers:this.header
          }
        )
     }
}
