import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Designed By <b><a href="http://pappugroup.com" target="_blank"> PappuGroup Analytics</a></b></span>
  `,
})
export class FooterComponent {
}
