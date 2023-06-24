export default {
  border: {
    radius: '10px'
  },
  box: {
    shadow: '0 8px 8px rgba(0, 0, 0, 0.08)'
  },
  font: {
    family:
      "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
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
      small: '12px',
      medium: '14px',
      large: '16px',
      xlarge: '18px',
      xxlarge: '20px',
      huge: '24px',
      xhuge: '32px'
    }
  },
  colors: {
    white: '#fff',
    gray_50: '#f0efeb',
    gray_300: '#343a40',
    purple_100: '#7F57DF',
    purple_300: '#5855E9',
    primary: '#2c83fb',
    cyan_400: '#1f7680',
    black: '#0D0D0D',
    gradient: {
      mainTheme:
        'linear-gradient(-45deg, rgba(44,234,251,1) 0%, rgba(31,118,240,1) 0%)'
    }
  },
  gaps: {
    small: '10px',
    medium: '20px',
    large: '40px',
    xlarge: '80px',
    xxlarge: '160px'
  }
} as const;
