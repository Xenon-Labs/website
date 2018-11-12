import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  name: String = '';
  _replyto: String = '';
  phone: String = '';
  message: String = '';
  @Input() title = '';


  ngOnInit() {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    // @ts-ignore
    // particlesJS.load('particles-js', 'assets/particles/particles.json', function() { });

    $(document).ready(function() {
      const contactForm =  document.getElementById('contactForm');
      contactForm.setAttribute('action', 'https://formspree.io/' + 'xenon' + '@' + 'hotmail' + '.' + 'com');
    });
  }




}
