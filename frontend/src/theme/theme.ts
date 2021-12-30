const colors = {
  BLUE: '#4263EB',
  PURPLE: '#7048E8',
  PINK: '#51CF66',
  BLACK: '#212429',
  GRAY4: '#495057',
  GRAY3: '#ACB5BD',
  GRAY2: '#DDE2E5',
  GRAY1: '#F8F9FA',
  WHITE: '#FFFFFF',
};

export const theme = {
  colors,
  spacing: {
    '1x': '8px',
    '2x': '16px',
    '3x': '32px',
    '4x': '64px',
  },
};

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors;
    spacing: {
      '1x': string;
      '2x': string;
      '3x': string;
      '4x': string;
    };
  }
}
