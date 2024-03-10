import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClient, HttpClientModule}from '@angular/common/http'
import { AuthService } from './shared/service/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { ProuductsComponent } from './component/prouducts/prouducts.component';
import { BrandsComponent } from './component/brands/brands.component';
import { CatagoriesComponent } from './component/catagories/catagories.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { DetailsComponent } from './component/details/details.component';
import { AuthLayoutComponent } from './component/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './component/blank-layout/blank-layout.component';
import { NavAuthComponent } from './component/nav-auth/nav-auth.component';
import { NavBlankComponent } from './component/nav-blank/nav-blank.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SearchPipe } from './search.pipe';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { AllordersComponent } from './component/allorders/allorders.component';
import { NotfoundComponent } from './component/notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProuductsComponent,
    BrandsComponent,
    CatagoriesComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,

    DetailsComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    NavAuthComponent,
    NavBlankComponent,

    SearchPipe,
     CheckOutComponent,
     AllordersComponent,
     NotfoundComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),


  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
