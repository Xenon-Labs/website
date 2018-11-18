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
      icon: 'fab fa-android fa-5x'
    },
    {
      title: 'iOS Applications',
      icon: 'fab fa-apple fa-5x'
    },
    {
      title: 'Web Applications',
      icon: 'fas fa-code fa-5x'
    }
  ];

  process_title: String = 'Our Process';

  processes = [
    {
      title: 'Design Collaboratively',
      icon: 'fa fa-list-ul fa-4x '
    },
    {
      title: 'Build Product',
      icon: 'fas fa-laptop-code fa-4x '
    },
    {
      title: 'Review and Test',
      icon: 'fas fa-pencil-alt fa-4x'
    },
    {
      title: 'Launch',
      icon: 'fa fa-rocket fa-4x'
    }
  ];

  contact_title: String = 'CONTACT US';

  constructor() { }

  ngOnInit() {

   }

}
