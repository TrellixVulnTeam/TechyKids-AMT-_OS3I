import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { FormsModule }    from '@angular/forms';

import { FrontpageComponent } from './frontpage/frontpage.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ContactComponent } from './contact/contact.component';
import { SampleComponent } from './sample/sample.component';
import { HeadersComponent } from './headers/headers.component';
import { FootersComponent } from './footers/footers.component';

import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [FrontpageComponent, SliderComponent, AboutComponent, ServicesComponent, NewsletterComponent, ContactComponent, SampleComponent, HeadersComponent, FootersComponent],
  imports: [
    ThemeModule,
    CommonModule,
    WebsiteRoutingModule,
    FormsModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    NgxSpinnerModule
  ]
})
export class WebsiteModule { }
 