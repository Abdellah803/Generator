// Theme configuration with multiple color schemes
export type ThemeMode = 'light' | 'dark';
export type ColorScheme = 'default' | 'blue' | 'green' | 'purple' | 'orange';

export interface ThemeConfig {
  mode: ThemeMode;
  colorScheme: ColorScheme;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  success: string;
  error: string;
  warning: string;
}

export const colorSchemes: Record<ColorScheme, Record<ThemeMode, ThemeColors>> = {
  default: {
    light: {
      primary: '#FF6B6B',
      secondary: '#4ECDC4',
      background: '#FFFFFF',
      surface: '#F5F5F5',
      text: '#2D3436',
      textSecondary: '#636E72',
      border: '#DFE6E9',
      success: '#00B894',
      error: '#D63031',
      warning: '#FDCB6E',
    },
    dark: {
      primary: '#FF7675',
      secondary: '#55EFC4',
      background: '#1E1E1E',
      surface: '#2D2D2D',
      text: '#FFFFFF',
      textSecondary: '#B2BEC3',
      border: '#3A3A3A',
      success: '#00B894',
      error: '#FF7675',
      warning: '#FDCB6E',
    },
  },
  blue: {
    light: {
      primary: '#0066CC',
      secondary: '#00CCFF',
      background: '#FFFFFF',
      surface: '#F0F7FF',
      text: '#001A4D',
      textSecondary: '#4D5E7F',
      border: '#CCE0FF',
      success: '#00CC66',
      error: '#FF3333',
      warning: '#FFAA00',
    },
    dark: {
      primary: '#3399FF',
      secondary: '#00DDFF',
      background: '#0D1B2A',
      surface: '#1A2A3A',
      text: '#E6F0FF',
      textSecondary: '#99AABB',
      border: '#334455',
      success: '#00DD77',
      error: '#FF6666',
      warning: '#FFBB33',
    },
  },
  green: {
    light: {
      primary: '#00AA44',
      secondary: '#00DD88',
      background: '#FFFFFF',
      surface: '#F0FFF4',
      text: '#003311',
      textSecondary: '#4D8F66',
      border: '#CCFFDD',
      success: '#00BB55',
      error: '#FF3333',
      warning: '#FFAA00',
    },
    dark: {
      primary: '#22DD77',
      secondary: '#44FFAA',
      background: '#0D2A15',
      surface: '#1A3A25',
      text: '#E6FFEE',
      textSecondary: '#99CCAA',
      border: '#335544',
      success: '#33FF99',
      error: '#FF6666',
      warning: '#FFBB33',
    },
  },
  purple: {
    light: {
      primary: '#7C3AED',
      secondary: '#A78BFA',
      background: '#FFFFFF',
      surface: '#F5F3FF',
      text: '#3F0066',
      textSecondary: '#8B5CF6',
      border: '#E9D5FF',
      success: '#10B981',
      error: '#EF4444',
      warning: '#F59E0B',
    },
    dark: {
      primary: '#A78BFA',
      secondary: '#C4B5FD',
      background: '#2D1B4E',
      surface: '#3D2A60',
      text: '#F3E8FF',
      textSecondary: '#D8B4FE',
      border: '#6D28D9',
      success: '#34D399',
      error: '#F87171',
      warning: '#FBBF24',
    },
  },
  orange: {
    light: {
      primary: '#FF8C42',
      secondary: '#FFB347',
      background: '#FFFFFF',
      surface: '#FFF8F0',
      text: '#662200',
      textSecondary: '#CC8833',
      border: '#FFE4CC',
      success: '#00CC66',
      error: '#FF3333',
      warning: '#FFAA00',
    },
    dark: {
      primary: '#FFB366',
      secondary: '#FFCC99',
      background: '#2A1A0D',
      surface: '#3D2817',
      text: '#FFE6CC',
      textSecondary: '#FFBB88',
      border: '#885533',
      success: '#33FF99',
      error: '#FF6666',
      warning: '#FFDD44',
    },
  },
};
