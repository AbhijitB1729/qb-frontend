import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Grant } from '../../Models/grant.model';
import { GrantService } from '../../Services/grant.service';

@Component({
  selector: 'app-edit-grant',
  templateUrl: './edit-grant.component.html',
  styleUrls: ['./edit-grant.component.css']
})
export class EditGrantComponent implements OnInit {

    editGrantRequest: Grant = {
    id:'',
    grantName:'',
    programCode:'',
    startDate:new Date(),
    endDate:new Date(),

  }; 

  constructor(private grantService:GrantService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe({
      next: (params:any) => {
        const id = params.get('id');

        if (id) {
          this.grantService.getGrant(id)
          .subscribe({
            next: (response:any) => {
              this.editGrantRequest=response;
            }
          })
        }
      }
    })
  }

  updateGrant(){
    this.grantService.updateGrant(this.editGrantRequest.id!, this.editGrantRequest)
   .subscribe({
      next: (response:any) => {
   
        this.router.navigate(['grant']);
      }
   });
 
  } 

 

}
