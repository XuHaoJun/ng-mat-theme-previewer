import { Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export interface ThemeConfig {
  // Color tokens
  primary: string;
  secondary: string;
  tertiary: string;
  surface: string;
  background: string;
  error: string;
  
  // Typography tokens
  plainFontFamily: string;
  brandFontFamily: string;
  regularWeight: number;
  mediumWeight: number;
  boldWeight: number;
  
  // Density and shape
  densityScale: number;
  cornerSmall: string;
  cornerMedium: string;
  cornerLarge: string;
  
  // Theme type
  colorScheme: 'light' | 'dark' | 'light dark';
}

export interface ColorPalette {
  [key: number]: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Signal to track current theme configuration
  currentTheme = signal<ThemeConfig>({
    primary: '#6750a4',
    secondary: '#625b71',
    tertiary: '#7d5260',
    surface: '#fffbfe',
    background: '#fffbfe', 
    error: '#ba1a1a',
    plainFontFamily: 'Roboto, sans-serif',
    brandFontFamily: 'Roboto, sans-serif',
    regularWeight: 400,
    mediumWeight: 500,
    boldWeight: 700,
    densityScale: 0,
    cornerSmall: '8px',
    cornerMedium: '12px',
    cornerLarge: '16px',
    colorScheme: 'light'
  });

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Apply initial theme only if we're running in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.applyTheme(this.currentTheme());
    }
  }

  /**
   * Updates a specific theme property and applies the change
   */
  updateThemeProperty<K extends keyof ThemeConfig>(
    property: K, 
    value: ThemeConfig[K]
  ): void {
    const currentConfig = this.currentTheme();
    const newConfig = { ...currentConfig, [property]: value };
    this.currentTheme.set(newConfig);
    this.applyTheme(newConfig);
  }

  /**
   * Updates multiple theme properties at once
   */
  updateTheme(updates: Partial<ThemeConfig>): void {
    const currentConfig = this.currentTheme();
    const newConfig = { ...currentConfig, ...updates };
    this.currentTheme.set(newConfig);
    this.applyTheme(newConfig);
  }

  /**
   * Toggles between light and dark themes
   */
  toggleColorScheme(): void {
    const current = this.currentTheme().colorScheme;
    const newScheme = current === 'light' ? 'dark' : 'light';
    this.updateThemeProperty('colorScheme', newScheme);
  }

  /**
   * Applies theme configuration by setting CSS custom properties
   */
  private applyTheme(config: ThemeConfig): void {
    // Only apply theme if we're running in the browser
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const root = this.document.documentElement;
    
    // Apply color-scheme for light-dark() function
    root.style.setProperty('color-scheme', config.colorScheme);

    // Generate and apply color system variables
    this.applyColorTokens(config);
    
    // Apply typography tokens
    this.applyTypographyTokens(config);
    
    // Apply shape tokens
    this.applyShapeTokens(config);
    
    // Apply density (this would need component-specific tokens)
    this.applyDensityTokens(config);
  }

  /**
   * Converts hex color to RGB components for Material Design color functions
   */
  private hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  /**
   * Generates Material 3 color tokens from base colors
   */
  private applyColorTokens(config: ThemeConfig): void {
    const root = this.document.documentElement;
    
    // For simplicity, we'll override key system variables directly
    // In a real implementation, you'd want to generate full palettes
    
    root.style.setProperty('--mat-sys-primary', config.primary);
    root.style.setProperty('--mat-sys-secondary', config.secondary);
    root.style.setProperty('--mat-sys-tertiary', config.tertiary);
    root.style.setProperty('--mat-sys-surface', config.surface);
    root.style.setProperty('--mat-sys-background', config.background);
    root.style.setProperty('--mat-sys-error', config.error);
    
    // Generate container colors (lighter/darker variants)
    const primaryRgb = this.hexToRgb(config.primary);
    if (primaryRgb) {
      const primaryContainer = config.colorScheme === 'dark' 
        ? `rgb(${Math.max(0, primaryRgb.r - 50)} ${Math.max(0, primaryRgb.g - 50)} ${Math.max(0, primaryRgb.b - 50)})`
        : `rgb(${Math.min(255, primaryRgb.r + 50)} ${Math.min(255, primaryRgb.g + 50)} ${Math.min(255, primaryRgb.b + 50)})`;
      
      root.style.setProperty('--mat-sys-primary-container', primaryContainer);
    }
    
    // Apply on-surface colors based on theme brightness
    const onSurface = config.colorScheme === 'dark' ? '#ffffff' : '#000000';
    const onPrimary = config.colorScheme === 'dark' ? '#000000' : '#ffffff';
    
    root.style.setProperty('--mat-sys-on-surface', onSurface);
    root.style.setProperty('--mat-sys-on-primary', onPrimary);
    root.style.setProperty('--mat-sys-on-background', onSurface);
  }

  /**
   * Applies typography system variables
   */
  private applyTypographyTokens(config: ThemeConfig): void {
    const root = this.document.documentElement;
    
    root.style.setProperty('--mat-sys-plain-font-family', config.plainFontFamily);
    root.style.setProperty('--mat-sys-brand-font-family', config.brandFontFamily);
    root.style.setProperty('--mat-sys-regular-font-weight', config.regularWeight.toString());
    root.style.setProperty('--mat-sys-medium-font-weight', config.mediumWeight.toString());
    root.style.setProperty('--mat-sys-bold-font-weight', config.boldWeight.toString());
  }

  /**
   * Applies shape system variables  
   */
  private applyShapeTokens(config: ThemeConfig): void {
    const root = this.document.documentElement;
    
    root.style.setProperty('--mat-sys-corner-small', config.cornerSmall);
    root.style.setProperty('--mat-sys-corner-medium', config.cornerMedium);
    root.style.setProperty('--mat-sys-corner-large', config.cornerLarge);
    root.style.setProperty('--mat-sys-corner-extra-large', `calc(${config.cornerLarge} * 1.5)`);
  }

  /**
   * Applies density-related tokens
   */
  private applyDensityTokens(config: ThemeConfig): void {
    // Density primarily affects component-specific tokens
    // This would require updating individual component density tokens
    // For now, we'll just store the scale for future use
    const root = this.document.documentElement;
    root.style.setProperty('--mat-sys-density-scale', config.densityScale.toString());
  }

  /**
   * Resets theme to Material Design defaults
   */
  resetToDefaults(): void {
    const defaultTheme: ThemeConfig = {
      primary: '#6750a4',
      secondary: '#625b71', 
      tertiary: '#7d5260',
      surface: '#fffbfe',
      background: '#fffbfe',
      error: '#ba1a1a',
      plainFontFamily: 'Roboto, sans-serif',
      brandFontFamily: 'Roboto, sans-serif',
      regularWeight: 400,
      mediumWeight: 500,
      boldWeight: 700,
      densityScale: 0,
      cornerSmall: '8px',
      cornerMedium: '12px', 
      cornerLarge: '16px',
      colorScheme: 'light'
    };
    
    this.currentTheme.set(defaultTheme);
    this.applyTheme(defaultTheme);
  }

  /**
   * Exports current theme as CSS variables
   */
  exportAsCSS(): string {
    const config = this.currentTheme();
    return `
:root {
  color-scheme: ${config.colorScheme};
  
  /* Color System Variables */
  --mat-sys-primary: ${config.primary};
  --mat-sys-secondary: ${config.secondary};
  --mat-sys-tertiary: ${config.tertiary};
  --mat-sys-surface: ${config.surface};
  --mat-sys-background: ${config.background};
  --mat-sys-error: ${config.error};
  
  /* Typography System Variables */
  --mat-sys-plain-font-family: ${config.plainFontFamily};
  --mat-sys-brand-font-family: ${config.brandFontFamily};
  --mat-sys-regular-font-weight: ${config.regularWeight};
  --mat-sys-medium-font-weight: ${config.mediumWeight};
  --mat-sys-bold-font-weight: ${config.boldWeight};
  
  /* Shape System Variables */
  --mat-sys-corner-small: ${config.cornerSmall};
  --mat-sys-corner-medium: ${config.cornerMedium};
  --mat-sys-corner-large: ${config.cornerLarge};
}`.trim();
  }
} 