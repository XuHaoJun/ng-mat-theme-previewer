import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { ButtonOverviewExample } from './@angular/components/src/components-examples/material/button/button-overview/button-overview-example';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemePickerComponent } from './theme-picker.component';
import { ComponentShowcaseComponent } from './component-showcase.component';

@Component({
  selector: 'app-root',
  imports: [
    MatSlideToggleModule,
    MatButtonModule,
    ButtonOverviewExample,
    MatToolbarModule,
    ThemePickerComponent,
    ComponentShowcaseComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'ng-mat-theme-previewer';
}
