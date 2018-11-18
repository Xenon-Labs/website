import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  skills_title: String = 'What We Build';
  skills = [
    {
      title: 'Android Applications',
      icon: 'fa fa-android fa-5x'
    },
    {
      title: 'iOS Applications',
      icon: 'fa fa-apple fa-5x'
    },
    {
      title: 'Web Applications',
      icon: 'fa fa-code fa-5x'
    }
  ];

  process_title: String = "Our Process";

  processes = [
    {
      title: 'Determine Requirments',
      icon: 'fa fa-3x fa-list-ul'
    },
    {
      title: 'Build Product',
      icon: 'fa fa-3x  fa-laptop-code'
    },
    {
      title: 'Review/Fix',
      icon: 'fa fa-3x fa-screwdriver'
    },
    {
      title: 'Launch',
      icon: 'fa fa-3x fa-rocket'
    }
  ]

  contact_title: String = 'CONTACT US';

  constructor() { }

  ngOnInit() {

   }

}
