import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { AddDealerDetailsComponent } from './add-dealer-details/add-dealer-details.component';
import { EditDealerDetailsComponent } from './edit-dealer-details/edit-dealer-details.component';
import { MovingImageComponent } from './moving-image/moving-image.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ViewlistComponent,
    MovingImageComponent,
    AddDealerDetailsComponent,
    EditDealerDetailsComponent,
    MovingImageComponent,
    FooterComponent,
    MainPageComponent,
    RegisterComponent,
    ConfirmDialogComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
