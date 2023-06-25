import { plusJakarta } from './fonts';

export default {
  border: {
    radius: '10px'
  },
  box: {
    shadow: '0 8px 8px rgba(0, 0, 0, 0.08)'
  },
  font: {
    family: plusJakarta.style.fontFamily,
    lineHeights: {
      small: '1.5',
      medium: '1.8',
      large: '2.0',
      xlarge: '2.2'
    },
    weight: {
      extraLight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800
    },
    style: {
      italic: 'italic',
      normal: 'normal'
    },
    sizes: {
      small: '8px',
      xxsmall: '10px',
      xsmall: '12px',
      medium: '15px',
      large: '16px',
      xlarge: '18px',
      xxlarge: '22px',
      huge: '28px',
      xhuge: '32px',
      xxhuge: '44px',
      xxxhuge: '48px',
      mega: '64px',
      xmega: '72px',
      xxmega: '88px'
    }
  },
  colors: {
    white: '#fff',
    gray_50: '#f0efeb',
    gray_100: '#d1d1d1',
    gray_200: '#677294',
    gray_300: '#343a40',
    light_blue: '#e9ecf3',
    purple_100: '#7F57DF',
    purple_300: '#5855E9',
    primary: '#007dff',
    blue_50: '#ebeef5',
    cyan_400: '#858da8',
    black: '#2c3e50',
    gradient: {
      mainTheme:
        'linear-gradient(-45deg, rgba(44,234,251,1) 0%, rgba(31,118,240,1) 0%)'
    }
  },
  gaps: {
    small: '6px',
    xsmall: '10px',
    xxxsmall: '12px',
    medium: '20px',
    large: '40px',
    xlarge: '80px',
    xxlarge: '160px'
  }
} as const;
