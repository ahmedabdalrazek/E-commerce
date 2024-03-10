import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';


@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent {
   constructor(private _Router:Router){}
  logoutuser():void{
    localStorage.removeItem('eToken');
   this._Router.navigate(['/login']);


  }
}
