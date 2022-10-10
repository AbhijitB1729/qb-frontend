import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared.module';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})

export class TopnavComponent implements OnInit {

  constructor() { }
  currentUser :string|null|undefined;
  ngOnInit(): void {
    this.currentUser=localStorage.getItem('currentUser')
  }

}
