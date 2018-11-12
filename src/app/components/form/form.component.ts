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
    const contactForm =  document.getElementById('contactForm');
    contactForm.setAttribute('action', 'https://formspree.io/' + 'contact' + '@' + 'xenonlabs' + '.' + 'ca');
  }

  onSubmit() { }

}
