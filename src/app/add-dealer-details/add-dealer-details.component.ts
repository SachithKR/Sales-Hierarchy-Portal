import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dealer-details',
  templateUrl: './add-dealer-details.component.html',
  styleUrls: ['./add-dealer-details.component.css']
})
export class AddDealerDetailsComponent {
  // selectedOption = new FormControl('');
  dealerForm! : FormGroup;

  dealerDetails: any;
  data: any;
  status : string = "";

  DealerCode: number | undefined;
  DealerName: string = "";
  DealerEmailAddress : string = "";
  DealerContactNumber :number | undefined;
  TMRole : string = "";
  TMName: string = "";
  TMEmailAddress: string = "";
  TMPhoneNumber: number | undefined;
  TMUserName: string = "";
  AMRole: string = "";
  AMName: string = "";
  AMEmailAddress: string = "";
  AMPhoneNumber : number | undefined;
  AMUserName : string = "";
  NSMRole: string = "";
  NSMName : string = "";
  NSMEmailAddress: string = "";
  NSMPhoneNumber: number | undefined;
  NSMUserName : string = "";
  NSM1Name : string = "";
  NSM1EmailAddress: string = "";
  NSM1PhoneNumber: number | undefined;
  NSM1UserName: string = "";
  VPRole: string = "";
  VPName: string = "";
  VPEmailAddress : string = "";
  VPPhoneNumber : number | undefined;
  VPUserName : string = "";
  VP1Name : string = "";
  VP1EmailAddress : string = "";
  VP1PhoneNumber: number | undefined;
  VP1UserName : string = "";
  VP2Name : string = "";
  VP2EmailAddress : string = "";
  VP2PhoneNumber: number | undefined;
  VP2UserName : string = "";
  HORole: string = "";
  HOName : string = "";
  HOEmailAddress : string = "";
  HOPhoneNumber: number | undefined;
  HOUserName : string = "";
  id :number | undefined;



  userdetails: Array<any> = [];
  

