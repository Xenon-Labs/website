import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() home_links = [];
  @Input() social_links = [];

  deviceInfo: any = null;
  isMobile: Boolean = false;
  isTablet: Boolean = false;
  isDesktop: Boolean = false;

  constructor(private sanitizer: DomSanitizer, private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    this.getDeviceInfo();
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  getDeviceInfo() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktop = this.deviceService.isDesktop();
  }

}
