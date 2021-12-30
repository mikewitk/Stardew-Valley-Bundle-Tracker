export const theme = {
  colors: {
    BLUE: '#4263EB',
    PURPLE: '#7048E8',
    PINK: '#51CF66',
    BLACK: '#212429',
    GRAY4: '#495057',
    GRAY3: '#ACB5BD',
    GRAY2: '#DDE2E5',
    GRAY1: '#F8F9FA',
  },
  spacing: {
    '1x': '8px',
    '2x': '16px',
    '3x': '32px',
    '4x': '64px',
  },
};

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      BLUE: string;
      PURPLE: string;
      PINK: string;
      BLACK: string;
      GRAY4: string;
      GRAY3: string;
      GRAY2: string;
      GRAY1: string;
    };
    spacing: {
      '1x': string;
      '2x': string;
      '3x': string;
      '4x': string;
    };
  }
}
