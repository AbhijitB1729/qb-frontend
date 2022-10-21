import { Component, OnInit } from '@angular/core';
import { Grant } from 'src/app/Models/grant.model';
import { GrantService } from 'src/app/Services/grant.service';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})

export class ApplicationComponent implements OnInit {

    firstName:string|null|undefined;
    lastName:string|null|undefined;
    email:string|null|undefined;
    grantDetail: Grant[]=[]
   

  constructor(private grantService: GrantService) { }
  
  
  ngOnInit(): void {
    this.firstName= localStorage.getItem('firstName')
    this.lastName= localStorage.getItem('lastName')
    this.email= localStorage.getItem('email')

    this.grantService.getAllDetail().subscribe((res:any) => {     
      console.log(res);
      this.grantDetail = res;
      
      
      
    
    
  });

    
  }

}

// const stateCountry = require('state-country');
// const countriesList = stateCountry.getAllCountries();
// const statesList = stateCountry.getAllStates();

