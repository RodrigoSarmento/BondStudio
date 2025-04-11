import { ImageSourcePropType, ImageStyle, ViewStyle } from 'react-native';

declare global {
  interface IIconButton {
    customStyle?: ViewStyle;
    source: ImageSourcePropType;
    customIconStyle?: ImageStyle;
  }

  interface Room {
    title: string;
    description: string;
    image: ImageSourcePropType;
  }
}

export {};
