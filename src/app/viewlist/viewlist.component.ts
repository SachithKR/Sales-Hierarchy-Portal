import { Component } from '@angular/core';
import { AddDealerDetailsComponent } from '../add-dealer-details/add-dealer-details.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})
export class ViewlistComponent {
  constructor(private http: HttpClient, private snackBar: MatSnackBar,private router: Router) { }
  navigateToEditPage(dealer: any) {
    // Assuming 'edit' is the route for your edit page
    //this.router.navigate(['dealer-edit', dealer.DealerCode]); // Replace 'edit' with your actual edit route
    this.router.navigate(['/dealer-edit', dealer.DealerCode]);
  }

  data : any;
  searchTerm: any;

View() {
  // this.loadData();
  var token = localStorage.getItem('token') ?? '';
  var headers = new HttpHeaders({
    'token': token
  });
  this.http.get('http://localhost:3000/api/data/get',{headers}).subscribe((response) => {
      
      this.data = response;
      console.log('GET request response:', this.data);
      if(response === 401){
        this.router.navigate(['/login']);
      }
    });
}

Export (){
  const token = localStorage.getItem('token') ?? '';
  const headers = { 'token': `${token}` };
  this.http.get('http://localhost:3000/api/export', {headers, responseType: 'blob'}).subscribe(
      (response: Blob) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = 'sales.xlsx';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      },
      (error) => {
        console.error('Error exporting data:', error);
      }
    );
}

onSearch() {
  var token = localStorage.getItem('token') ?? '';
  var headers = new HttpHeaders({
    'token': token
  });
  console.log('Search Term:', this.searchTerm);
  
  this.http.post('http://localhost:3000/api/data/search', { inputData: this.searchTerm }, { headers: headers })
    .subscribe(
      (response: any) => {
        console.log('API response:', response);
        this.data = response;
        console.log(this.data.length);
        if (this.data.length === 0) {
          // Show snackbar when no search term is found
          this.snackBar.open('No results found for the search term!', 'Close', {
            duration: 3000,
            verticalPosition: 'top'
          });
        }
      },
      (error: any) => {
        // Handle error here
        if(error.status === 404){
          this.snackBar.open('No Data Found', 'Close', {
            duration: 3000,
            verticalPosition: 'top'
          });
        }
        
      }
    );

  this.searchTerm = "";
}


DeleteDealer(id: number) {
  this.snackBar.open('Currently the Delete Function is not permitted', 'Close', {
    duration: 3000,
    verticalPosition: 'top'
  });
  
  // code for delete functionality
  // this.http.delete(`http://localhost:3000/api/data/delete/${id}`).subscribe(
  //   (response: any) => {
  //     console.log('Delete request response:', response);
  //     this.snackBar.open('Dealer details deleted successfully!', 'Close', {
  //       duration: 3000,
  //     });
  //     // Refresh the data after deletion
  //     this.loadData();
  //   },
  //   (error) => {
  //     console.error('Error deleting dealer:', error);
  //     this.snackBar.open('Error deleting dealer details!', 'Close', {
  //       duration: 3000,
  //     });
  //   }
  // );
}
private loadData() {
  // Fetch data from the database and update the 'data' property
  this.http.get('http://localhost:3000/api/data/get').subscribe((response) => {
    this.data = response;
    console.log('GET request response:', this.data);
  });
}

}
