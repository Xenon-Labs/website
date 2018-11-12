import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss',
    '../../../assets/themes/grayscale.css'
  ]
})
export class HeaderComponent implements OnInit {
  app = {
    name: 'Xenon Labs'
  };

  constructor() { }

  ngOnInit() { }
}
