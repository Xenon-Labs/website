import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  skills_title: String = 'Services';
  skills = [
    {
      title: 'Android Development',
      icon: 'fa fa-android fa-3x'
    },
    {
      title: 'iOS Development',
      icon: 'fa fa-apple fa-3x'
    },
    {
      title: 'Web Development',
      icon: 'fa fa-code fa-3x'
    }
  ];

  contact_title: String = 'CONTACT US';

  constructor() { }

  ngOnInit() {

   }

}
