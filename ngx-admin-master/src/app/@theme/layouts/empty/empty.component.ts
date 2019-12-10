import { Component } from '@angular/core';

@Component({
  selector: 'ngx-empty',
  styleUrls: ['./empty.component.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <div class="single-features-area wow fadeInUp" data-wow-delay="700ms">
          <img src="assets/images/img/core-img/banner.gif" alt="" style="height:50px; width:auto">
        </div>
      </nb-layout-header>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class EmptyComponent {}
