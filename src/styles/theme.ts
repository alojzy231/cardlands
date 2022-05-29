import { DefaultTheme } from 'styled-components';

interface IColors {
  primary: string;
  background: string;
  black: string;
  silver: string;
  cards: {
    resourceCard: string;
    foodCard: string;
    animalCard: string;
    buildingCard: string;
    humanCard: string;
    dangerCard: string;
    cardPack: string;
  };
}

export const colors: IColors = {
  primary: '#FFEEBA',
  background: '#FAFFDF',
  black: '#0D0D0D',
  silver: '#EBEBEB',
  cards: {
    resourceCard: '#F1E6CB',
    foodCard: '#FFC3AC',
    animalCard: '#FC8C78',
    buildingCard: '#BF5847',
    humanCard: '#F7E5DC',
    dangerCard: '#CA0B00',
    cardPack: '#333333',
  },
};

interface IMedias {
  desktop: string;
  tablet: string;
  bigMobile: string;
  mobile: string;
  mediumMobile: string;
  smallMobile: string;
}

export const medias: IMedias = {
  desktop: '1440px',
  tablet: '1200px',
  bigMobile: '800px',
  mobile: '690px',
  mediumMobile: '500px',
  smallMobile: '440px',
};

export interface ITheme extends DefaultTheme {
  colors: IColors;
  medias: IMedias;
}

const theme: ITheme = {
  colors,
  medias,
};

export default theme;
