import { Component, OnInit } from '@angular/core';
import { AddDealerDetailsComponent } from '../add-dealer-details/add-dealer-details.component';
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-edit-dealer-details',
  templateUrl: './edit-dealer-details.component.html',
  styleUrls: ['./edit-dealer-details.component.css']
})
export class EditDealerDetailsComponent implements OnInit {
  selectedOption = new FormControl('');
  dealerId: any;
  Dealer : any;
  data: any = {};
  userobj : any;
  status : any;

  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient,private snackBar: MatSnackBar,private dialog: MatDialog) { }

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

UpdateDealer() {
    this.openConfirmationDialog();
}
updateDealer() {
  // Assign the new data directly to userobj
  var token = localStorage.getItem('token') ?? '';
  var headers = new HttpHeaders({
    'token': token
  });

  this.userobj = {
    DealerCode: this.data[0].DealerCode,
DealerName: this.data[0].DealerName,
DealerEmailAddress: this.data[0].DealerEmailAddress,
DealerContactNumber: this.data[0].DealerContactNumber,
TMRole: this.data[0].TMRole,
TMName: this.data[0].TMName,
TMEmailAddress: this.data[0].TMEmailAddress,
TMPhoneNumber: this.data[0].TMPhoneNumber,
TMUserName: this.data[0].TMUserName,
AMRole: this.data[0].AMRole,
AMName: this.data[0].AMName,
AMEmailAddress: this.data[0].AMEmailAddress,
AMPhoneNumber: this.data[0].AMPhoneNumber,
AMUserName: this.data[0].AMUserName,
NSMRole: this.data[0].NSMRole,
NSMName: this.data[0].NSMName,
NSMEmailAddress: this.data[0].NSMEmailAddress,
NSMPhoneNumber: this.data[0].NSMPhoneNumber,
NSMUserName: this.data[0].NSMUserName,
NSM1Name: this.data[0].NSM1Name,
NSM1EmailAddress: this.data[0].NSM1EmailAddress,
NSM1PhoneNumber: this.data[0].NSM1PhoneNumber,
NSM1UserName: this.data[0].NSM1UserName,
VPRole: this.data[0].VPRole,
VPName: this.data[0].VPName,
VPEmailAddress: this.data[0].VPEmailAddress,
VPPhoneNumber: this.data[0].VPPhoneNumber,
VPUserName: this.data[0].VPUserName,
VP1Name: this.data[0].VP1Name,
VP1EmailAddress: this.data[0].VP1EmailAddress,
VP1PhoneNumber: this.data[0].VP1PhoneNumber,
VP1UserName: this.data[0].VP1UserName,
VP2Name: this.data[0].VP2Name,
VP2EmailAddress: this.data[0].VP2EmailAddress,
VP2PhoneNumber: this.data[0].VP2PhoneNumber,
VP2UserName: this.data[0].VP2UserName,
HORole: this.data[0].HORole,
HOName: this.data[0].HOName,
HOEmailAddress: this.data[0].HOEmailAddress,
HOPhoneNumber: this.data[0].HOPhoneNumber,
HOUserName: this.data[0].HOUserName

  };

  console.log("Updated data:", this.userobj);
  
  // Make an API call to update the dealer details
  this.http.put('http://localhost:3000/api/data/edit', this.userobj, {headers : headers})
    .subscribe(response => {
      console.log('API response:', response);
      this.status = response;
      console.log (this.status.msg);
      // if (this.data && this.data.msg === 'Data Edited Succesfully!!') {
      //   this.snackBar.open('Data edited successfully!', 'Close', {
      //     duration: 3000,
      //   });
      // }
      // Redirect to the dealer home page after successful update
      this.router.navigate(['/dealer-home']);
     
    }, error => {
      console.error('Error updating dealer', error);
    });
}


// private loadData() {
//   // Fetch data from the database and update the 'data' property
//   this.http.get('http://localhost:3000/api/data/get').subscribe((response) => {
//     this.data = response;
//     console.log('GET request response:', this.data);
//   });
// }

ngOnInit(): void {
  // Access the route parameters
  this.route.params.subscribe(params => {
    // params is an object containing the route parameters
    this.dealerId = params['id'];
    console.log('Dealer ID:', this.dealerId);
    var token = localStorage.getItem('token') ?? '';
    var headers = new HttpHeaders({
      'token': token
    });
    // Now you can use the dealerId as needed in your component
    this.http.post('http://localhost:3000/api/data/find',{
    inputData: this.dealerId,
  }, {headers : headers}).subscribe(response => {
      console.log('API response:', response);
      this.data = response;
      // this.loadData();
    });
  });
}

openConfirmationDialog(): void {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    width: '250px',
    data: 'Are you sure you want to update the dealer details?'
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // If user confirms, proceed with the update
      this.updateDealer();
    }
    else{
      this.router.navigate(['/dealer-home']);
    }
  });
}

}

