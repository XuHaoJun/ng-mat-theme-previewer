import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { ThemeService, ThemeConfig } from './theme.service';

@Component({
  selector: 'app-theme-picker',
  imports: [
    FormsModule,
    MatCardModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatTooltipModule,
    MatDividerModule,
  ],
  template: `
    <mat-card class="theme-picker-card">
      <mat-card-header>
        <mat-card-title>
          <mat-icon>palette</mat-icon>
          Theme Previewer
        </mat-card-title>
        <mat-card-subtitle>Customize Material 3 tokens in real-time</mat-card-subtitle>
      </mat-card-header>
      
      <mat-card-content>
        <!-- Quick Actions -->
        <div class="quick-actions">
          <button mat-stroked-button 
                  (click)="toggleColorScheme()"
                  [class.dark-mode]="themeService.currentTheme().colorScheme === 'dark'">
            <mat-icon>{{themeService.currentTheme().colorScheme === 'dark' ? 'light_mode' : 'dark_mode'}}</mat-icon>
            {{themeService.currentTheme().colorScheme === 'dark' ? 'Light' : 'Dark'}} Mode
          </button>
          
          <button mat-stroked-button (click)="resetTheme()" matTooltip="Reset to defaults">
            <mat-icon>refresh</mat-icon>
            Reset
          </button>
          
          <button mat-stroked-button (click)="exportTheme()" matTooltip="Export as CSS">
            <mat-icon>download</mat-icon>
            Export
          </button>
        </div>

        <mat-divider style="margin: 16px 0;"></mat-divider>

        <!-- Color Controls -->
        <mat-expansion-panel [expanded]="true">
          <mat-expansion-panel-header>
            <mat-panel-title>
              <mat-icon>color_lens</mat-icon>
              Colors
            </mat-panel-title>
          </mat-expansion-panel-header>
          
          <div class="color-controls">
            <mat-form-field appearance="outline">
              <mat-label>Primary Color</mat-label>
              <input matInput 
                     type="color" 
                     [(ngModel)]="currentTheme.primary"
                     (ngModelChange)="updateColor('primary', $event)">
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Secondary Color</mat-label>
              <input matInput 
                     type="color" 
                     [(ngModel)]="currentTheme.secondary"
                     (ngModelChange)="updateColor('secondary', $event)">
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Tertiary Color</mat-label>
              <input matInput 
                     type="color" 
                     [(ngModel)]="currentTheme.tertiary"
                     (ngModelChange)="updateColor('tertiary', $event)">
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Surface Color</mat-label>
              <input matInput 
                     type="color" 
                     [(ngModel)]="currentTheme.surface"
                     (ngModelChange)="updateColor('surface', $event)">
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Error Color</mat-label>
              <input matInput 
                     type="color" 
                     [(ngModel)]="currentTheme.error"
                     (ngModelChange)="updateColor('error', $event)">
            </mat-form-field>
          </div>
        </mat-expansion-panel>

        <!-- Typography Controls -->
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>
              <mat-icon>text_fields</mat-icon>
              Typography
            </mat-panel-title>
          </mat-expansion-panel-header>
          
          <div class="typography-controls">
            <mat-form-field appearance="outline">
              <mat-label>Plain Font Family</mat-label>
              <mat-select [(ngModel)]="currentTheme.plainFontFamily"
                         (ngModelChange)="updateTypography('plainFontFamily', $event)">
                <mat-option value="Roboto, sans-serif">Roboto</mat-option>
                <mat-option value="Arial, sans-serif">Arial</mat-option>
                <mat-option value="Helvetica, sans-serif">Helvetica</mat-option>
                <mat-option value="Georgia, serif">Georgia</mat-option>
                <mat-option value="'Times New Roman', serif">Times New Roman</mat-option>
                <mat-option value="'Courier New', monospace">Courier New</mat-option>
                <mat-option value="'Inter', sans-serif">Inter</mat-option>
                <mat-option value="'Open Sans', sans-serif">Open Sans</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Brand Font Family</mat-label>
              <mat-select [(ngModel)]="currentTheme.brandFontFamily"
                         (ngModelChange)="updateTypography('brandFontFamily', $event)">
                <mat-option value="Roboto, sans-serif">Roboto</mat-option>
                <mat-option value="Arial, sans-serif">Arial</mat-option>
                <mat-option value="Helvetica, sans-serif">Helvetica</mat-option>
                <mat-option value="Georgia, serif">Georgia</mat-option>
                <mat-option value="'Times New Roman', serif">Times New Roman</mat-option>
                <mat-option value="'Courier New', monospace">Courier New</mat-option>
                <mat-option value="'Inter', sans-serif">Inter</mat-option>
                <mat-option value="'Open Sans', sans-serif">Open Sans</mat-option>
              </mat-select>
            </mat-form-field>

            <div class="weight-controls">
              <label>Regular Weight: {{currentTheme.regularWeight}}</label>
              <mat-slider min="100" max="900" step="100" discrete>
                <input matSliderThumb 
                       [(ngModel)]="currentTheme.regularWeight"
                       (ngModelChange)="updateTypography('regularWeight', $event)">
              </mat-slider>

              <label>Medium Weight: {{currentTheme.mediumWeight}}</label>
              <mat-slider min="100" max="900" step="100" discrete>
                <input matSliderThumb 
                       [(ngModel)]="currentTheme.mediumWeight"
                       (ngModelChange)="updateTypography('mediumWeight', $event)">
              </mat-slider>

              <label>Bold Weight: {{currentTheme.boldWeight}}</label>
              <mat-slider min="100" max="900" step="100" discrete>
                <input matSliderThumb 
                       [(ngModel)]="currentTheme.boldWeight"
                       (ngModelChange)="updateTypography('boldWeight', $event)">
              </mat-slider>
            </div>
          </div>
        </mat-expansion-panel>

        <!-- Shape Controls -->
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>
              <mat-icon>crop_square</mat-icon>
              Shape & Density
            </mat-panel-title>
          </mat-expansion-panel-header>
          
          <div class="shape-controls">
            <mat-form-field appearance="outline">
              <mat-label>Small Corner Radius</mat-label>
              <input matInput 
                     [(ngModel)]="currentTheme.cornerSmall"
                     (ngModelChange)="updateShape('cornerSmall', $event)"
                     placeholder="8px">
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Medium Corner Radius</mat-label>
              <input matInput 
                     [(ngModel)]="currentTheme.cornerMedium"
                     (ngModelChange)="updateShape('cornerMedium', $event)"
                     placeholder="12px">
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Large Corner Radius</mat-label>
              <input matInput 
                     [(ngModel)]="currentTheme.cornerLarge"
                     (ngModelChange)="updateShape('cornerLarge', $event)"
                     placeholder="16px">
            </mat-form-field>

            <div class="density-control">
              <label>Density Scale: {{currentTheme.densityScale}}</label>
              <mat-slider min="-3" max="0" step="1" discrete>
                <input matSliderThumb 
                       [(ngModel)]="currentTheme.densityScale"
                       (ngModelChange)="updateDensity($event)">
              </mat-slider>
              <small>-3 (Compact) to 0 (Spacious)</small>
            </div>
          </div>
        </mat-expansion-panel>

        <!-- Theme Preview Colors -->
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>
              <mat-icon>preview</mat-icon>
              Color Preview
            </mat-panel-title>
          </mat-expansion-panel-header>
          
          <div class="color-preview">
            <div class="color-swatch" 
                 [style.background-color]="currentTheme.primary">
              <span>Primary</span>
            </div>
            <div class="color-swatch" 
                 [style.background-color]="currentTheme.secondary">
              <span>Secondary</span>
            </div>
            <div class="color-swatch" 
                 [style.background-color]="currentTheme.tertiary">
              <span>Tertiary</span>
            </div>
            <div class="color-swatch" 
                 [style.background-color]="currentTheme.surface"
                 [style.border]="'1px solid ' + currentTheme.primary">
              <span [style.color]="currentTheme.primary">Surface</span>
            </div>
          </div>
        </mat-expansion-panel>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .theme-picker-card {
      height: 100%;
      overflow-y: auto;
    }

    .quick-actions {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .quick-actions button {
      flex: 1;
      min-width: 80px;
    }

    .dark-mode {
      background-color: var(--mat-sys-surface-variant) !important;
    }

    .color-controls, .typography-controls, .shape-controls {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 8px 0;
    }

    .weight-controls {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .weight-controls label {
      font-size: 14px;
      color: var(--mat-sys-on-surface-variant);
    }

    .density-control {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .density-control label {
      font-size: 14px;
      color: var(--mat-sys-on-surface-variant);
    }

    .density-control small {
      color: var(--mat-sys-on-surface-variant);
      font-size: 12px;
    }

    .color-preview {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      padding: 8px 0;
    }

    .color-swatch {
      aspect-ratio: 2/1;
      border-radius: var(--mat-sys-corner-small);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 500;
      text-shadow: 0 1px 2px rgba(0,0,0,0.5);
      font-size: 12px;
    }

    mat-expansion-panel {
      margin: 8px 0;
    }

    mat-form-field {
      width: 100%;
    }

    input[type="color"] {
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    mat-card-header mat-icon {
      margin-right: 8px;
    }

    mat-panel-title mat-icon {
      margin-right: 8px;
    }
  `]
})
export class ThemePickerComponent {
  themeService = inject(ThemeService);
  currentTheme: ThemeConfig;

  constructor() {
    this.currentTheme = { ...this.themeService.currentTheme() };
    
    // Subscribe to theme changes
    this.themeService.currentTheme.set = ((value: ThemeConfig) => {
      this.currentTheme = { ...value };
      return value;
    }) as any;
  }

  updateColor(property: keyof ThemeConfig, value: string): void {
    this.themeService.updateThemeProperty(property, value);
  }

  updateTypography(property: keyof ThemeConfig, value: any): void {
    this.themeService.updateThemeProperty(property, value);
  }

  updateShape(property: keyof ThemeConfig, value: string): void {
    this.themeService.updateThemeProperty(property, value);
  }

  updateDensity(value: number): void {
    this.themeService.updateThemeProperty('densityScale', value);
  }

  toggleColorScheme(): void {
    this.themeService.toggleColorScheme();
    this.currentTheme = { ...this.themeService.currentTheme() };
  }

  resetTheme(): void {
    this.themeService.resetToDefaults();
    this.currentTheme = { ...this.themeService.currentTheme() };
  }

  exportTheme(): void {
    const css = this.themeService.exportAsCSS();
    const blob = new Blob([css], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'material-theme.css';
    link.click();
    URL.revokeObjectURL(url);
  }
} 