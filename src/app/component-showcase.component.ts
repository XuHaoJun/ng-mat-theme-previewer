import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-showcase',
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatBadgeModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  template: `
    <div class="showcase-container">
      <h2>Component Showcase</h2>
      <p>See how your theme changes affect different Material components:</p>

      <!-- Buttons Section -->
      <mat-card class="showcase-section">
        <mat-card-header>
          <mat-card-title>Buttons</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="button-showcase">
            <button mat-raised-button color="primary">Primary Raised</button>
            <button mat-flat-button color="primary">Primary Flat</button>
            <button mat-stroked-button color="primary">Primary Stroked</button>
            <button mat-button color="primary">Primary Basic</button>
            
            <button mat-raised-button color="accent">Secondary Raised</button>
            <button mat-flat-button color="accent">Secondary Flat</button>
            <button mat-stroked-button color="accent">Secondary Stroked</button>
            <button mat-button color="accent">Secondary Basic</button>

            <button mat-fab color="primary" matTooltip="Primary FAB">
              <mat-icon>add</mat-icon>
            </button>
            <button mat-mini-fab color="accent" matTooltip="Secondary Mini FAB">
              <mat-icon>edit</mat-icon>
            </button>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Form Controls Section -->
      <mat-card class="showcase-section">
        <mat-card-header>
          <mat-card-title>Form Controls</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="form-showcase">
            <mat-form-field appearance="outline">
              <mat-label>Outlined Input</mat-label>
              <input matInput placeholder="Enter text here" [(ngModel)]="sampleText">
              <mat-icon matSuffix>search</mat-icon>
            </mat-form-field>

            <mat-form-field appearance="fill">
              <mat-label>Filled Select</mat-label>
              <mat-select [(ngModel)]="selectedOption">
                <mat-option value="option1">Option 1</mat-option>
                <mat-option value="option2">Option 2</mat-option>
                <mat-option value="option3">Option 3</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="picker" [(ngModel)]="selectedDate">
              <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
              <mat-datepicker #picker></mat-datepicker>
            </mat-form-field>

            <div class="checkbox-group">
              <mat-checkbox [(ngModel)]="isChecked1">Checkbox 1</mat-checkbox>
              <mat-checkbox [(ngModel)]="isChecked2" color="accent">Checkbox 2 (Accent)</mat-checkbox>
              <mat-checkbox [(ngModel)]="isChecked3" disabled>Disabled Checkbox</mat-checkbox>
            </div>

            <mat-radio-group [(ngModel)]="radioValue">
              <mat-radio-button value="1">Radio Option 1</mat-radio-button>
              <mat-radio-button value="2">Radio Option 2</mat-radio-button>
              <mat-radio-button value="3" disabled>Disabled Radio</mat-radio-button>
            </mat-radio-group>

            <div class="toggle-controls">
              <mat-slide-toggle [(ngModel)]="isToggled1">Slide Toggle</mat-slide-toggle>
              <mat-slide-toggle [(ngModel)]="isToggled2" color="accent">Accent Toggle</mat-slide-toggle>
            </div>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Progress & Feedback Section -->
      <mat-card class="showcase-section">
        <mat-card-header>
          <mat-card-title>Progress & Feedback</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="progress-showcase">
            <div class="progress-item">
              <label>Progress Bar</label>
              <mat-progress-bar mode="determinate" [value]="progressValue"></mat-progress-bar>
            </div>

            <div class="progress-item">
              <label>Progress Spinner</label>
              <mat-progress-spinner mode="determinate" [value]="progressValue"></mat-progress-spinner>
            </div>

            <div class="slider-item">
              <label>Slider: {{sliderValue}}</label>
              <mat-slider min="0" max="100" step="1">
                <input matSliderThumb [(ngModel)]="sliderValue">
              </mat-slider>
            </div>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Navigation & Layout Section -->
      <mat-card class="showcase-section">
        <mat-card-header>
          <mat-card-title>Navigation & Layout</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-tab-group>
            <mat-tab label="Tab 1">
              <div class="tab-content">
                <h4>Tab 1 Content</h4>
                <p>This is the content of the first tab.</p>
              </div>
            </mat-tab>
            <mat-tab label="Tab 2">
              <div class="tab-content">
                <h4>Tab 2 Content</h4>
                <p>This is the content of the second tab.</p>
              </div>
            </mat-tab>
            <mat-tab label="Disabled" disabled>
              <div class="tab-content">
                <p>This tab is disabled.</p>
              </div>
            </mat-tab>
          </mat-tab-group>

          <mat-list>
            <mat-list-item>
              <mat-icon matListItemIcon>home</mat-icon>
              <div matListItemTitle>Home</div>
              <div matListItemLine>Navigate to home page</div>
            </mat-list-item>
            <mat-list-item>
              <mat-icon matListItemIcon>settings</mat-icon>
              <div matListItemTitle>Settings</div>
              <div matListItemLine>Configure application settings</div>
            </mat-list-item>
            <mat-list-item>
              <mat-icon matListItemIcon [matBadge]="3" matBadgeColor="accent">notifications</mat-icon>
              <div matListItemTitle>Notifications</div>
              <div matListItemLine>View recent notifications</div>
            </mat-list-item>
          </mat-list>
        </mat-card-content>
      </mat-card>

      <!-- Chips & Tags Section -->
      <mat-card class="showcase-section">
        <mat-card-header>
          <mat-card-title>Chips & Tags</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-chip-set>
            <mat-chip>Primary Chip</mat-chip>
            <mat-chip color="accent">Accent Chip</mat-chip>
            <mat-chip selected>Selected Chip</mat-chip>
            <mat-chip disabled>Disabled Chip</mat-chip>
            <mat-chip removable="true" (removed)="removeChip()">
              Removable Chip
              <mat-icon matChipRemove>cancel</mat-icon>
            </mat-chip>
          </mat-chip-set>
        </mat-card-content>
      </mat-card>

      <!-- Typography Showcase -->
      <mat-card class="showcase-section">
        <mat-card-header>
          <mat-card-title>Typography</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="typography-showcase">
            <h1 class="mat-display-large">Display Large</h1>
            <h2 class="mat-display-medium">Display Medium</h2>
            <h3 class="mat-display-small">Display Small</h3>
            <h4 class="mat-headline-large">Headline Large</h4>
            <h5 class="mat-headline-medium">Headline Medium</h5>
            <h6 class="mat-headline-small">Headline Small</h6>
            <p class="mat-title-large">Title Large</p>
            <p class="mat-title-medium">Title Medium</p>
            <p class="mat-title-small">Title Small</p>
            <p class="mat-body-large">Body Large - This is body text in the large size.</p>
            <p class="mat-body-medium">Body Medium - This is body text in the medium size.</p>
            <p class="mat-body-small">Body Small - This is body text in the small size.</p>
            <p class="mat-label-large">Label Large</p>
            <p class="mat-label-medium">Label Medium</p>
            <p class="mat-label-small">Label Small</p>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .showcase-container {
      padding: 16px;
      max-width: 100%;
    }

    .showcase-section {
      margin-bottom: 24px;
    }

    .button-showcase {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
    }

    .form-showcase {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 400px;
    }

    .checkbox-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .toggle-controls {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .progress-showcase {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 300px;
    }

    .progress-item, .slider-item {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .progress-item mat-progress-spinner {
      width: 50px;
      height: 50px;
    }

    .tab-content {
      padding: 16px;
    }

    .typography-showcase h1,
    .typography-showcase h2,
    .typography-showcase h3,
    .typography-showcase h4,
    .typography-showcase h5,
    .typography-showcase h6,
    .typography-showcase p {
      margin: 8px 0;
    }

    mat-list {
      max-width: 400px;
    }

    mat-chip-set {
      max-width: 500px;
    }
  `]
})
export class ComponentShowcaseComponent {
  sampleText = 'Sample input text';
  selectedOption = 'option1';
  selectedDate = new Date();
  isChecked1 = true;
  isChecked2 = false;
  isChecked3 = true;
  radioValue = '1';
  isToggled1 = true;
  isToggled2 = false;
  progressValue = 65;
  sliderValue = 50;

  constructor() {
    // Animate progress value for demo
    setInterval(() => {
      this.progressValue = (this.progressValue + 1) % 101;
    }, 100);
  }

  removeChip(): void {
    // Chip removal logic
    console.log('Chip removed');
  }
} 