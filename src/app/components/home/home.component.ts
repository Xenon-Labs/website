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
      icon: 'fa fa-android fa-3x'
    },
    {
      title: 'iOS Applications',
      icon: 'fa fa-apple fa-3x'
    },
    {
      title: 'Web Applications',
      icon: 'fa fa-code fa-3x'
    }
  ];

  process_title: String = 'Our Process';

  processes = [
    {
      title: 'Determine Requirments',
      icon: 'fa fa-list-ul fa-3x '
    },
    {
      title: 'Build Product',
      icon: 'fas fa-laptop-code fa-3x '
    },
    {
      title: 'Review/Fix',
      icon: 'fas fa-screwdriver fa-3x'
    },
    {
      title: 'Launch',
      icon: 'fa fa-rocket fa-3x'
    }
  ];

  contact_title: String = 'CONTACT US';

  constructor() { }

  ngOnInit() {

   }

}