  searchTerm: string = "";
  

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private router: Router,private formBuilder: FormBuilder) { }  // Inject MatSnackBar

  getvalue (f:FormControl){
    console.log(f);

  }

  AddDealer() {
    var token = localStorage.getItem('token') ?? '';
    var headers = new HttpHeaders({
      'token': token
    });

    this.userdetails.push({
      DealerCode: this.DealerCode,
      DealerName: this.DealerName,
      DealerEmailAddress: this.DealerEmailAddress,
      DealerContactNumber: this.DealerContactNumber,
      TMRole: this.TMRole,
      TMName: this.TMName,
      TMEmailAddress: this.TMEmailAddress,
      TMPhoneNumber: this.TMPhoneNumber,
      TMUserName: this.TMUserName,
      AMRole: this.AMRole,
      AMName: this.AMName,
      AMEmailAddress: this.AMEmailAddress,
      AMPhoneNumber: this.AMPhoneNumber,
      AMUserName: this.AMUserName,
      NSMRole: this.NSMRole,
      NSMName: this.NSMName,
      NSMEmailAddress: this.NSMEmailAddress,
      NSMPhoneNumber: this.NSMPhoneNumber,
      NSMUserName: this.NSMUserName,
      NSM1Name: this.NSM1Name,
      NSM1EmailAddress: this.NSM1EmailAddress,
      NSM1PhoneNumber: this.NSM1PhoneNumber,
      NSM1UserName: this.NSM1UserName,
      VPRole: this.VPRole,
      VPName: this.VPName,
      VPEmailAddress: this.VPEmailAddress,
      VPPhoneNumber: this.VPPhoneNumber,
      VPUserName: this.VPUserName,
      VP1Name: this.VP1Name,
      VP1EmailAddress: this.VP1EmailAddress,
      VP1PhoneNumber: this.VP1PhoneNumber,
      VP1UserName: this.VP1UserName,
      VP2Name: this.VP2Name,
      VP2EmailAddress: this.VP2EmailAddress,
      VP2PhoneNumber: this.VP2PhoneNumber,
      VP2UserName: this.VP2UserName,
      HORole: this.HORole,
      HOName: this.HOName,
      HOEmailAddress: this.HOEmailAddress,
      HOPhoneNumber: this.HOPhoneNumber,
      HOUserName: this.HOUserName
    });

    this.http.post('http://localhost:3000/api/data/add',{
      DealerCode: this.DealerCode,
      DealerName: this.DealerName,
      DealerEmailAddress: this.DealerEmailAddress,
      DealerContactNumber: this.DealerContactNumber,
      TMRole: this.TMRole,
      TMName: this.TMName,
      TMEmailAddress: this.TMEmailAddress,
      TMPhoneNumber: this.TMPhoneNumber,
      TMUserName: this.TMUserName,
      AMRole: this.AMRole,
      AMName: this.AMName,
      AMEmailAddress: this.AMEmailAddress,
      AMPhoneNumber: this.AMPhoneNumber,
      AMUserName: this.AMUserName,
      NSMRole: this.NSMRole,
      NSMName: this.NSMName,
      NSMEmailAddress: this.NSMEmailAddress,
      NSMPhoneNumber: this.NSMPhoneNumber,
      NSMUserName: this.NSMUserName,
      NSM1Name: this.NSM1Name,
      NSM1EmailAddress: this.NSM1EmailAddress,
      NSM1PhoneNumber: this.NSM1PhoneNumber,
      NSM1UserName: this.NSM1UserName,
      VPRole: this.VPRole,
      VPName: this.VPName,
      VPEmailAddress: this.VPEmailAddress,
      VPPhoneNumber: this.VPPhoneNumber,
      VPUserName: this.VPUserName,
      VP1Name: this.VP1Name,
      VP1EmailAddress: this.VP1EmailAddress,
      VP1PhoneNumber: this.VP1PhoneNumber,
      VP1UserName: this.VP1UserName,
      VP2Name: this.VP2Name,
      VP2EmailAddress: this.VP2EmailAddress,
      VP2PhoneNumber: this.VP2PhoneNumber,
      VP2UserName: this.VP2UserName,
      HORole: this.HORole,
      HOName: this.HOName,
      HOEmailAddress: this.HOEmailAddress,
      HOPhoneNumber: this.HOPhoneNumber,
      HOUserName: this.HOUserName
  }, {headers : headers}
    ).subscribe(response => {
       console.log('API response:', response);
       
      // this.loadData();
    })
   


    this.router.navigate(['/dealer-home']);

    // if(response.msg == "Record Created Succesfully!!"){
    //   this.snackBar.open('Dealer details submitted successfully!', 'Close', {
    //       duration: 3000,
    //     });
    // }
    // else{
    //   this.snackBar.open('Dealer code already exists', 'Close', {
    //     duration: 3000,
    //   });
    //}
    // // Show a snackbar message
    // this.snackBar.open('Dealer details submitted successfully!', 'Close', {
    //   duration: 3000,
    // }),
    // (error: { error: { message: string | string[]; }; }) => {
    //   console.error('Error during POST request:', error);
    //   // Check if the error message indicates that the dealer code already exists
    //   if (error.error && error.error.message && error.error.message.includes('Dealer Code Already exists')) {
    //     this.snackBar.open('Dealer Code already exists', 'Close', {
    //       duration: 3000,
    //       horizontalPosition: 'center',
    //       verticalPosition: 'bottom',
    //     });
    //   } else {
    //     // Show a generic error message for other errors
    //     this.snackBar.open('An error occurred while submitting dealer details', 'Close', {
    //       duration: 3000,
    //       horizontalPosition: 'center',
    //       verticalPosition: 'bottom',
    //     });
    //   }
    // }
  }

  // private loadData() {
  //   // Fetch data from the database and update the 'data' property
  //   this.http.get('http://localhost:3000/data').subscribe((response) => {
  //     this.data = response;
  //     console.log('GET request response:', this.data);
  //   });
  }


  

  
  


