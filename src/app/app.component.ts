import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'NoNameBrand';

  home_links = [
    {
      title: 'About Us',
      link: '#about'
    },
    {
      title: 'What We Build',
      link: '#skills'
    },
    {
      title: 'Contact',
      link: '#contact'
    }
  ];

  social_links = [
    // {
    //   title: 'Twitter',
    //   icon: 'fa fa-twitter-square',
    //   link: 'https://twitter.com'
    // },
    // {
    //   title: 'LinkedIn',
    //   icon: 'fa fa-linkedin-square',
    //   link: 'https://linkedin.com'
    // },
    {
      title: 'Facebook',
      icon: 'fa fa-facebook-square',
      link: 'https://www.facebook.com/Xenon-Labs-302160900396600/'
    },
    {
      title: 'Instagram',
      icon: 'fa fa-instagram',
      link: 'https://www.instagram.com/xenon_labs/'
    }
  ];

  ngOnInit() { }

  ngAfterViewInit() {
    this.grayscaleJS();
    this.landingPage();
  }

  landingPage() {
    $(document).ready(function () {
      // Landing page background size
      $('#home ').css({
        'padding-top': $(window).height() / 2.2,
        'padding-bottom': $(window).height() / 1.8

      });

    });

    $(window).resize(function(){
      $('#home ').css({
        'padding-top': $(window).height() / 2.2,
        'padding-bottom': $(window).height() / 1.8

      });
    });
  }


  grayscaleJS() {
    // JQuery stuff from Grayscale.js
    $(document).ready(function () {

      // Smooth scrolling using jQuery easing
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function (e) {
        // if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          let target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 70)
            }, 1000, 'easeInOutExpo');
            return false;
          }
        // }
      });

      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function (e) {
        $('.navbar-collapse').collapse('hide');
      });

      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#mainNav',
        offset: 100
      });

      // Collapse Navbar
      const navbarCollapse = function () {
        if ($('#mainNav').offset().top > 100) {
          $('#mainNav').addClass('navbar-shrink');
        } else {
          $('#mainNav').removeClass('navbar-shrink');
        }
      };
      // Collapse now if page is not at top
      navbarCollapse();
      // Collapse the navbar when page is scrolled
      $(window).scroll(navbarCollapse);
    });
  }
}
