import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './component/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './component/auth-layout/auth-layout.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { BrandsComponent } from './component/brands/brands.component';
import { CatagoriesComponent } from './component/catagories/catagories.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { authGuard } from './shared/guards/auth.guard';
import { ProuductsComponent } from './component/prouducts/prouducts.component';
import { DetailsComponent } from './component/details/details.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { NotfoundComponent } from './component/notfound/notfound.component';

const routes: Routes = [
  { path:'' ,
  canActivate:[authGuard],
  component:BlankLayoutComponent , children:[
    {path:'',redirectTo:'home' ,pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path:'cart',component:CartComponent},
    {path:'checkOut/:id', component:CheckOutComponent} ,
    {path:'brands',component:BrandsComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'catagories',component:CatagoriesComponent},
    {path:'product',component:ProuductsComponent}
  ] },
  { path:'' ,component:AuthLayoutComponent , children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
  ]
},
{ path:'**', component:NotfoundComponent, title:'404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
