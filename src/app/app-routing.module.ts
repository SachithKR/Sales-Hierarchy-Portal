import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { AddDealerDetailsComponent } from './add-dealer-details/add-dealer-details.component'; 
import { EditDealerDetailsComponent } from './edit-dealer-details/edit-dealer-details.component';
import { HomeComponent } from './home/home.component';
import { MovingImageComponent } from './moving-image/moving-image.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
{path:'',redirectTo:'/login',pathMatch:'full'},
{path:'login',component:LoginComponent,title:'Login'},
{path:'main-page',component:MainPageComponent,title:'Home Page'},
{path:'register',component:RegisterComponent,title:'Register'},
{path:'dealer-home',component:HomeComponent,title:'Main page'},
{path:'dealer-viewlist',component:ViewlistComponent,title:'ViewList'},
{path:'dealer-add',component:AddDealerDetailsComponent,title:'AddDealer'},
{path:'dealer-edit/:id',component:EditDealerDetailsComponent,title:'EditDealer'},
{path:'moving-images',component:MovingImageComponent,title:'Moving Images'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
