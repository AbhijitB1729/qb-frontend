import { Component, OnInit,ViewChild ,Input} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'Grant',   
      icon: 'fa-solid fa-building',
      routerLink: ''
    },

    {
      number: '2',
      name: 'Review',
      icon: 'fa fa-refresh',
      routerLink: 'students'
    },

    
  ];


  
  constructor() { }
    
  ngOnInit(): void {
    
  }

}
