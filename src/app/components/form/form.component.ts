import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  @Input() title = '';
  name: Boolean = false;
  email: Boolean = false;
  message: Boolean = false;
  submitDisabled = true;

  ngOnInit() {
    const contactForm =  document.getElementById('contactForm');
    contactForm.setAttribute('action', 'https://formspree.io/' + 'contact' + '@' + 'xenonlabs' + '.' + 'ca');
    // contactForm.setAttribute('action', 'https://formspree.io/' + 'info.xenonlabs' + '@' + 'gmail' + '.' + 'com');
  }

  onNameChange(e: any) {
    if (e) {
      this.name = true;
    } else {
      this.name = false;
    }
    this.checkSubmit();
  }

  onMailChange(e: any) {
    if (e) {
      this.email = true;
    } else {
      this.email = false;
    }
    this.checkSubmit();
  }

  onMessageChange(e: any) {
    if (e) {
      this.message = true;
    } else {
      this.message = false;
    }
    this.checkSubmit();
  }

  checkSubmit() {
    if (this.name && this.email && this.message) {
      this.submitDisabled = false;
    }
  }
}
