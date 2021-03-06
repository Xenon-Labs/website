import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() title: String = '';
  @Input() skills: any = [];

  constructor() { }

  ngOnInit() {
    this.animationEffect();
  }

  /*
    Interactivity to determine when an animated element in in view.
    In view elements trigger our animation
  */
  animationEffect() {
    $(document).ready(function () {

      // Window and animation items
      const animation_elements = $.find('.animation-element');
      const web_window = $(window);

      // Check to see if any animation containers are currently in view
      function check_if_in_view() {
        // Get current window information
        const window_height = web_window.height();
        const window_top_position = web_window.scrollTop();
        const window_bottom_position = (window_top_position + window_height);

        // Iterate through elements to see if its in view
        $.each(animation_elements, function () {

          // Get the element sinformation
          const element = $(this);
          const element_height = $(element).outerHeight();
          const element_top_position = $(element).offset().top;
          const element_bottom_position = (element_top_position + element_height);

          // Check to see if this current container is visible
          // Its viewable if it exists between the viewable space of the viewport
          if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
            element.addClass('in-view');
          } else {
            element.removeClass('in-view');
          }
        });

      }

      // On or scroll, detect elements in view
      $(window).on('scroll resize', function () {
        check_if_in_view();
      });

      // Trigger our scroll event on initial load
      $(window).trigger('scroll');

    });
  }

}
